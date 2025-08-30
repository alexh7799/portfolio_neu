import React, { Component } from 'react'
import './skillsCard.css'

export class SkillCard extends Component {
    /**
     * Initializes a new instance of the SkillCard component.
     * Sets up a ref for the card element to handle 3D transformations.
     * 
     * @param {Object} props - The properties passed to the component.
     */
    constructor(props) {
        super(props);
        this.cardRef = React.createRef();
    }

    /**
     * Handles mouse movement over the card.
     *
     * @param {MouseEvent} e - The mouse event.
     */
    handleMouseMove = (e) => {
        const card = this.cardRef.current;
        if (!card) return;
        const { rotateX, rotateY } = this.mouseMove(card, e);
        const cardInner = card.querySelector('.skill-card-inner');
        if (cardInner) {
            cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
        }
    };

    /**
     * 3D transformation based on mouse movement calculation.
     * @param {*} card 
     * @param {*} even 
     * @returns 
     */
    mouseMove = (card, even) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = even.clientX;
        const mouseY = even.clientY;
        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;
        const rotateX = (deltaY / rect.height) * -20;
        const rotateY = (deltaX / rect.width) * 20;
        return { rotateX, rotateY };
    }

    /**
     * Handles mouse leave event on the card.
     */
    handleMouseLeave = () => {
        const card = this.cardRef.current;
        if (!card) return;
        const cardInner = card.querySelector('.skill-card-inner');
        if (cardInner) {
            cardInner.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
        }
    };

    /**
     * Renders the SkillCard component.
     * 
     * This component displays a 3D interactive card that includes a category icon,
     * a title, and a list of skills. The card responds to mouse movements to create
     * a 3D transformation effect, and it handles mouse events to reset the transformation
     * when the mouse leaves the card area.
     *
     * @returns {JSX.Element} A div element that represents the skill card structure,
     *                        which includes the category icon, title, and skills list.
     */
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
                                    <span key={skill} className="cursor-default px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors">
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