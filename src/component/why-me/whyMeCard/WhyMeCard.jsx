import React, { Component } from 'react'

export class WhyMeCard extends Component {
    render() {
        const { reason } = this.props;
        return (
            <div
                key={reason.title}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700 hover:border-blue-500/50"
            >
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                        <div className="text-white">
                            {reason.icon}
                        </div>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            {reason.title}
                        </h3>
                        <p className="text-gray-400 mb-3 leading-relaxed">
                            {reason.description}
                        </p>
                        <div className="text-blue-400 font-semibold">
                            {reason.stats}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WhyMeCard