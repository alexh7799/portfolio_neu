import { Component } from 'react'
import LanguageButton from '../languageButtons/LanguageButton'
import{ Github, Linkedin, Mail } from 'lucide-react'

export class SocialMedia extends Component {
    /**
     * Renders the social media links and the language button in a div.
     * The div is centered horizontally and has a max width of 7xl.
     * The items are spaced equally using the space-x-3 class.
     * The links are styled with a gray background, a white text color, a backdrop blur, and a hover effect.
     * The language button is also rendered with the same styles.
     * The links are wrapped in an a-tag with a pointer-events-auto class to make them clickable.
     * The language button is also wrapped in an a-tag with a pointer-events-auto class to make it clickable.
     * @returns {JSX.Element}
     */
    render() {
        return (
            <div className="max-w-7xl mx-auto flex items-center justify-end lg:justify-end space-x-3 pointer-events-none">
                <a
                    href="https://github.com/alexh7799/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profil"
                    className="p-3 bg-gray-800/95 backdrop-blur-sm border border-gray-700 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 pointer-events-auto"
                >
                    <Github size={18} className="text-white" />
                </a>
                <a
                    href="https://linkedin.com/in/alexander-hoerst/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profil"
                    className="p-3 bg-gray-800/95 backdrop-blur-sm border border-gray-700 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 pointer-events-auto"
                >
                    <Linkedin size={18} className="text-white" />
                </a>
                <a
                    aria-label="Send E-Mail"
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