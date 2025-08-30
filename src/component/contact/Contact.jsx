import React, { Component } from 'react'
import { Mail, Phone, MapPin, Send, AlertCircle, Linkedin, Github } from 'lucide-react';
import { withTranslation } from 'react-i18next';
import '../../i18n/i18n';

export class Contact extends Component {
  /**
   * Initializes the state for the Contact component.
   *
   * @param {Object} props - The properties passed to the component.
   *
   * @description
   * Sets up the initial state with form data containing name, email, and message fields,
   * errors for each of these fields, a flag to indicate form submission status, and a message
   * to display upon submission.
   */
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

  /**
   * Validates the email format.
   *
   * @param {string} email - The email address to validate.
   * @returns {boolean} True if the email is valid, false otherwise.
   */
  isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /**
   * Checks if the text contains suspicious code patterns.
   *
   * @param {string} text - The text to check.
   * @returns {boolean} True if suspicious code is found, false otherwise.
   */
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

  /**
   * Sanitizes user input by escaping HTML special characters.
   *
   * @param {string} text - The text to sanitize.
   * @returns {string} The sanitized text.
   */
  sanitizeText = (text) => {
    return text
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  };

  /**
   * Validates the name field.
   *
   * @param {string} value - The value of the name field.
   * @returns {string} The validation error message, if any.
   */
  validateNameField = (value) => {
    const { t } = this.props;
    if (!value.trim()) return t('contact.formError.nameRequired');
    if (value.trim().length < 4) return t('contact.formError.nameTooShort');
    if (value.trim().length > 50) return t('contact.formError.nameTooLong');
    if (this.containsSuspiciousCode(value)) return t('contact.formError.nameInvalid');
    if (!/^[a-zA-ZäöüÄÖÜß\s-]+$/.test(value.trim())) return t('contact.formError.nameInvalidChars');
    return '';
  }

  /**
   * Validates the email field.
   *
   * @param {string} value - The value of the email field.
   * @returns {string} The validation error message, if any.
   */
  validateEmailField = (value) => {
    const { t } = this.props;
    if (!value.trim()) return t('contact.formError.emailRequired');
    if (!this.isValidEmail(value.trim())) return t('contact.formError.emailInvalid');
    if (value.trim().length > 100) return t('contact.formError.emailTooLong');
    if (this.containsSuspiciousCode(value)) return t('contact.formError.emailInvalidChars');
    return '';
  };

  /**
   * Validates the message field.
   *
   * @param {string} value - The value of the message field.
   * @returns {string} The validation error message, if any.
   */
  validateMessageField = (value) => {
    const { t } = this.props;
    if (!value.trim()) return t('contact.formError.messageRequired');
    if (value.trim().length < 10) return t('contact.formError.messageTooShort');
    if (value.trim().length > 1000) return t('contact.formError.messageTooLong');
    if (this.containsSuspiciousCode(value)) return t('contact.formError.messageInvalid');
    return '';
  };

