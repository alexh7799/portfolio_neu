import React, { Component } from 'react'
import Navbar from '../component/navbar/navbar'
import SocialMedia from '../component/social-media/SocialMedia'
import Hero from '../component/hero/Hero'
import WhyMe from '../component/why-me/WhyMe'
import Skills from '../component/skills/Skills'
import Projects from '../component/projects/Projects'
import References from '../component/references/References'
import Contact from '../component/contact/Contact'
import Footer from '../component/footer/Footer'

export class Index extends Component {
    /**
     * Handles scrolling to the section that matches the hash in the URL,
     * when the component mounts.
     *
     * @description
     * Scrolling is done with a 100ms delay to avoid immediate scrolling
     * when the page is loaded, which can be a bit jarring. The section
     * is scrolled into view with a smooth animation.
     */
    componentDidMount() {
        const hash = window.location.hash;
        if (hash) {
            const sectionId = hash.replace('#', '');
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }

  /**
   * Renders the Index component.
   *
   * @returns {JSX.Element}
   *
   * @description
   * This component renders the Index page of the site. It contains a
   * navigation menu, a hero section, a Why Me section, a Skills section, a
   * Projects section, a Contact section, and a footer.
   */
  render() {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full fixed top-16 left-0 right-0 z-40 pointer-events-none">
              <SocialMedia />
            </div>
            <main>
              <Hero />
              <WhyMe />
              <Skills />
              <Projects />
              <Contact />
            </main>
            
            <Footer />
      </div>
    )
  }
}

export default Index