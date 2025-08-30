import React, { Component } from "react";
import "./whymeCard.css";

export class WhyMeCard extends Component {
    /**
     * Renders a card component displaying the provided reason with an icon,
     * title, and description. The card has a responsive design with hover
     * effects, including a gradient background and scaling effect.
     */
    render() {
        const { reason } = this.props;

        return (
            <div key={reason.title} className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700 hover:border-blue-500/50">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 hover-gradient-mobile rounded-lg group-hover:scale-105 md:group-hover:scale-110 transition-transform relative">
                            <div className="text-white relative z-50">{reason.icon}</div>
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                        {reason.title}
                    </h3>
                </div>
            </div>
        );
    }
}

export default WhyMeCard;
