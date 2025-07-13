import React, { Component } from 'react'
import { ExternalLink, Github } from 'lucide-react';
import { withTranslation } from 'react-i18next';
import '../../i18n/i18n';

export class Projects extends Component {
  render() {
    const { t, i18n } = this.props;
    const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io', 'Docker'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Analytics Dashboard',
      description: 'A data visualization dashboard for business analytics with interactive charts, real-time data updates, and export capabilities.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication, transaction history, and budget tracking features.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT', 'Biometrics'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'AI Content Generator',
      description: 'An AI-powered content generation platform that helps users create blog posts, social media content, and marketing copy.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'OpenAI API', 'Supabase', 'Tailwind', 'Vercel'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Social Media Platform',
      description: 'A full-featured social media platform with real-time messaging, photo sharing, and advanced privacy controls.',
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating various technologies and problem-solving approaches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-gray-600"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
  }
}

export default withTranslation()(Projects)