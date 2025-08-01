import React, { Component } from 'react'
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';
import { withTranslation } from 'react-i18next';
import '../../i18n/i18n';

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      errors: {
        name: '',
        email: '',
        message: ''
      },
      isSubmitting: false,
      submitMessage: ''
    };
  }

  isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  containsSuspiciousCode = (text) => {
    const suspiciousPatterns = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
      /javascript:/gi,
      /vbscript:/gi,
      /onload\s*=/gi,
      /onerror\s*=/gi,
      /onclick\s*=/gi,
      /onmouseover\s*=/gi,
      /<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi,
      /<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi,
      /eval\s*\(/gi,
      /document\.cookie/gi,
      /document\.write/gi,
      /innerHTML/gi,
      /\bSQL\b.*?(INSERT|UPDATE|DELETE|DROP|CREATE|ALTER)/gi,
      /UNION.*?SELECT/gi,
      /SELECT.*?FROM/gi,
      /<\s*\/?\s*(script|iframe|object|embed|form|input|meta|link)/gi
    ];
    return suspiciousPatterns.some(pattern => pattern.test(text));
  };

  sanitizeText = (text) => {
    return text
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  };

  validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = t('contact.formError.nameRequired');
        else if (value.trim().length < 4) error = t('contact.formError.nameTooShort');
        else if (value.trim().length > 50) error = t('contact.formError.nameTooLong');
        else if (this.containsSuspiciousCode(value)) error = t('contact.formError.nameInvalid');
        else if (!/^[a-zA-ZäöüÄÖÜß]+$/.test(value.trim())) error = t('contact.formError.nameInvalidChars');
        break;
      case 'email':
        if (!value.trim()) error = t('contact.formError.emailRequired');
        else if (!this.isValidEmail(value.trim())) error = t('contact.formError.emailInvalid');
        else if (value.trim().length > 100) error = t('contact.formError.emailTooLong');
        else if (this.containsSuspiciousCode(value)) error = t('contact.formError.emailInvalidChars');
        break;
      case 'message':
        if (!value.trim()) error = t('contact.formError.messageRequired');
        else if (value.trim().length < 10) error = t('contact.formError.messageTooShort');
        else if (value.trim().length > 1000) error = t('contact.formError.messageTooLong');
        else if (this.containsSuspiciousCode(value)) error = t('contact.formError.messageInvalid');
        break;
      default:
        break;
    }
    return error;
  };

  validateForm = () => {
    const { formData } = this.state;
    const errors = {};
    let isValid = true;
    Object.keys(formData).forEach(field => {
      const error = this.validateField(field, formData[field]);
      errors[field] = error;
      if (error) isValid = false;
    });
    this.setState({ errors });
    return isValid;
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      formData: {...this.state.formData, [name]: value},
      errors: {...this.state.errors, [name]: this.validateField(name, value)},
      submitMessage: ''
    });
  };

 handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.isSubmitting) return;
    
    this.setState({ isSubmitting: true, submitMessage: '', submitType: '' });
    
    if (!this.validateForm()) {
      this.setState({ 
        isSubmitting: false,
        submitMessage: t('contact.formError.formInvalid'),
        submitType: 'error'
      });
      return;
    }

    const { formData } = this.state;
    
    // Security check
    const allFieldsValid = Object.values(formData).every(value => 
      !this.containsSuspiciousCode(value)
    );

    if (!allFieldsValid) {
      this.setState({
        isSubmitting: false,
        submitMessage: t('contact.formError.formInvalid'),
        submitType: 'error'
      });
      return;
    }

    try {
      const emailData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referer: window.location.href
      };

      const response = await fetch('https://xn--alexander-hrst-5pb.de/sendMail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.text();
      
      if (result.includes('success') || result.includes('erfolgreich') || response.status === 200) {
        this.setState({
          isSubmitting: false,
          submitMessage: t('contact.formSuccess'),
          submitType: 'success',
          formData: { name: '', email: '', message: '' },
          errors: { name: '', email: '', message: '' }
        });
      } else {
        throw new Error('Server returned error: ' + result);
      }

    } catch (error) {
      console.error('Error sending email:', error);

      let errorMessage = t('contact.formErrorGeneric');

      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        errorMessage += t('contact.formErrorGeneric');
      } else if (error.message.includes('404')) {
        errorMessage += t('contact.formErrorGeneric');
      } else if (error.message.includes('500')) {
        errorMessage += t('contact.formErrorGeneric');
      } else {
        errorMessage += t('contact.formErrorGeneric');
      }

      this.setState({
        isSubmitting: false,
        submitMessage: errorMessage,
        submitType: 'error'
      });
    }
  };


  render() {
    const { t, i18n } = this.props;
    const { formData, errors, isSubmitting, submitMessage } = this.state;

    return (
      <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-800 rounded-xl p-4 sm:p-6 md:p-8 border border-gray-700">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">{t('contact.form.title')}</h3>

              {submitMessage && (
                <div className={`mb-4 p-2 rounded-lg ${
                  submitMessage.includes('erfolgreich') 
                    ? 'bg-green-900/50 border border-green-500 text-green-300' 
                    : 'bg-red-900/50 border border-red-500 text-red-300'
                }`}>
                  <div className="flex items-center space-x-2">
                    <AlertCircle size={20} />
                    <span>{submitMessage}</span>
                  </div>
                </div>
              )}

            <form onSubmit={this.handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    {t('contact.form.name.label')} *
                  </label>
                  <input
                    type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={this.handleChange}
                      required
                      maxLength={50}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white focus:outline-none transition-colors ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-gray-600 focus:border-blue-500'
                      }`}
                    placeholder={t('contact.form.name.placeholder')}
                  disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-400 flex text-xs items-center">
                        <AlertCircle size={16} />
                        <span className='text-xs'>{errors.name}</span>
                      </p>
                    )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    {t('contact.form.email.label')} *
                  </label>
                  <input
                    type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={this.handleChange}
                      required
                      maxLength={100}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white focus:outline-none transition-colors ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-gray-600 focus:border-blue-500'
                      }`}
                    placeholder={t('contact.form.email.placeholder')}
                  disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-400 text-xs flex items-center">
                        <AlertCircle size={16} />
                        <span className='text-xs'>{errors.email}</span>
                      </p>
                    )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  {t('contact.form.message.label')} *
                </label>
                <textarea
                  id="message"
                    name="message"
                    value={formData.message}
                    onChange={this.handleChange}
                    required
                    rows={6}
                    maxLength={1000}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white focus:outline-none transition-colors resize-none ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-400' 
                        : 'border-gray-600 focus:border-blue-500'
                    }`}
                  placeholder={t('contact.form.message.placeholder')}
                disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400 flex items-center space-x-1">
                      <AlertCircle size={16} />
                      <span className='text-xs'>{errors.message}</span>
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    {formData.message.length}/1000 Zeichen
                  </p>
              </div>

              <button
                type="submit"
                  disabled={isSubmitting || Object.values(errors).some(error => error !== '')}
                  className={`w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting || Object.values(errors).some(error => error !== '')
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white hover:scale-105'
                  }`}
                >
                  <Send size={20} />
                  <span>
                    {isSubmitting ? t('contact.form.sendwait') : t('contact.form.send')}
                  </span>
              </button>
            </form>
          </div>

          <div className="space-y-8 flex flex-col">
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 md:p-8 border border-gray-700">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">{t('contact.getInTouch.title')}</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-sm sm:text-md text-white font-semibold">hoerst.alexander@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">{t('contact.getInTouch.phone')}</p>
                    <p className="text-sm sm:text-md text-white font-semibold">+49 1575 2102518</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">{t('contact.getInTouch.location')}</p>
                    <p className="text-sm sm:text-md text-white font-semibold">Hörstel, DE</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-4 sm:p-6 md:p-8 border border-blue-500/20">
              <h4 className="text-md sm:text-1xl font-semibold text-white mb-2">
                {t('contact.responseTimeTitle')}
              </h4>
              <p className="text-md sm:text-1xl text-gray-300">
                {t('contact.responseTimeDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}

export default withTranslation()(Contact)