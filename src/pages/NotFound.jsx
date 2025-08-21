import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import './../i18n/i18n';
import SocialMedia from '../component/social-media/SocialMedia';
import Footer from '../component/footer/Footer';
import Navbar from '../component/navbar/navbar';

export class NotFound extends Component {

    render() {
        return (
            <div className='bg-gray-900 min-h-screen'>
                <Navbar />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full fixed top-16 left-0 right-0 z-40">
                    <SocialMedia />
                </div>
                <main className="h-screen flex items-center justify-center bg-gray-100">
                    <div className="text-center flex flex-col justify-center items-center p-8">
                        <img src="logo.svg" alt="Logo" className='w-32 h-32'/>
                        <h1 className="text-4xl font-bold mb-4">404</h1>
                        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
                        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
                            Return to Home
                        </a>
                    </div>

                </main>
                <Footer />
            </div>
        )
    }
}

export default withTranslation()(NotFound)