  /**
   * Validates a specific form field.
   *
   * @param {string} name - The name of the form field.
   * @param {string} value - The value of the form field.
   * @returns {string} The validation error message, if any.
   */
  validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        error = this.validateNameField(value);
        break;
      case 'email':
        error = this.validateEmailField(value);
        break;
      case 'message':
        error = this.validateMessageField(value);
        break;
      default:
        break;
    }
    return error;
  };

  /**
   * Validates the entire form.
   *
   * @returns {boolean} True if the form is valid, false otherwise.
   */
  validateForm = () => {
    const { t } = this.props;
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

  /**
   * Handles changes to form fields.
   *
   * @param {*} e - The event object.
   */
  handleChange = (e) => {
    const { t } = this.props;
    const { name, value } = e.target;
    this.setState({
      formData: { ...this.state.formData, [name]: value },
      errors: { ...this.state.errors, [name]: this.validateField(name, value) },
      submitMessage: ''
    });
  };

  /**
   * Handles errors that occur during form submission.
   *
   * @param {*} error - The error object.
   */
  returnError = () => {
    if (!this.validateForm()) {
      this.setState({
        isSubmitting: false,
        submitMessage: this.props.t('contact.formError.formInvalid'),
        submitType: 'error'
      });
      return;
    }
  };


  /**
   * Validates the fields in the form data.
   *
   * @param {*} formData - The form data to validate.
   * @returns {boolean} True if all fields are valid, false otherwise.
   */
  fieldsValidate = (formData) => {
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
  };

  /**
   * Sends an email.
   *
   * @param {*} emailData - The data to include in the email.
   * @returns {Promise<Response>} The response from the email service.
   */
  sendEmail = async (emailData) => {
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
    return response;
  }

  /**
   * Handles successful email sending.
   *
   * @param {*} result - The result of the email sending.
   */
  successEmail = async (result) => {
    const { t } = this.props;
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
  };

  /**
   * Handles errors that occur during form submission.
   *
   * @param {*} error - The error object.
   */
  errorCatch = (error) => {
    const { t } = this.props;
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
  };

  /**
   * Handles the form submission.
   *
   * @param {*} e - The event object.
   * @returns {Promise<void>}
   */
  handleSubmit = async (e) => {
    const { t } = this.props;
    e.preventDefault();
    if (this.state.isSubmitting) return;
    this.returnError();
    const { formData } = this.state;
    this.fieldsValidate(formData);
    this.setState({ isSubmitting: true, submitMessage: '', submitType: '' });
    try {
      const emailData = { name: formData.name.trim(), email: formData.email.trim(), message: formData.message.trim(), timestamp: new Date().toISOString(), userAgent: navigator.userAgent, referer: window.location.href };
      const response = await this.sendEmail(emailData);
      const result = await response.text();
      this.successEmail(result);
    } catch (error) {
      this.errorCatch(error);
    }
  };

  /**
   * Renders the contact page.
   *
   * @returns {JSX.Element} The contact page.
   */
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
                <div className={`mb-4 p-2 rounded-lg ${submitMessage.includes('erfolgreich')
                  ? 'bg-green-900/50 border border-green-500 text-green-300'
                  : 'bg-red-900/50 border border-red-500 text-red-300'
                  }`}>
                  <div className="flex items-center space-x-2">
                    <AlertCircle size={20} />
                    <span>{submitMessage}</span>
                  </div>
                </div>
              )}

              <form onSubmit={this.handleSubmit} className="space-y-6" noValidate>
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
                      maxLength={50}
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white focus:outline-none transition-colors ${errors.name
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-gray-600 focus:border-blue-500'
                        }`}
                      placeholder={t('contact.form.name.placeholder')}
                      disabled={isSubmitting}
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-red-400 flex text-xs items-center space-x-1">
                        <AlertCircle size={16} />
                        <span>{errors.name}</span>
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
                      maxLength={100}
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white focus:outline-none transition-colors ${errors.email
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-gray-600 focus:border-blue-500'
                        }`}
                      placeholder={t('contact.form.email.placeholder')}
                      disabled={isSubmitting}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-red-400 text-xs flex items-center space-x-1">
                        <AlertCircle size={16} />
                        <span>{errors.email}</span>
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
                    rows={6}
                    maxLength={1000}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white focus:outline-none transition-colors resize-none ${errors.message
                      ? 'border-red-500 focus:border-red-400'
                      : 'border-gray-600 focus:border-blue-500'
                      }`}
                    placeholder={t('contact.form.message.placeholder')}
                    disabled={isSubmitting}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-400 flex items-center space-x-1">
                      <AlertCircle size={16} />
                      <span>{errors.message}</span>
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    {formData.message.length}/1000 Zeichen
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || Object.values(errors).some(error => error !== '')}
                  className={`w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${isSubmitting || Object.values(errors).some(error => error !== '')
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white hover:scale-105'
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>{t('contact.form.sendwait')}</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>{t('contact.form.send')}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
            <div className="space-y-8 flex flex-col">
              <div className="bg-gray-800 rounded-xl p-4 sm:p-6 md:p-8 border border-gray-700">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">{t('contact.getInTouch.title')}</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Email</p>
                      <p className="text-sm sm:text-md text-white font-semibold hyphens-auto">info@alexander-hörst.de</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Github</p>
                      <p className="text-sm sm:text-md text-white font-semibold">github.com/alexh7799/</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Linkedin</p>
                      <p className="text-sm sm:text-md text-white font-semibold">linkedin.com/in/alexander-hoerst/</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 sm:space-x-4">
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