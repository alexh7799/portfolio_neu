import { Component } from 'react'
import { Heart } from 'lucide-react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { withRouter } from '../../share/WithRouter';
import '../../i18n/i18n';

export class Footer extends Component {

  /**
   * Initializes the state of the Footer component.
   *
   * @param {Object} props - Properties passed from the parent component.
   */
  constructor(props) {
    super(props);
  }
  
  /**
   * Handles scrolling to a section that was stored in the session storage.
   *
   * @description
   * When the component mounts, it checks if there is a scrollToSection key
   * in the session storage. If there is, it scrolls to the section with the
   * given ID after a 500ms delay, and then removes the key from the storage.
   * This is used to scroll to a section when the page is loaded, for example
   * when the user clicks on a link that points to a section on the same page.
   */
  componentDidMount() {
    const scrollToSection = sessionStorage.getItem('scrollToSection');
    if (scrollToSection) {
      setTimeout(() => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        sessionStorage.removeItem('scrollToSection');
      }, 500);
    }
  }

  /**
     * Handles scrolling to the home section.
     *
     * @param {boolean} isHomePage - Indicates if the current page is the home page.
     */
  handleHome = (isHomePage, href) => {
    const { navigate } = this.props;
    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const section = href.substring(1);
      navigate('/');
      sessionStorage.setItem('scrollToSection', section);
    }
  };

  /**
   * Handles navigation link clicks.
   *
   * @param {string} href - The href of the clicked link.
   */
  handleNavigateAndScroll = (href) => {
    const { navigate, location } = this.props;
    const isHomePage = location.pathname === '/';
    if (href.startsWith('#')) {
      this.handleHome(isHomePage, href);
    } else {
      navigate(href);
    }
    this.setState({ isOpen: false });
  };

  /**
   * Renders the Footer component.
   *
   * @returns {JSX.Element}
   *
   * @description
   * This component renders the footer of the site. It contains a title, description, quick links to
   * the sections of the home page, links to the legal notice and privacy policy, and a footer note.
   * The footer is translated using the i18next library.
   */
  render() {
    const { t, i18n } = this.props;
    return (
      <footer className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">Alexander Hörst</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {t('footer.description')}
              </p>
              <p className="text-gray-400">
                {t('footer.availability')}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => this.handleNavigateAndScroll('#why-me')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t('footer.whyMe')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => this.handleNavigateAndScroll('#skills')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t('footer.skills')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => this.handleNavigateAndScroll('#projects')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t('footer.projects')}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => this.handleNavigateAndScroll('#contact')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t('footer.contact')}
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">{t('footer.legal')}</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t('footer.privacyPolicy')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/legal-notice"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t('footer.legalNotice')}
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

export default withRouter(withTranslation()(Footer));