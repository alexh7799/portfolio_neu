import { ExternalLink, Github } from "lucide-react";
import { Component } from "react";

export class ProjectCard extends Component {
    /**
     * Renders a project card with a title, description, technologies, and links to
     * the live demo and GitHub code.
     *
     * @returns {JSX.Element}
     */
    render() {
        const { project } = this.props;
        return (
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
                <div className="p-4 sm:p-6 md:p-8">
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
        );
    }
}

export default ProjectCard;
