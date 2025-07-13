import React, { Component } from 'react'
import { Code, Database, Globe, Smartphone, Server, Zap } from 'lucide-react';
import { withTranslation } from 'react-i18next';
import '../../i18n/i18n';

export class Skills extends Component {
  render() {
    const { t, i18n } = this.props;
    const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="w-8 h-8" />,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: <Server className="w-8 h-8" />,
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'DevOps',
      icon: <Zap className="w-8 h-8" />,
      skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Terraform'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="w-8 h-8" />,
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Database',
      icon: <Database className="w-8 h-8" />,
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Supabase'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Tools',
      icon: <Code className="w-8 h-8" />,
      skills: ['Git', 'VSCode', 'Figma', 'Postman', 'Jira'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];
    return (
      <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-gray-600"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
  }
}

export default withTranslation()(Skills)