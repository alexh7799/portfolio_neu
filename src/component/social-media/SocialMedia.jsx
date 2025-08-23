import React, { Component } from 'react'
import LanguageButton from '../languageButtons/LanguageButton'
import{ Github, Linkedin, Mail } from 'lucide-react'

export class SocialMedia extends Component {
    render() {
        return (
            <div className="max-w-7xl mx-auto flex items-center justify-end lg:justify-end space-x-3 pointer-events-none">
                <a
                    href="https://github.com/alexh7799/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/95 backdrop-blur-sm border border-gray-700 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 pointer-events-auto"
                >
                    <Github size={18} className="text-white" />
                </a>
                <a
                    href="https://linkedin.com/in/alexander-hoerst/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/95 backdrop-blur-sm border border-gray-700 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 pointer-events-auto"
                >
                    <Linkedin size={18} className="text-white" />
                </a>
                <a
                    href="mailto:info@alexander-hörst.de"
                    className="p-3 bg-gray-800/95 backdrop-blur-sm border border-gray-700 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 pointer-events-auto"
                >
                    <Mail size={18} className="text-white" />
                </a>
                <LanguageButton />
            </div>
        )
    }
}

export default SocialMedia