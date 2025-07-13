import React, { Component } from 'react'
import LanguageButton from '../languageButtons/LanguageButton'
import{ Github, Linkedin, Mail } from 'lucide-react'

export class SocialMedia extends Component {
    render() {
        return (
            <div className="max-w-7xl mx-auto flex items-center justify-end lg:justify-end space-x-3">
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110"
                >
                    <Github size={18} className="text-white" />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110"
                >
                    <Linkedin size={18} className="text-white" />
                </a>
                <a
                    href="mailto:contact@johndeveloper.com"
                    className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110"
                >
                    <Mail size={18} className="text-white" />
                </a>
                <LanguageButton />
            </div>
        )
    }
}

export default SocialMedia