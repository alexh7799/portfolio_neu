import React, { Component } from 'react'
import { Star, Quote } from 'lucide-react';
import { withTranslation } from 'react-i18next';
import '../../i18n/i18n';

export class References extends Component {
    
  render() {
    const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b60e2015?w=100&h=100&fit=crop&crop=face',
      content: 'Working with John was exceptional. He delivered our e-commerce platform ahead of schedule and exceeded all expectations. His attention to detail and technical expertise are outstanding.',
      rating: 5,
      project: 'E-Commerce Platform'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, DataFlow Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: 'John transformed our data visualization needs into an intuitive, powerful dashboard. His ability to understand complex requirements and translate them into elegant solutions is remarkable.',
      rating: 5,
      project: 'Analytics Dashboard'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager, FinTech Pro',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'The mobile banking app John developed for us has received incredible user feedback. His focus on security and user experience made all the difference.',
      rating: 5,
      project: 'Mobile Banking App'
    },
    {
      name: 'David Thompson',
      role: 'Founder, ContentAI',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'John\'s AI content generator exceeded our wildest expectations. The integration with OpenAI was seamless, and the user interface is incredibly intuitive.',
      rating: 5,
      project: 'AI Content Generator'
    },
    {
      name: 'Lisa Wang',
      role: 'Director, TeamCollab',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      content: 'Our task management app has transformed how our team works. John\'s real-time features and collaborative tools are game-changing.',
      rating: 5,
      project: 'Task Management App'
    },
    {
      name: 'Robert Kim',
      role: 'VP Engineering, SocialConnect',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      content: 'John built our social media platform with incredible scalability and performance. His expertise in modern web technologies is evident in every feature.',
      rating: 5,
      project: 'Social Media Platform'
    }
  ];
    return (
      <section id="references" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client References
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it - hear what my clients have to say about our collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 text-blue-500/30" size={24} />
                <p className="text-gray-300 italic leading-relaxed pl-4">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-700">
                <span className="text-blue-400 text-sm font-medium">
                  Project: {testimonial.project}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to be my next success story?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join these satisfied clients and let's create something amazing together. Your project deserves the same level of dedication and expertise.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
    )
  }
}

export default withTranslation()(References)