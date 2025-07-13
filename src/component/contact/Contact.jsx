import React, { Component } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { withTranslation } from 'react-i18next';
import '../../i18n/i18n';

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', this.state.formData);
  };

  handleChange = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    const { formData } = this.state;
    return (
      <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            <form onSubmit={this.handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={this.handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={this.handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={this.handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Project Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={this.handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white font-semibold">contact@johndeveloper.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white font-semibold">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors group"
                >
                  <Github className="w-6 h-6 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors group"
                >
                  <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors group"
                >
                  <Twitter className="w-6 h-6 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/20">
              <h4 className="text-lg font-semibold text-white mb-2">
                Response Time
              </h4>
              <p className="text-gray-300">
                I typically respond to all inquiries within 24 hours. For urgent projects, feel free to call directly.
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