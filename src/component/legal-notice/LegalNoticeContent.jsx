import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import '../../i18n/i18n';

export class LegalNoticeContent extends Component {
    /**
     * Renders the Legal Notice content.
     *
     * @returns {JSX.Element}
     *
     * @description
     * This component renders the content of the Legal Notice page, including website information,
     * disclaimer, copyright information, and a call to action for contacting the owner.
     */
    render() {
        const { t, i18n } = this.props;

        return (
            <section>
                <h1 className="text-4xl font-bold text-white mb-8">{t("legal-notice.title")}</h1>
                <div className="prose prose-invert max-w-none">
                    <div className="text-gray-300 space-y-6 leading-relaxed">
                        <p className="text-gray-400 text-sm">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Website Information</h2>
                            <div className="bg-gray-700 p-4 rounded-lg" dangerouslySetInnerHTML={{ __html: t('legal-notice.info') }}>

                            </div>
                        </section>
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">{t("legal-notice.disclaimer")}</h2>
                            <p>
                                {t("legal-notice.disclaimerDescription")}
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4 hyphens-auto">{t("legal-notice.copyright")}</h2>
                            <p>
                                {t("legal-notice.copyrightDescription")}
                            </p>
                        </section>
                        <section>
                            <p>
                                {t("legal-notice.cta")}
                                <a href='https://www.dieter-datenschutz.de/' target='_blank' className='text-white hover:text-gray-400'>Dieter macht den Datenschutz</a>
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        )
    }
}

export default withTranslation()(LegalNoticeContent)