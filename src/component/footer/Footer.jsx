import React, { Component } from 'react'
import { Heart } from 'lucide-react';
import { withTranslation } from 'react-i18next';
import '../../i18n/i18n';
import { Link, useLocation } from 'react-router-dom';

export class Footer extends Component {
  handleNavigateAndScroll = (sectionId) => {
    if (window.location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  } 

  render() {
    return (
      <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Alexander Hörst</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Fullstack developer passionate about creating modern, scalable web applications 
              that solve real-world problems and deliver exceptional user experiences.
            </p>
            <p className="text-gray-400">
              Available for freelance projects and full-time opportunities.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => this.handleNavigateAndScroll('skills')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => this.handleNavigateAndScroll('projects')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => this.handleNavigateAndScroll('references')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  References
                </button>
              </li>
              <li>
                <button
                  onClick={() => this.handleNavigateAndScroll('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/legal-notice"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Legal Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Alexander Hörst. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={16} className="text-red-500 mx-1" /> and lots of tee
          </p>
        </div>
      </div>
    </footer>
    )
  }
}

export default withTranslation()(Footer)