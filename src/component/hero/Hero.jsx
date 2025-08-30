import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import '../../i18n/i18n';
import { ArrowDown } from 'lucide-react';
import ThreeBackground from './TreeBackground';

export class Hero extends React.Component {
    /**
     * Class constructor.
     * 
     * @param {Object} props Properties passed from the parent component.
     */
    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * Scrolls to the next section of the page.
     */
    scrollToNextSection = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    render() {
        const { t } = this.props;
        return (
            <section id='home' className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative overflow-hidden pt-30 pb-20">
                <ThreeBackground />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="animate-fade-in flex flex-col-reverse md:flex-row lg:flex-row gap-4 sm:gap-6 md:gap-2 lg:gap-12 items-center">
                        <div className="text-center lg:text-left px-4 sm:px-0 lg:px-0">
                            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                {t('hero.iam')}{' '}
                                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    {t('hero.name')}
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                                {t('hero.description')}{' '}
                                {t('hero.technologies')}
                            </p>
                            <button
                                onClick={this.scrollToNextSection}
                                className='block px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white hover:scale-102'>
                                {t('hero.button')}
                                <ArrowDown size={22} className="inline ml-2 mb-1 group-hover:translate-y-1 transition-transform" />
                            </button>
                        </div>

                        <div className="flex justify-center lg:justify-end scale-80 sm:scale-80 md:scale-80 lg:scale-110 pr-0 sm:pr-6 md:pr-6 lg:pr-2 xl:pr-0">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
                                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-50"></div>
                                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                                    <img
                                        src="/img/hero.svg"
                                        alt="John Developer"
                                        className="w-full h-full mt-4 object-cover scale-95 hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="absolute top-8 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce delay-1000"></div>
                                <div className="absolute bottom-12 -left-6 w-6 h-6 bg-purple-400 rounded-full animate-bounce delay-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}

export default withTranslation()(Hero);