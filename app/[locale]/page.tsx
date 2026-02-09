"use client";

import Image from "next/image";
// import Link from "next/link"; // Replaced by next-intl Link
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/src/i18n/routing';

export default function Home() {
    const t = useTranslations();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLanguage = () => {
        const nextLocale = locale === 'en' ? 'de' : 'en';
        router.replace({ pathname }, { locale: nextLocale });
    };

    const sections = [
        { name: t('Navigation.about'), id: "about" },
        { name: t('Navigation.experience'), id: "experience" },
        { name: t('Navigation.education'), id: "education" },
        { name: t('Navigation.portfolio'), id: "portfolio" },
        { name: t('Navigation.skills'), id: "skills" },
        { name: t('Navigation.testimonials'), id: "testimonials" },
        { name: t('Navigation.contact'), id: "contact" },
    ];

    const greetings = [
        "Hello there",
        "வணக்கம்",
        "Hola",
        "Bonjour",
        "Guten Tag",
        "Ciao",
    ];

    const projectMetadata = [
        {
            id: 1,
            key: 'deskbot',
            image: "/deskbot/preview1.png",
            gallery: []
        },
        {
            id: 2,
            key: 'buggy',
            image: "/off-road-buggy-racing/preview.png",
            gallery: ["/off-road-buggy-racing/1.JPG", "/off-road-buggy-racing/2.JPG", "/off-road-buggy-racing/3.JPG", "/off-road-buggy-racing/4.mp4"]
        },
        {
            id: 3,
            key: 'vaegan',
            image: "/vaegan-autonomous-vehicle/preview.png",
            gallery: ["/vaegan-autonomous-vehicle/1.jpg", "/vaegan-autonomous-vehicle/2.mp4", "/vaegan-autonomous-vehicle/3.jpg", "/vaegan-autonomous-vehicle/4.mp4", "/vaegan-autonomous-vehicle/5.mp4"]
        },
        {
            id: 4,
            key: 'rl_bot',
            image: "/reinforcement-learning-mobile-bot/preview.png",
            gallery: ["/reinforcement-learning-mobile-bot/1.mp4", "/reinforcement-learning-mobile-bot/2.jpg", "/reinforcement-learning-mobile-bot/3.jpg", "/reinforcement-learning-mobile-bot/4.mp4", "/reinforcement-learning-mobile-bot/5.png"]
        },
        {
            id: 5,
            key: 'display_tuning',
            image: "/display-tuning-robot/preview.png",
            gallery: []
        },
        {
            id: 6,
            key: 'rental_bikes',
            image: "/rental-bikes-business-simulator/preview.png",
            gallery: ["/rental-bikes-business-simulator/1.png", "/rental-bikes-business-simulator/2.mp4", "/rental-bikes-business-simulator/3.png", "/rental-bikes-business-simulator/4.png", "/rental-bikes-business-simulator/5.png", "/rental-bikes-business-simulator/6.mp4", "/rental-bikes-business-simulator/7.mp4"]
        },
        {
            id: 7,
            key: 'blackjack',
            image: "/black-jack-learning-agent/preview.png",
            gallery: []
        },
    ];

    const projects = projectMetadata.map(meta => ({
        ...meta,
        title: t(`Projects.items.${meta.key}.title`),
        description: t(`Projects.items.${meta.key}.description`),
        about: t(`Projects.items.${meta.key}.about`)
    }));


    const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
    const [selectedMilestone, setSelectedMilestone] = useState<any>(null);
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
    const [showContactOptions, setShowContactOptions] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const milestonesMetadata = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
    ];

    const milestones = milestonesMetadata.map(m => ({
        id: m.id,
        title: t(`Milestones.items.${m.id}.title`),
        desc: t(`Milestones.items.${m.id}.desc`)
    }));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [greetings.length]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100 && !isMobileMenuOpen) {
                setIsNavVisible(false);
            } else {
                setIsNavVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (e.clientY < 100) {
                setIsNavVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [lastScrollY, isMobileMenuOpen]);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        e.stopPropagation();
        setIsMobileMenuOpen(false);

        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 10);
    };

    const socialLinks = [
        {
            label: "Mail",
            href: "mailto:maheshhss750@gmail.com",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
            desc: "maheshhss750@gmail.com"
        },
        {
            label: "Phone",
            href: "tel:+919787330275",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
            desc: "+91 9787330275"
        },
        {
            label: "WhatsApp",
            href: "https://wa.me/919787330275",
            icon: <path d="M13.601 2.326A7.854 7.854 0 1 0 7.926 15.75l-4.326 1.341 1.4-4.22a7.84 7.84 0 0 0 .601-10.545zM8.3 14.1a6.3 6.3 0 1 1 3.2-12.08 6.3 6.3 0 0 1-3.2 12.08z" fill="currentColor" />,
            desc: "Chat Now",
            isWhatsApp: true
        },
        {
            label: "Instagram",
            href: "https://www.instagram.com/mahesh_saravanan_/",
            icon: <g><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></g>,
            desc: "@mahesh_saravanan_"
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/mahesh-saravanan-/",
            icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />,
            desc: "Professional"
        },
        {
            label: "GitHub",
            href: "https://github.com/Mahesh-Saravanan",
            icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />,
            desc: "Mahesh-Saravanan"
        },
    ];

    const careerJourney = [

        {
            key: 'tech_lead',
            period: t('Experience.tech_lead.period'),
            location: t('Experience.tech_lead.location'),
        },
        {
            key: 'freelance',
            period: t('Experience.freelance.period'),
            location: t('Experience.freelance.location'),
        },
        {
            key: 'research_assistant',
            period: t('Experience.research_assistant.period'),
            location: t('Experience.research_assistant.location'),
        }
    ].map(item => ({
        ...item,
        role: t(`Experience.${item.key}.role`),
        company: t(`Experience.${item.key}.company`),
        description: t(`Experience.${item.key}.description`)
    }));

    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-red-100 overflow-x-hidden">
            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-transform duration-300 ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
                    <div className="flex-1"></div>
                    <div className="hidden md:flex items-center gap-8 justify-center">
                        {sections.map((section) => (
                            <a
                                key={section.name}
                                href={`#${section.id}`}
                                onClick={(e) => handleScroll(e, section.id)}
                                className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors cursor-pointer"
                            >
                                {section.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex-1 flex justify-end items-center gap-4">
                        {/* Language Switcher */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            {locale === 'en' ? (
                                <>
                                    <span className="font-bold text-gray-900">EN</span>
                                    <span className="text-gray-400">/</span>
                                    <span className="text-gray-500 hover:text-red-600">DE</span>
                                </>
                            ) : (
                                <>
                                    <span className="text-gray-500 hover:text-red-600">EN</span>
                                    <span className="text-gray-400">/</span>
                                    <span className="font-bold text-gray-900">DE</span>
                                </>
                            )}
                        </button>

                        <a
                            href="/resume.pdf"
                            download="Mahesh_Saravanan_Resume.pdf"
                            className="px-5 py-2.5 bg-red-600 text-white text-sm font-bold rounded-full hover:bg-red-700 transition-all shadow-lg shadow-red-200"
                        >
                            {t('Navigation.resume')}
                        </a>
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-gray-600 hover:text-red-600 transition-colors"
                        >
                            <span className="sr-only">Open menu</span>
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu, show/hide based on menu state. */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                        >
                            <div className="px-6 py-6 space-y-4">
                                {sections.map((section) => (
                                    <a
                                        key={section.name}
                                        href={`#${section.id}`}
                                        onClick={(e) => handleScroll(e, section.id)}
                                        className="block text-base font-medium text-gray-600 hover:text-red-600 transition-colors cursor-pointer"
                                    >
                                        {section.name}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <main className="pt-24 w-full overflow-hidden" onClick={() => {
                setIsNavVisible(false);
                setIsMobileMenuOpen(false);
            }}>
                {/* Hero Section */}
                <section className="min-h-[85vh] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 max-w-7xl mx-auto px-4 sm:px-6">
                    {/* Left Side: Text */}
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 w-full">
                        <div className="h-12 mb-2">
                            <span key={currentGreetingIndex} className="inline-block px-5 py-2 bg-red-50 text-red-600 rounded-full text-xl font-medium animate-fade-in-up">
                                {greetings[currentGreetingIndex]}
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight break-words">
                            {t('Hero.name_prefix')} <span className="text-red-600">{t('Hero.name_highlight')}</span> {t('Hero.name_suffix')}
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-500 max-w-lg leading-relaxed">
                            {t('Hero.description')}
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                            <a
                                href="#contact"
                                onClick={(e) => handleScroll(e, "contact")}
                                className="px-8 py-3.5 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition shadow-lg shadow-red-200 cursor-pointer"
                            >
                                {t('Hero.cta_primary')}
                            </a>
                            <a
                                href="#portfolio"
                                onClick={(e) => handleScroll(e, "portfolio")}
                                className="px-8 py-3.5 rounded-full border border-gray-200 bg-white text-gray-900 font-semibold hover:bg-gray-50 transition cursor-pointer"
                            >
                                {t('Hero.cta_secondary')}
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Image with Red Border Bar */}
                    <div className="flex-1 flex justify-center md:justify-start md:pl-24 py-10 w-full">
                        <div className="relative group w-full flex flex-col items-center md:items-start">
                            {/* Scalable Container */}
                            <div className="relative transition-transform duration-700 group-hover:scale-105 origin-bottom">
                                {/* Image Container */}
                                <div className="relative w-80 h-96 md:w-[28rem] md:h-[34rem] z-10">
                                    <Image
                                        src="/intro-1.png"
                                        alt="Mahesh Saravanan"
                                        fill
                                        className="object-contain object-bottom"
                                        priority
                                    />
                                </div>
                                {/* The Extended Red Bar */}
                                <div className="h-4 bg-red-600 shadow-lg w-[200%] absolute bottom-0 right-0 translate-x-[20%] md:translate-x-0 md:right-auto md:left-0 z-20"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Me */}
                <section id="about" className="py-24 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('About.title')}</h2>
                        <div className="bg-transparent">
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                {t('About.content_p1')}
                                <br />
                                <br />
                                {t('About.content_p2')}
                            </p>
                            <div className="mt-8">
                                <a
                                    href="#portfolio"
                                    onClick={(e) => handleScroll(e, "portfolio")}
                                    className="text-lg font-semibold text-red-600 hover:text-red-700 hover:underline transition-colors cursor-pointer"
                                >
                                    {t('About.cta')} &darr;
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Portfolio Slider */}
                <section id="portfolio" className="py-24 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold">{t('Projects.title')}</h2>
                        <p className="text-gray-500 mt-2">{t('Projects.subtitle')}</p>
                    </div>

                    {/* Horizontal Scroll Container */}
                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-8 -mx-6 md:mx-0 scrollbar-hide">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                whileHover={{ scale: 1.03 }}
                                viewport={{ once: true }}
                                onClick={() => setSelectedProject(project)}
                                className="snap-center shrink-0 w-[85vw] md:w-[450px] h-[64vw] md:h-[340px] group relative bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-gray-200"
                            >
                                <div className="absolute inset-0">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end text-left">
                                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                                    <p className="text-gray-200 text-sm font-medium">{project.description}</p>
                                </div>
                            </motion.div>
                        ))}
                        {/* Spacer for right padding */}
                        <div className="shrink-0 w-6 md:w-0"></div>
                    </div>
                </section>

                {/* Experience */}
                <section id="experience" className="py-24 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t('Experience.title')}</h2>
                        <div className="space-y-8">
                            {careerJourney.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    whileHover={{ scale: 1.02 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:bg-red-600 hover:border-red-600 transition-all cursor-default group"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors">{item.role}</h3>
                                        <span className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full whitespace-nowrap mt-2 md:mt-0 w-fit group-hover:bg-white/20 group-hover:text-white transition-colors">{item.period}</span>
                                    </div>
                                    <div className="text-gray-700 font-medium mb-4 group-hover:text-red-50 transition-colors">
                                        {item.company} {item.location && <span className="text-gray-400 font-normal group-hover:text-red-200"> • {item.location}</span>}
                                    </div>
                                    {item.description && (
                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base group-hover:text-red-50 transition-colors">
                                            {item.description}
                                        </p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section id="education" className="py-24">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t('Education.title')}</h2>
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                whileHover={{ scale: 1.02 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:bg-red-600 hover:border-red-600 transition-all cursor-default group"
                            >
                                <h3 className="text-xl font-bold group-hover:text-white transition-colors">{t('Education.masters.degree')}</h3>
                                <p className="text-gray-600 mt-2 group-hover:text-red-100 transition-colors">{t('Education.masters.institution')}</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                whileHover={{ scale: 1.02 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:bg-red-600 hover:border-red-600 transition-all cursor-default group"
                            >
                                <h3 className="text-xl font-bold group-hover:text-white transition-colors">{t('Education.bachelors.degree')}</h3>
                                <p className="text-gray-600 mt-2 group-hover:text-red-100 transition-colors">{t('Education.bachelors.institution')}</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Through the Lens */}
                <section id="milestones" className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t('Milestones.title')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {milestones.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => setSelectedMilestone(item)}
                                    className="group relative aspect-video bg-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all border border-gray-200 cursor-pointer"
                                >
                                    <div className="absolute inset-0">
                                        <Image
                                            src={`/milestones/${item.id}.png`}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <h3 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-gray-500 mt-8 italic">
                            {t('Milestones.subtitle')}
                        </p>
                    </div>
                </section>

                {/* Tech Stack */}
                <section id="skills" className="py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t('TechStack.title')}</h2>
                        <p className="text-gray-500 text-center mb-16">{t('TechStack.subtitle')}</p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {[
                                { name: "Python", logo: "python.png" },
                                { name: "C#", logo: "csharp.png" },
                                { name: "TensorFlow", logo: "tensorflow.png" },
                                { name: "PyTorch", logo: "pytorch.png" },
                                { name: "OpenCV", logo: "opencv.png" },
                                { name: "3D Printing", logo: "3dp.png" },
                                { name: "Autodesk", logo: "autodesk.png" },
                                { name: "Ansys", logo: "ansys.png" },
                                { name: "SolidWorks", logo: "solidworks.png" },
                                { name: "MySQL", logo: "mysql.png" },
                                { name: "Bash Scripting", logo: "bash.png" },
                                { name: "ROS", logo: "ros.png" },
                            ].map((skill, idx) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    whileHover={{ scale: 1.05, translateY: -5 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:bg-red-600 hover:border-red-600 flex flex-col items-center justify-center gap-4 transition-all group cursor-default"
                                >
                                    <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110 bg-white rounded-lg p-1">
                                        <Image
                                            src={`/tech-stack/${skill.logo}`}
                                            alt={skill.name}
                                            fill
                                            className="object-contain p-1"
                                        />
                                    </div>
                                    <span className="font-bold text-sm text-gray-700 group-hover:text-white transition-colors">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t('Testimonials.title')}</h2>
                        <p className="text-gray-500 text-center mb-16">{t('Testimonials.subtitle')}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    id: "pascal",
                                    // name and role also in translation if needed, but for now names are content
                                    // actually content is in json
                                    image: "/pascal.jpg"
                                },
                                {
                                    id: "magda",
                                    image: "/magda.png"
                                }
                            ].map((review, idx) => {
                                const name = t(`Testimonials.${review.id}.name`);
                                const role = t(`Testimonials.${review.id}.role`);
                                const content = t(`Testimonials.${review.id}.content`);

                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        whileHover={{ y: -10 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all relative group flex flex-col"
                                    >
                                        <div className="flex items-center gap-1 text-red-600 mb-6 font-bold italic">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-gray-600 mb-8 italic leading-relaxed relative z-10">
                                            &ldquo;{content}&rdquo;
                                        </p>

                                        {/* Faint Background Quotation Image */}
                                        <div className="absolute bottom-4 right-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 -z-0">
                                            <Image
                                                src="/quote.png"
                                                alt="quote"
                                                width={100}
                                                height={100}
                                                className="object-contain"
                                            />
                                        </div>

                                        <div className="flex items-center gap-4 border-t border-gray-50 pt-6 mt-auto relative z-10">
                                            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 border-2 border-red-100 shrink-0">
                                                <Image
                                                    src={review.image}
                                                    alt={name}
                                                    width={48}
                                                    height={48}
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">{name}</h4>
                                                <p className="text-[10px] text-red-600 font-medium tracking-wide uppercase">{role}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="py-24 bg-black text-white text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('Contact.title')}</h2>
                        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                            {t('Contact.subtitle')}
                        </p>

                        <div className="flex flex-col items-center space-y-6">
                            <button
                                onClick={() => setShowContactOptions(!showContactOptions)}
                                className="inline-block px-10 py-4 bg-red-600 rounded-full text-lg font-bold hover:bg-red-700 transition-all hover:scale-105 active:scale-95"
                            >
                                {t('Contact.cta')}
                            </button>

                            <AnimatePresence>
                                {showContactOptions && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-wrap lg:flex-nowrap justify-center gap-4 w-full max-w-6xl mt-8 px-4"
                                    >
                                        {socialLinks.map((link, i) => (
                                            <motion.a
                                                key={link.label}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ delay: i * 0.1, duration: 0.4 }}
                                                href={link.href}
                                                target={link.href.startsWith('http') ? "_blank" : undefined}
                                                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                                className="flex-1 min-w-[140px] max-w-[190px] p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group"
                                            >
                                                <div className="text-red-500 mb-2 flex justify-center">
                                                    <svg className="w-6 h-6" fill={link.isWhatsApp || link.label === "LinkedIn" || link.label === "GitHub" ? "currentColor" : "none"} stroke={link.isWhatsApp || link.label === "LinkedIn" || link.label === "GitHub" ? "none" : "currentColor"} viewBox="0 0 24 24" strokeWidth={2}>
                                                        {link.icon}
                                                    </svg>
                                                </div>
                                                <h3 className="font-bold text-sm mb-1">{link.label}</h3>
                                                <p className="text-gray-400 text-[10px] break-all">{link.desc}</p>
                                            </motion.a>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                {/* Project Detail Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <div
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
                            onClick={() => setSelectedProject(null)}
                        >
                            <div
                                className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                                    onClick={() => setSelectedProject(null)}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>

                                {/* Scrollable Content */}
                                <div
                                    className="overflow-y-auto"
                                    data-lenis-prevent
                                >
                                    {/* Hero Image */}
                                    <div className="relative w-full h-64 md:h-80">
                                        <Image
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                            <div>
                                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedProject.title}</h2>
                                                <p className="text-gray-200 text-lg">{selectedProject.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="p-8 space-y-8">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('Projects.about_project')}</h3>
                                            <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                                                {selectedProject.about}
                                            </p>
                                        </div>

                                        {/* Gallery */}
                                        {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('Projects.gallery')}</h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {selectedProject.gallery.map((item: string, idx: number) => {
                                                        const isVideo = item.toLowerCase().endsWith('.mp4');
                                                        return (
                                                            <div
                                                                key={idx}
                                                                className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 cursor-pointer group"
                                                                onClick={() => setSelectedMedia(item)}
                                                            >
                                                                {isVideo ? (
                                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                                        <video className="w-full h-full object-cover">
                                                                            <source src={item} type="video/mp4" />
                                                                        </video>
                                                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                                                            <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center">
                                                                                <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ) : (
                                                                    <Image
                                                                        src={item}
                                                                        alt={`Gallery ${idx + 1}`}
                                                                        fill
                                                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                                                    />
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </AnimatePresence>

                {/* Media Lightbox (Click to Enlarge) */}
                {selectedMedia && (
                    <div
                        className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 backdrop-blur-md p-6 animate-fade-in"
                        onClick={() => setSelectedMedia(null)}
                    >
                        <div
                            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                                onClick={() => setSelectedMedia(null)}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>

                            <div
                                className="flex items-center justify-center bg-black"
                                data-lenis-prevent
                            >
                                {selectedMedia.toLowerCase().endsWith('.mp4') ? (
                                    <video controls autoPlay className="max-h-[85vh] w-full">
                                        <source src={selectedMedia} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <div className="relative w-full h-auto max-h-[85vh] flex items-center justify-center">
                                        <img
                                            src={selectedMedia}
                                            alt="Enlarged media"
                                            className="max-h-[85vh] w-auto h-auto object-contain"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <footer className="bg-white border-t border-gray-100 py-12 text-center">
                <div className="flex justify-center gap-6 mb-8">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith('http') ? "_blank" : undefined}
                            rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                            className="text-gray-400 hover:text-red-600 transition-colors"
                            aria-label={link.label}
                        >
                            <svg className="w-6 h-6" fill={link.isWhatsApp || link.label === "LinkedIn" || link.label === "GitHub" ? "currentColor" : "none"} stroke={link.isWhatsApp || link.label === "LinkedIn" || link.label === "GitHub" ? "none" : "currentColor"} viewBox="0 0 24 24" strokeWidth={2}>
                                {link.icon}
                            </svg>
                        </a>
                    ))}
                </div>
                <p className="text-gray-500">
                    © 2025 Mahesh Saravanan. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
