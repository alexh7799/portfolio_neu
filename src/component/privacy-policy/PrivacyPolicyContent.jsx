import { Component } from 'react'
import { withTranslation } from 'react-i18next';
import '../../i18n/i18n';

export class PrivacyPolicyContent extends Component {
    /**
     * Renders the Privacy Policy content.
     *
     * @returns {JSX.Element}
     *
     * @description
     * This component renders the content of the Privacy Policy page, including website information,
     * disclaimer, copyright information, and a call to action for contacting the owner.
     */
    render() {
        const { t, i18n } = this.props;

        return (
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 md:p-8 border border-gray-700">
                <h1 className="text-4xl font-bold text-white mb-8 hyphens-auto">{t('policy.title')}</h1>
                <div className="prose prose-invert max-w-none">
                    <div className="text-gray-300 space-y-6 leading-relaxed">
                        <p className="text-gray-400 text-sm">Last updated: 18.08.2025</p>
                    </div>
                    <section className='text-gray-300' dangerouslySetInnerHTML={{ __html: t('policy.section1') }} />
                    <section className='text-gray-300' dangerouslySetInnerHTML={{ __html: t('policy.section2') }} />
                    <section className='text-gray-300' dangerouslySetInnerHTML={{ __html: t('policy.section3') }} />
                    <section className='text-gray-300' dangerouslySetInnerHTML={{ __html: t('policy.section4') }} />
                </div>
            </div>
        )
    }
}

export default withTranslation()(PrivacyPolicyContent)