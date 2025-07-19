import React, { Component } from 'react'
import { ExternalLink, Github } from 'lucide-react';
import { withTranslation } from 'react-i18next';
import '../../i18n/i18n';
import ProjectCard from './projectCard/ProjectCard';

export class Projects extends Component {
  render() {
    const { t, i18n } = this.props;
    
    const project = [
      {
        title: t('projects.ecommerceTitle'),
        description: t('projects.ecommerceDescription'),
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com'
      },
      {
        title: t('projects.taskmanagementTitle'),
        description: t('projects.taskmanagementDescription'),
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
        technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io', 'Docker'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com'
      },
      {
        title: t('projects.analyticsDashboardTitle'),
        description: t('projects.analyticsDashboardDescription'),
        image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
        technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com'
      },
      {
        title: t('projects.mobileBankingAppTitle'),
        description: t('projects.mobileBankingAppDescription'),
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
        technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT', 'Biometrics'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com'
      },
      {
        title: t('projects.aiContentGeneratorTitle'),
        description: t('projects.aiContentGeneratorDescription'),
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
        technologies: ['Next.js', 'OpenAI API', 'Supabase', 'Tailwind', 'Vercel'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com'
      },
      {
        title: t('projects.socialMediaPlatformTitle'),
        description: t('projects.socialMediaPlatformDescription'),
        image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
        technologies: ['React', 'GraphQL', 'PostgreSQL', 'Redis', 'Kubernetes'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com'
      }
    ];

    return (
      <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
    )
  }
}

export default withTranslation()(Projects)