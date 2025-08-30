import { Component } from 'react'
import { Code, Database, Globe, Smartphone, Server, Zap } from 'lucide-react';
import { withTranslation } from 'react-i18next';
import '../../i18n/i18n';
import SkillsCard from './skillsCard/SkillsCard';

export class Skills extends Component {
  /**
   * Renders the Skills component.
   *
   * @returns {JSX.Element}
   *
   * @description
   * This component renders the Skills section of the site. It contains a title, description, a
   * grid of SkillsCards, and call-to-actions to get in touch. The Skills section is translated
   * using the i18next library.
   */
  render() {
    const { t, i18n } = this.props;
    const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="w-8 h-8" />,
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Angular'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: <Server className="w-8 h-8" />,
      skills: ['Node.js', 'Python', 'Django', 'Redis'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'DevOps',
      icon: <Zap className="w-8 h-8" />,
      skills: ['Docker', 'Cloud', 'CI/CD', 'Monitoring'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="w-8 h-8" />,
      skills: ['React Native', 'Android', 'PWA'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Database',
      icon: <Database className="w-8 h-8" />,
      skills: ['SQLite', 'MySQL', 'Firebase', 'PostgreSQL'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Tools',
      icon: <Code className="w-8 h-8" />,
      skills: ['Git', 'VSCode', 'Figma', 'Postman', 'GitHub'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];
    return (
      <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillsCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
    )
  }
}

export default withTranslation()(Skills)