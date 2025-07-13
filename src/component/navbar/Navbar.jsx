import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './navbar.css';
import '../../i18n/i18n';

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
        const hash = window.location.hash;
        if (hash) {
            const sectionId = hash.replace('#', '');
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }

    changeLanguage = (lng) => {
        this.props.i18n.changeLanguage(lng);
    };

    handleNavClick = (href) => {
        const isHomePage = window.location.pathname === '/';

        if (href.startsWith('#')) {
            if (isHomePage) {
                const element = document.querySelector(href);
                element?.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.location.href = `/${href}`;
            }
        }
        this.setState({ isOpen: false });
    };

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        const { t, i18n } = this.props;
        const { isOpen } = this.state;

        const navItems = [
            { name: t('navbar.whyMe'), href: '#why-me' },
            { name: t('navbar.skills'), href: '#skills' },
            { name: t('navbar.projects'), href: '#projects' },
            { name: t('navbar.contact'), href: '#contact' },
        ];

        // Framer Motion Variants
        const mobileMenuVariants = {
            closed: {
                opacity: 0,
                height: 0,
                transition: {
                    duration: 0.3,
                    ease: "easeInOut"
                }
            },
            open: {
                opacity: 1,
                height: "auto",
                transition: {
                    duration: 0.3,
                    ease: "easeInOut"
                }
            }
        };

        const menuItemVariants = {
            closed: {
                opacity: 0,
                y: -20,
                transition: {
                    duration: 0.2
                }
            },
            open: (index) => ({
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeOut"
                }
            })
        };

        const iconVariants = {
            closed: {
                rotate: 0,
                transition: {
                    duration: 0.3,
                    ease: "easeInOut"
                }
            },
            open: {
                rotate: 180,
                transition: {
                    duration: 0.3,
                    ease: "easeInOut"
                }
            }
        };

        return (
            <motion.nav
                className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <motion.div
                            onClick={() => this.handleNavClick('#home')}
                            className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('navbar.portfolio')}
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.name}
                                        onClick={() => this.handleNavClick(item.href)}
                                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {item.name}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <motion.button
                                onClick={this.toggleMenu}
                                className="text-gray-400 hover:text-white focus:outline-none focus:text-white p-2"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <motion.div
                                    variants={iconVariants}
                                    animate={isOpen ? "open" : "closed"}
                                >
                                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                                </motion.div>
                            </motion.button>
                        </div>
                    </div>

                    {/* Mobile Navigation mit Framer Motion */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                className="md:hidden overflow-hidden"
                                variants={mobileMenuVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                            >
                                <motion.div className="px-2 pb-3 space-y-1 sm:px-3 bg-gray-800/95 backdrop-blur-sm">
                                    {navItems.map((item, index) => (
                                        <motion.button
                                            key={item.name}
                                            onClick={() => this.handleNavClick(item.href)}
                                            className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left transition-colors"
                                            variants={menuItemVariants}
                                            custom={index}
                                            initial="closed"
                                            animate="open"
                                            exit="closed"
                                            whileHover={{
                                                x: 8,
                                                backgroundColor: "rgba(55, 65, 81, 0.8)",
                                                transition: { duration: 0.2 }
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {item.name}
                                        </motion.button>
                                    ))}


                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.nav>
        );
    }
}

export default withTranslation()(Navbar);