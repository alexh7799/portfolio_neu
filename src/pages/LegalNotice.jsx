import React, { Component } from 'react'
import Footer from '../component/footer/Footer'
import Navbar from '../component/navbar/navbar'
import SocialMedia from '../component/social-media/SocialMedia'
import { withTranslation } from 'react-i18next'
import './../i18n/i18n';

export class LegalNotice extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div className="min-h-screen bg-gray-900">
                <Navbar />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full fixed top-16 left-0 right-0 z-40">
                    <SocialMedia />
                </div>

                <div className="pt-20 pb-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                            <h1 className="text-4xl font-bold text-white mb-8">Legal Notice</h1>

                            <div className="prose prose-invert max-w-none">
                                <div className="text-gray-300 space-y-6 leading-relaxed">
                                    <p className="text-gray-400 text-sm">
                                        Last updated: {new Date().toLocaleDateString()}
                                    </p>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-white mb-4">Website Information</h2>
                                        <div className="bg-gray-700 p-4 rounded-lg">
                                            <p><strong>Website Owner:</strong> John Developer</p>
                                            <p><strong>Email:</strong> contact@johndeveloper.com</p>
                                            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                                            <p><strong>Address:</strong> San Francisco, CA, United States</p>
                                        </div>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-white mb-4">Terms of Use</h2>
                                        <p>
                                            By accessing and using this website, you accept and agree to be bound by
                                            the terms and provision of this agreement. If you do not agree to abide by
                                            the above, please do not use this service.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
                                        <p>
                                            The content of this website, including but not limited to text, graphics,
                                            images, logos, and software, is the property of John Developer and is
                                            protected by copyright and other intellectual property laws.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-white mb-4">Use License</h2>
                                        <p>
                                            Permission is granted to temporarily download one copy of the materials
                                            on this website for personal, non-commercial transitory viewing only.
                                            This is the grant of a license, not a transfer of title, and under this license you may not:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1">
                                            <li>Modify or copy the materials</li>
                                            <li>Use the materials for any commercial purpose or for any public display</li>
                                            <li>Attempt to reverse engineer any software contained on the website</li>
                                            <li>Remove any copyright or other proprietary notations from the materials</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer</h2>
                                        <p>
                                            The materials on this website are provided on an 'as is' basis. John Developer
                                            makes no warranties, expressed or implied, and hereby disclaim and negate all
                                            other warranties including without limitation, implied warranties or conditions
                                            of merchantability, fitness for a particular purpose, or non-infringement of
                                            intellectual property or other violation of rights.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-white mb-4">Limitations</h2>
                                        <p>
                                            In no event shall John Developer or its suppliers be liable for any damages
                                            (including, without limitation, damages for loss of data or profit, or due to
                                            business interruption) arising out of the use or inability to use the materials
                                            on this website, even if John Developer or an authorized representative has been
                                            notified orally or in writing of the possibility of such damage.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-white mb-4">External Links</h2>
                                        <p>
                                            This website may contain links to external websites. John Developer has no
                                            control over the content of these sites and accepts no responsibility for
                                            them or for any loss or damage that may arise from your use of them.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-white mb-4">Professional Services</h2>
                                        <p>
                                            Information about services provided is for general information purposes only.
                                            Specific project details, timelines, and costs will be outlined in separate
                                            contracts or agreements. All professional services are subject to separate
                                            terms and conditions.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-white mb-4">Privacy</h2>
                                        <p>
                                            Your privacy is important to us. Please review our Privacy Policy, which also
                                            governs your use of the website, to understand our practices.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-white mb-4">Governing Law</h2>
                                        <p>
                                            These terms and conditions are governed by and construed in accordance with
                                            the laws of California, United States, and you irrevocably submit to the
                                            exclusive jurisdiction of the courts in that state or location.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
                                        <p>
                                            If you have any questions about this Legal Notice, please contact us:
                                        </p>
                                        <div className="bg-gray-700 p-4 rounded-lg mt-4">
                                            <p><strong>Email:</strong> contact@johndeveloper.com</p>
                                            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                                            <p><strong>Address:</strong> San Francisco, CA, United States</p>
                                        </div>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-white mb-4">Changes to Terms</h2>
                                        <p>
                                            We reserve the right to modify these terms at any time. Changes will be
                                            effective immediately upon posting on this website. Your continued use of the
                                            website after any changes indicates your acceptance of the new terms.
                                        </p>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default withTranslation()(LegalNotice)