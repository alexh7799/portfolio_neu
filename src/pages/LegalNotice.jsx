import React, { Component } from 'react'
import Footer from '../component/footer/Footer'
import Navbar from '../component/navbar/navbar'
import SocialMedia from '../component/social-media/SocialMedia'
import LegalNoticeContent from '../component/legal-notice/LegalNoticeContent'
import { withTranslation } from 'react-i18next'
import '../i18n/i18n';

export class LegalNotice extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div className="min-h-screen bg-gray-900 mt-8">
                <Navbar />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full fixed top-16 left-0 right-0 z-40">
                    <SocialMedia />
                </div>
                <main className="pt-20 pb-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gray-800 rounded-xl p-4 sm:p-6 md:p-8 border border-gray-700">
                            <LegalNoticeContent />
                        </div>
                    </div>
                </main>
                <Footer />
            </div >
        )
    }
}

export default withTranslation()(LegalNotice);