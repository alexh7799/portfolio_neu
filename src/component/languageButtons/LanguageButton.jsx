import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import '../../i18n/i18n';
import './LanguageButton.css';

export class LanguageButton extends Component {
    changeLanguage = (lng) => {
        this.props.i18n.changeLanguage(lng);
    };

    // Toggle-Funktion für einen Button
    toggleLanguage = () => {
        const currentLang = this.props.i18n.language;
        const newLang = currentLang === 'de' ? 'en' : 'de';
        this.changeLanguage(newLang);
    };

    render() {
        const { t, i18n } = this.props;
        return (
            <div className='pointer-events-auto hover:scale-110 transition-all duration-300'>
                <div className="pointer-events-auto">
                    <div className="flex justify-end py-2">
                        <button
                            onClick={this.toggleLanguage}
                            className="width-button px-6 py-2 bg-gray-800/95 backdrop-blur-sm border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all flex items-center space-x-2 font-medium"
                        >
                            <span>{i18n.language === 'de' ? 'EN' : 'DE'}</span>

                        </button>
                    </div>
                </div>
            </div>
        );
    }
}


export default withTranslation()(LanguageButton);