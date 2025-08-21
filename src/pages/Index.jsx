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
    componentDidMount() {
        const hash = window.location.hash;
        if (hash) {
            const sectionId = hash.replace('#', '');
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }

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