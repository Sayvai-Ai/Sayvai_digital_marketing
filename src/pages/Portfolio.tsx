import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'; // 
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const rippleId = useRef(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Web Design', 'Social Media'];

  const projects = [
    {
      id: 1,
      title: 'HiFI Trendz',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      description: 'A modern, responsive website for HiFI Trendz, showcasing their premium interior design services with a clean, elegant design that highlights their portfolio.',
      results: 'Premium Interior Design',
      features: [
        'Modern & Responsive Design',
        'Portfolio Showcase',
        'Client Portal',
        'Contact & Inquiry System'
      ]
    },
    {
      id: 2,
      title: 'SVS Events',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      description: 'Strategic social media management for SVS Events that significantly increased their market presence and customer engagement.',
      results: 'High Engagement Growth',
      features: [
        'Daily Content Strategy & Posting',
        'Audience Engagement Growth',
        'Brand Awareness Campaigns',
        'Performance Analytics & Reporting'
      ]
    },
    {
      id: 3,
      title: 'MS Builders',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      description: 'Comprehensive social media campaign for MS Builders that established them as industry leaders and generated high-quality leads.',
      results: 'Increased Lead Generation',
      features: [
        'Targeted Advertising Campaigns',
        'Content Creation & Curation',
        'Community Building',
        'ROI Tracking & Optimization'
      ]
    },
    {
      id: 4,
      title: 'Content Marketing Success',
      category: 'SEO',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Thought leadership content that drove 500K+ views',
      results: '+500K content views'
    },
    {
      id: 5,
      title: 'Local SEO Domination',
      category: 'SEO',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Achieved #1 rankings for 25+ local keywords',
      results: '+580% organic traffic'
    },
    {
      id: 6,
      title: 'Brand Identity Refresh',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete rebrand that modernized company image',
      results: '+200% brand recognition'
    },
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects.filter(project => project.category !== 'SEO' && project.category !== 'Branding') 
    : projects.filter(project => project.category === selectedCategory);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>, project: any) => {
    if ((project.category === 'Web Design' || project.category === 'Social Media') && gridRef.current) {
      e.stopPropagation();
      setSelectedCategory(project.category);
      return;
    }
    
    if (gridRef.current) {
      const rect = gridRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newRipple = { x, y, id: rippleId.current++ };
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 1000);
    }
  };

  const renderProjectDetail = (project: any) => (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Project Image */}
          <div className="w-full lg:w-1/2 relative overflow-hidden rounded-xl shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Project Content */}
          <div className="w-full lg:w-1/2">
            <span className="inline-block px-4 py-2 bg-[#00C0A3]/10 text-[#00C0A3] text-sm font-medium rounded-full mb-4">
              {project.category}
            </span>
            <h2 className="text-4xl font-bold text-[#1B2A41] dark:text-white mb-6">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              {project.description}
            </p>
            
            <div className="space-y-4 mb-8">
              {project.features?.map((feature: string, index: number) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 bg-[#00C0A3]/10 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-[#00C0A3] dark:text-[#3ABEF9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-[#1B2A41] dark:text-white">{feature}</h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {/*<a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#00C0A3] dark:bg-[#3ABEF9] text-white rounded-lg font-medium hover:bg-[#00a98f] dark:hover:bg-[#2a8fcc] transition-colors duration-300"
              >
                <Eye className="w-5 h-5 mr-2" />
                View Live Project
              </a>*/}
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-[#00C0A3] dark:border-[#3ABEF9] text-[#00C0A3] dark:text-[#3ABEF9] rounded-lg font-medium hover:bg-[#00C0A3]/10 dark:hover:bg-[#3ABEF9]/20 transition-colors duration-300"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 relative z-10">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Portfolio Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00C0A3]/90 to-[#1B2A41]/90 dark:from-[#00C0A3]/80 dark:to-[#0F172A]/90"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve remarkable growth.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-white dark:bg-gray-900 sticky top-20 z-20 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#00C0A3] dark:bg-[#3ABEF9] text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-[#00C0A3]/10 dark:hover:bg-[#3ABEF9]/20 hover:text-[#00C0A3] dark:hover:text-[#3ABEF9]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedCategory === 'Web Design' ? (
        renderProjectDetail(projects[0]) // Show Web Design project
      ) : selectedCategory === 'Social Media' ? (
        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="space-y-24">
            {/* SVS Events */}
            <div className="relative group">
              <div className="md:flex items-center gap-12">
                {/* Image */}
                <div className="md:w-1/2 h-80 overflow-hidden rounded-xl">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src={projects[1].image} 
                    alt={projects[1].title} 
                  />
                </div>
                {/* Content */}
                <div className="md:w-1/2 mt-8 md:mt-0">
                  <div className="text-sm font-medium text-[#00C0A3] dark:text-[#3ABEF9] mb-3">
                    {projects[1].category}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {projects[1].title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {projects[1].description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {projects[1].features?.map((feature: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <svg className="h-5 w-5 text-[#00C0A3] dark:text-[#3ABEF9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-gray-700 dark:text-gray-300">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/*
                  <div className="flex flex-wrap gap-4">
                    <button className="px-5 py-2.5 bg-[#00C0A3] dark:bg-[#3ABEF9] hover:bg-[#009688] dark:hover:bg-[#2a8fcc] text-white rounded-lg font-medium transition-colors">
                      View Project
                    </button>
                  </div>
                  */}
                </div>
              </div>
            </div>

            {/* MS Builders - Reversed */}
            <div className="relative group">
              <div className="md:flex flex-row-reverse items-center gap-12">
                {/* Image */}
                <div className="md:w-1/2 h-80 overflow-hidden rounded-xl">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src={projects[2].image} 
                    alt={projects[2].title} 
                  />
                </div>
                {/* Content */}
                <div className="md:w-1/2 mt-8 md:mt-0">
                  <div className="text-sm font-medium text-[#00C0A3] dark:text-[#3ABEF9] mb-3">
                    {projects[2].category}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {projects[2].title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {projects[2].description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {projects[2].features?.map((feature: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <svg className="h-5 w-5 text-[#00C0A3] dark:text-[#3ABEF9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-gray-700 dark:text-gray-300">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/*
                  <div className="flex flex-wrap gap-4">
                    <button className="px-5 py-2.5 bg-[#00C0A3] dark:bg-[#3ABEF9] hover:bg-[#009688] dark:hover:bg-[#2a8fcc] text-white rounded-lg font-medium transition-colors">
                      View Project
                    </button>
                  </div>
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <section className="py-20 bg-[#F5F5F5] dark:bg-gray-800 relative">
          <div className="container mx-auto px-6">
            <div 
              ref={gridRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
              onClick={handleCardClick}
            >
              {/* Ripple Effects */}
              {ripples.map(ripple => (
                <div
                  key={ripple.id}
                  className="absolute pointer-events-none animate-ripple"
                  style={{
                    left: ripple.x - 25,
                    top: ripple.y - 25,
                    width: 50,
                    height: 50,
                  }}
                >
                  <div className="w-full h-full bg-[#00C0A3]/30 dark:bg-[#3ABEF9]/40 rounded-full animate-ping"></div>
                </div>
              ))}

              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#00C0A3]/20 dark:hover:shadow-[#3ABEF9]/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={(e) => handleCardClick(e, project)}
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-[#00C0A3] dark:text-[#3ABEF9] bg-[#00C0A3]/10 dark:bg-[#3ABEF9]/20 rounded-full mb-3">
                      {project.category}
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                      {project.description}
                    </p>
                    {project.results && (
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-600">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Results:</p>
                        <p className="text-[#00C0A3] dark:text-[#3ABEF9] font-semibold">{project.results}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1B2A41] to-[#00C0A3] dark:from-[#0F172A] dark:to-[#3ABEF9]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-gray-200 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Join our portfolio of successful clients.
          </p>
          <Link to="/contact">
            <button className="bg-white dark:bg-gray-800 text-[#1B2A41] dark:text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
