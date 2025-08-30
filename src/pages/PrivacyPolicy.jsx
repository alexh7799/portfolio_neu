import React, { Component } from 'react'
import Navbar from '../component/navbar/navbar'
import SocialMedia from '../component/social-media/SocialMedia'
import Footer from '../component/footer/Footer'
import PrivacyPolicyContent from '../component/privacy-policy/PrivacyPolicyContent'

export class PrivacyPolicy extends Component {
    /**
     * Renders the Privacy Policy page.
     *
     * @returns {JSX.Element}
     *
     * @description
     * This component renders the Privacy Policy page, including navigation bar, social media,
     * content and footer.
     */
    render() {
        return (
            <div className="min-h-screen bg-gray-900">
                <Navbar />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full fixed top-16 left-0 right-0 z-40">
                    <SocialMedia />
                </div>
                <main className="pt-20 pb-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                        <PrivacyPolicyContent/>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default PrivacyPolicy