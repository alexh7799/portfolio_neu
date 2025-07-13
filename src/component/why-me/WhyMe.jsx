import React, { Component } from 'react'
import { Award, Clock, Users, Lightbulb } from 'lucide-react';
import { withTranslation } from 'react-i18next';
import '../../i18n/i18n';

export class WhyMe extends Component {
  render() {
    const { t, i18n } = this.props;
    const reasons = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Fast Delivery',
      description: 'I deliver high-quality projects on time, every time. Your deadlines are my priority.',
      stats: '98% On-Time Delivery'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Code',
      description: 'Clean, maintainable, and scalable code that follows industry best practices.',
      stats: '5+ Years Experience'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-Focused',
      description: 'Your success is my success. I work closely with you to understand your needs.',
      stats: '50+ Happy Clients'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'I stay updated with the latest technologies to bring innovative solutions.',
      stats: 'Latest Tech Stack'
    }
  ];

    return (
      <section id="why-me" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Me?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I combine technical expertise with business understanding to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700 hover:border-blue-500/50"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {reason.icon}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 mb-3 leading-relaxed">
                    {reason.description}
                  </p>
                  <div className="text-blue-400 font-semibold">
                    {reason.stats}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 text-center border border-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Work Together?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss your project and see how I can help bring your vision to life with cutting-edge technology and exceptional service.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
    )
  }
}

export default withTranslation()(WhyMe)