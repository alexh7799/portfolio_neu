import React, { Component } from 'react'
import Navbar from '../component/navbar/navbar'
import SocialMedia from '../component/social-media/SocialMedia'
import Footer from '../component/footer/Footer'

export class PrivacyPolicy extends Component {
    render() {
        return (
            <div className="min-h-screen bg-gray-900">
                <Navbar />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full fixed top-16 left-0 right-0 z-40">
                    <SocialMedia />
                </div>

                <div className="pt-20 pb-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                            <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

                            <div className="prose prose-invert max-w-none">
                                <div className="text-gray-300 space-y-6 leading-relaxed">
                                    <p className="text-gray-400 text-sm">
                                        Last updated: {new Date().toLocaleDateString()}
                                    </p>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
                                        <p>
                                            This Privacy Policy describes how John Developer ("we", "us", or "our") collects,
                                            uses, and protects your personal information when you visit our portfolio website
                                            or use our services.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
                                        <h3 className="text-xl font-medium text-white mb-2">Personal Information</h3>
                                        <p>When you contact us through our website, we may collect:</p>
                                        <ul className="list-disc pl-6 space-y-1">
                                            <li>Name and contact information (email address, phone number)</li>
                                            <li>Company name and job title</li>
                                            <li>Project details and requirements</li>
                                            <li>Any other information you voluntarily provide</li>
                                        </ul>

                                        <h3 className="text-xl font-medium text-white mb-2 mt-4">Automatically Collected Information</h3>
                                        <p>We may automatically collect certain information about your visit:</p>
                                        <ul className="list-disc pl-6 space-y-1">
                                            <li>IP address and device information</li>
                                            <li>Browser type and version</li>
                                            <li>Pages visited and time spent on our site</li>
                                            <li>Referring website information</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
                                        <p>We use the collected information to:</p>
                                        <ul className="list-disc pl-6 space-y-1">
                                            <li>Respond to your inquiries and provide requested information</li>
                                            <li>Communicate about potential projects and services</li>
                                            <li>Improve our website and user experience</li>
                                            <li>Comply with legal obligations</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-white mb-4">Information Sharing</h2>
                                        <p>
                                            We do not sell, trade, or rent your personal information to third parties.
                                            We may share your information only in the following circumstances:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1">
                                            <li>With your explicit consent</li>
                                            <li>To comply with legal requirements</li>
                                            <li>To protect our rights and safety</li>
                                            <li>With trusted service providers who assist in our operations</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
                                        <p>
                                            We implement appropriate security measures to protect your personal information
                                            against unauthorized access, alteration, disclosure, or destruction. However,
                                            no method of transmission over the Internet is 100% secure.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
                                        <p>You have the right to:</p>
                                        <ul className="list-disc pl-6 space-y-1">
                                            <li>Access your personal information</li>
                                            <li>Correct inaccurate information</li>
                                            <li>Request deletion of your information</li>
                                            <li>Opt-out of communications</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-white mb-4">Cookies</h2>
                                        <p>
                                            Our website may use cookies to enhance your browsing experience.
                                            You can control cookie settings through your browser preferences.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                                        <p>
                                            If you have any questions about this Privacy Policy, please contact us at:
                                        </p>
                                        <div className="bg-gray-700 p-4 rounded-lg mt-4">
                                            <p><strong>Email:</strong> contact@johndeveloper.com</p>
                                            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                                        </div>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
                                        <p>
                                            We may update this Privacy Policy from time to time. We will notify you of
                                            any changes by posting the new Privacy Policy on this page and updating
                                            the "Last updated" date.
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

export default PrivacyPolicy