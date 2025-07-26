import React, { Component } from 'react'
import './skillsCard.css'

export class SkillCard extends Component {
    constructor(props) {
        super(props);
        this.cardRef = React.createRef();
    }

    handleMouseMove = (e) => {
        const card = this.cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;

        const rotateX = (deltaY / rect.height) * -20; // Max 20 Grad
        const rotateY = (deltaX / rect.width) * 20;   // Max 20 Grad

        const cardInner = card.querySelector('.skill-card-inner');
        if (cardInner) {
            cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
        }
    };

    handleMouseLeave = () => {
        const card = this.cardRef.current;
        if (!card) return;

        const cardInner = card.querySelector('.skill-card-inner');
        if (cardInner) {
            cardInner.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
        }
    };

    render() {
        const { category } = this.props;

        return (
            <div
                ref={this.cardRef}
                className={`skill-card ${this.isMobile ? 'mobile-card' : ''}`}
                onMouseMove={this.handleMouseMove}
                onMouseLeave={this.handleMouseLeave}
            >
                <div className="skill-card-inner p-4 sm:p-6 md:p-8 preserve-3d">
                    <div className="skill-icon text-center mb-1">
                        <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-2`}>
                            {category.icon}
                        </div>
                    </div>
                    <div className="skill-text text-center preserve-3d">
                        <h3 className="text-lg font-semibold text-white mb-2">
                            {category.title}
                        </h3>

                        <div className="text-xs text-gray-500 preserve-3d">
                            <div className="flex flex-wrap gap-2 preserve-3d">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="cursor-default px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SkillCard



// import React, { Component } from 'react'

// export class SkillsCard extends Component {
//     render() {
//         const { category, index } = this.props;
//         return (
//             <div
//                 key={category.title}
//                 className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-gray-600"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//             >
//                 <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
//                     <IconComponent size={24} className="text-white" />
//                 </div>

//                 <h3 className="text-xl cursor-default font-semibold text-white mb-4">
//                     {category.title}
//                 </h3>

//                 <div className="flex flex-wrap gap-2">
//                     {category.skills.map((skill) => (
//                         <span
//                             key={skill}
//                             className="cursor-default px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors"
//                         >
//                             {skill}
//                         </span>
//                     ))}
//                 </div>
//             </div>
//         )
//     }
// }

// export default SkillsCard

// return (
//       <div
//         ref={this.cardRef}
//         className="skill-card"
//         onMouseMove={this.handleMouseMove}
//         onMouseLeave={this.handleMouseLeave}
//       >
//         <div className="skill-card-inner">
//           <div className="skill-icon text-center mb-4">
//             <div className="text-white">
//                 {category.icon}
//             </div>
//           </div>
//           <div className="skill-text text-center">
//             <h3 className="text-lg font-semibold text-white mb-2">
//               {category.title}
//             </h3>
//             <p className="text-gray-400 text-sm mb-3">
//               {category.description}
//             </p>
//             <div className="text-xs text-gray-500">
//               Experience: {category.level}
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }