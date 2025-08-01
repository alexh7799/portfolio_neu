import React, { Component } from 'react'
import { ExternalLink, Github } from 'lucide-react';
import { withTranslation } from 'react-i18next';
import '../../i18n/i18n';
import ProjectCard from './projectCard/ProjectCard';

export class Projects extends Component {
  render() {
    const { t, i18n } = this.props;
    

    const project = t('projects.jobs', { returnObjects: true });

    return (
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {project.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>


        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-4 sm:p-6 md:p-8 text-center border border-blue-500/20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              {t('projects.ready_to_work')}
            </h3>
            <p className="text-md sm:text-1xl text-gray-300 mb-6 max-w-2xl mx-auto">
              {t('projects.ready_to_work_description')}
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              {t('projects.get_in_touch')}
            </button>
          </div>
      </div>
    </section>
    )
  }
}

export default withTranslation()(Projects)