import React, { Component } from 'react'
import { Award, Clock, Users, Lightbulb } from 'lucide-react';
import { withTranslation } from 'react-i18next';
import '../../i18n/i18n';
import WhyMeCard from './whyMeCard/WhyMeCard';

export class WhyMe extends Component {
  render() {
    const { t, i18n } = this.props;
    const reasons = [
      {
        icon: <Clock className="w-8 h-8" />,
        title: t('why_me.fast_delivery.title'),
        description: t('why_me.fast_delivery.description'),
        stats: t('why_me.fast_delivery.stats')
      },
      {
        icon: <Award className="w-8 h-8" />,
        title: t('why_me.quality_code.title'),
        description: t('why_me.quality_code.description'),
        stats: t('why_me.quality_code.stats')
      },
      {
        icon: <Users className="w-8 h-8" />,
        title: t('why_me.client_focused.title'),
        description: t('why_me.client_focused.description'),
        stats: t('why_me.client_focused.stats')
      },
      {
        icon: <Lightbulb className="w-8 h-8" />,
        title: t('why_me.latest_tech.title'),
        description: t('why_me.latest_tech.description'),
        stats: t('why_me.latest_tech.stats')
      }
    ];

    return (
      <section id="why-me" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('why_me.title')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              {t('why_me.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <WhyMeCard
                key={index}
                reason={reason}
              />
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-4 sm:p-6 md:p-8 text-center border border-blue-500/20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              {t('why_me.ready_to_work')}
            </h3>
            <p className="text-md sm:text-1xl text-gray-300 mb-6 max-w-2xl mx-auto">
              {t('why_me.ready_to_work_description')}
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              {t('why_me.get_in_touch')}
            </button>
          </div>
        </div>
      </section>
    )
  }
}

export default withTranslation()(WhyMe)