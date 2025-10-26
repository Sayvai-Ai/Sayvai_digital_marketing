import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const rippleId = useRef(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Web Design', 'Social Media']; // 'Testimonials' temporarily hidden

  const projects = [
    {
      id: 1,
      title: 'HiFI Trendz',
      category: 'Web Design',
      image: '/hi-fi trendz.png',
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
      id: 3,
      title: 'SVS Events',
      category: 'Social Media',
      image: '/SVS events logo.png',
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
      id: 4,
      title: 'MS Builders',
      category: 'Social Media',
      image: '/ms logo.png',
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
      id: 5,
      title: 'Minerva School',
      category: 'Social Media',
      image: '/Mineerva logo.png',
      description: 'Strategic digital marketing campaign for Minerva School that enhanced their online presence and increased student enrollment inquiries.',
      results: 'Enhanced Online Presence',
      features: [
        'Educational Content Marketing',
        'Parent Engagement Campaigns',
        'Brand Positioning Strategy',
        'Enrollment Lead Generation'
      ]
    },
    {
      id: 6,
      title: 'Atlaantis Entertainment',
      category: 'Social Media',
      image: '/Atalantiis logo.jpg',
      description: 'Dynamic social media strategy for Atlaantis Entertainment that boosted event attendance and audience engagement across platforms.',
      results: 'Boosted Event Attendance',
      features: [
        'Event Promotion & Marketing',
        'Audience Engagement Strategy',
        'Creative Content Production',
        'Cross-Platform Campaigns'
      ]
    },
    {
      id: 7,
      title: 'Suvvai Pickles',
      category: 'Social Media',
      image: '/suvai and kavya logo.png',
      description: 'Authentic brand storytelling for Suvvai Pickles that connected with customers and drove online sales growth.',
      results: 'Increased Online Sales',
      features: [
        'Brand Story Development',
        'Product Photography & Content',
        'Customer Engagement Programs',
        'E-commerce Integration'
      ]
    },
    {
      id: 8,
      title: 'Femi9',
      category: 'Social Media',
      image: '/Femi9.png',
      description: 'Empowering digital campaign for Femi9 that built a strong community and increased brand awareness in the wellness sector.',
      results: 'Strong Community Building',
      features: [
        'Community Engagement Strategy',
        'Wellness Content Marketing',
        'Influencer Partnerships',
        'Brand Awareness Campaigns'
      ]
    },
    {
      id: 9,
      title: 'Shridha Investments',
      category: 'Social Media',
      image: '/shridha investment logo.png',
      description: 'Professional digital marketing for Shridha Investments that established trust and generated quality investment leads.',
      results: 'Quality Lead Generation',
      features: [
        'Trust-Building Content',
        'LinkedIn Marketing Strategy',
        'Investor Education Programs',
        'Lead Nurturing Campaigns'
      ]
    },
    {
      id: 10,
      title: 'Sri Enippagam Sweets',
      category: 'Social Media',
      image: '/sri enippagam logo.png',
      description: 'Strategic social media marketing for Sri Enippagam Sweets that enhanced brand visibility and drove customer engagement for their traditional sweets.',
      results: 'Enhanced Brand Visibility',
      features: [
        'Traditional Brand Storytelling',
        'Visual Content Creation',
        'Customer Engagement Campaigns',
        'Seasonal Promotion Strategy'
      ]
    },
    {
      id: 11,
      title: 'Content Marketing Success',
      category: 'SEO',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Thought leadership content that drove 500K+ views',
      results: '+500K content views'
    },
    {
      id: 12,
      title: 'Local SEO Domination',
      category: 'SEO',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Achieved #1 rankings for 25+ local keywords',
      results: '+580% organic traffic'
    },
    {
      id: 13,
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

  const handleDownloadPDF = () => {
    const doc = new jsPDF('p', 'mm', 'a4');
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 15;
    const maxWidth = pageWidth - (margin * 2);
    let yPos = margin;

    // Helper function to add new page if needed
    const checkAddPage = (requiredSpace: number) => {
      if (yPos + requiredSpace > pageHeight - margin) {
        doc.addPage();
        yPos = margin;
        return true;
      }
      return false;
    };

    // Helper function to add wrapped text with proper encoding
    const addText = (text: string, fontSize: number, isBold: boolean = false, color: [number, number, number] = [0, 0, 0]) => {
      // Clean the text to remove any special characters that might cause issues
      const cleanText = text.replace(/[^\x00-\x7F]/g, "").trim();
      
      doc.setFontSize(fontSize);
      doc.setFont('Helvetica', isBold ? 'bold' : 'normal');
      doc.setTextColor(color[0], color[1], color[2]);
      
      const lines = doc.splitTextToSize(cleanText, maxWidth);
      checkAddPage(lines.length * (fontSize * 0.35) + 2);
      
      lines.forEach((line: string, index: number) => {
        doc.text(line, margin, yPos + (index * fontSize * 0.35));
      });
      
      yPos += lines.length * (fontSize * 0.35) + 4;
    };

    // Header with colored background
    doc.setFillColor(0, 192, 163);
    doc.rect(0, 0, pageWidth, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('Helvetica', 'bold');
    doc.text('Sayvai Digital Marketing', pageWidth / 2, 20, { align: 'center' });
    doc.setFontSize(12);
    doc.setFont('Helvetica', 'normal');
    doc.text('Portfolio Summary - Our Success Stories', pageWidth / 2, 30, { align: 'center' });
    
    yPos = 50;

    // Introduction
    addText('We Are Digital Marketing Experts', 16, true, [27, 42, 65]);
    yPos += 2;
    addText('Sayvai boasts a unique, close-knit team with experts in all facets of web marketing: strategic, creative and technical. As a recognized leader in digital marketing, we have a growing team of dedicated professionals. From India to global markets, our professionals offer unique skill sets and years of industry expertise.', 10);
    yPos += 5;

    // Happy Clients Section
    addText('Happy Clients', 14, true, [27, 42, 65]);
    yPos += 2;
    const clients = [
      'Atalantiis Entertainment',
      'Minerva Vidhya Mandhir School',
      'Suvai and Kavya Pickles',
      'Shridha Investments',
      'SVS Events',
      'Sri Enippagam Sweets',
      'MS Builders',
      'Femi9',
      'HiFi Trendz'
    ];
    
    clients.forEach(client => {
      checkAddPage(6);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.setFont('Helvetica', 'normal');
      doc.text('• ' + client, margin + 5, yPos);
      yPos += 6;
    });
    yPos += 5;

    // Featured Projects
    addText('Featured Projects', 14, true, [27, 42, 65]);
    yPos += 2;

    const featuredProjects = projects.filter(p => p.category === 'Web Design' || p.category === 'Social Media');
    featuredProjects.forEach((project, index) => {
      checkAddPage(50);
      
      // Project category badge
      doc.setFillColor(0, 192, 163);
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(8);
      doc.setFont('Helvetica', 'bold');
      const cleanCategory = project.category.replace(/[^\x00-\x7F]/g, "").trim();
      const categoryWidth = doc.getTextWidth(cleanCategory) + 8;
      doc.roundedRect(margin, yPos - 3, categoryWidth, 6, 2, 2, 'F');
      doc.text(cleanCategory, margin + 4, yPos);
      yPos += 8;

      // Project title
      addText(project.title, 12, true, [0, 192, 163]);
      
      // Project description
      addText(project.description, 9);
      
      // Features
      if (project.features) {
        yPos += 2;
        project.features.forEach((feature: string) => {
          checkAddPage(5);
          doc.setFontSize(8);
          doc.setTextColor(0, 0, 0);
          doc.setFont('Helvetica', 'normal');
          const cleanFeature = feature.replace(/[^\x00-\x7F]/g, "").trim();
          const featureLines = doc.splitTextToSize('• ' + cleanFeature, maxWidth - 5);
          featureLines.forEach((line: string, index: number) => {
            doc.text(line, margin + 5, yPos + (index * 4));
          });
          yPos += featureLines.length * 4;
        });
      }
      
      // Results
      if (project.results) {
        yPos += 2;
        doc.setFontSize(9);
        doc.setFont('Helvetica', 'bold');
        doc.setTextColor(0, 192, 163);
        const cleanResults = project.results.replace(/[^\x00-\x7F]/g, "").trim();
        doc.text('Results: ' + cleanResults, margin, yPos);
        yPos += 6;
      }
      
      yPos += 8;
      
      // Add separator line
      if (index < featuredProjects.length - 1) {
        doc.setDrawColor(200, 200, 200);
        doc.line(margin, yPos, pageWidth - margin, yPos);
        yPos += 5;
      }
    });

    // Client Testimonials (new page)
    doc.addPage();
    yPos = margin;
    addText('Client Testimonials', 14, true, [27, 42, 65]);
    yPos += 2;

    const testimonials = [
      {
        quote: 'Sayvai Digital Marketing transformed our online presence completely. Their strategic approach to social media marketing helped us reach our target audience effectively and generate quality leads consistently.',
        author: 'MS Builders, Managing Director'
      },
      {
        quote: 'The team at Sayvai truly understands traditional brand storytelling. They helped us connect with our customers authentically and significantly increased our online sales through creative content and engagement strategies.',
        author: 'Suvvai Pickles, Founder'
      },
      {
        quote: 'Professional, reliable, and results-driven. Sayvai\'s digital marketing expertise helped us establish trust in the market and generate high-quality investment leads through targeted campaigns.',
        author: 'Shridha Investments, CEO'
      },
      {
        quote: 'Exceptional service! Their traditional brand storytelling approach resonated with our customers. The seasonal promotion strategies they created significantly boosted our brand visibility and customer engagement.',
        author: 'Sri Enippagam Sweets, Owner'
      }
    ];

    testimonials.forEach(testimonial => {
      checkAddPage(25);
      doc.setFontSize(9);
      doc.setFont('Helvetica', 'italic');
      doc.setTextColor(80, 80, 80);
      const cleanQuote = testimonial.quote.replace(/[^\x00-\x7F]/g, "").trim();
      const quoteLines = doc.splitTextToSize('"' + cleanQuote + '"', maxWidth - 10);
      quoteLines.forEach((line: string, index: number) => {
        doc.text(line, margin + 5, yPos + (index * 4));
      });
      yPos += quoteLines.length * 4 + 3;
      
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(27, 42, 65);
      const cleanAuthor = testimonial.author.replace(/[^\x00-\x7F]/g, "").trim();
      doc.text('- ' + cleanAuthor, pageWidth - margin - 5, yPos, { align: 'right' });
      yPos += 10;
    });

    // Our Services (new page)
    doc.addPage();
    yPos = margin;
    addText('Our Services', 14, true, [27, 42, 65]);
    yPos += 2;

    const services = [
      { title: 'Search Engine Optimization (SEO)', desc: 'Get white-hat SEO solutions that improve your organic search rankings and increase brand recognition.' },
      { title: 'Pay-Per-Click (PPC) Marketing', desc: 'Position your brand in front of the right people at the right time and platform with a targeted paid ads campaign.' },
      { title: 'Web Design and Development', desc: 'Improve your website accessibility and attract lifetime clients to your business.' },
      { title: 'Social Media Marketing', desc: 'Bring your brand closer to your target audience and gain better customer engagement with social media marketing.' },
      { title: 'Online Reputation Management', desc: 'Build and maintain your desired brand image to attract more business.' },
      { title: 'eCommerce Marketing', desc: 'Facilitate a smooth buying process for your customers and reduce operational costs with strategic eCommerce marketing solutions.' }
    ];

    services.forEach(service => {
      checkAddPage(20);
      const cleanTitle = service.title.replace(/[^\x00-\x7F]/g, "").trim();
      const cleanDesc = service.desc.replace(/[^\x00-\x7F]/g, "").trim();
      addText(cleanTitle, 11, true, [0, 192, 163]);
      addText(cleanDesc, 9);
      yPos += 3;
    });

    // Footer
    checkAddPage(30);
    yPos += 10;
    doc.setFillColor(245, 245, 245);
    doc.rect(margin, yPos, maxWidth, 35, 'F');
    yPos += 8;
    doc.setFontSize(14);
    doc.setFont('Helvetica', 'bold');
    doc.setTextColor(27, 42, 65);
    doc.text('Ready to Start Your Success Story?', pageWidth / 2, yPos, { align: 'center' });
    yPos += 8;
    doc.setFontSize(10);
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(80, 80, 80);
    doc.text('Let\'s create something amazing together. Join our portfolio of successful clients.', pageWidth / 2, yPos, { align: 'center' });
    yPos += 8;
    doc.setFont('Helvetica', 'bold');
    doc.setTextColor(0, 192, 163);
    doc.text('Contact: Sayvai Digital Marketing', pageWidth / 2, yPos, { align: 'center' });
    yPos += 6;
    doc.setFont('Helvetica', 'normal');
    doc.text('Email: info@sayvai.com | Visit: www.sayvai.com', pageWidth / 2, yPos, { align: 'center' });

    // Download the PDF
    doc.save('Sayvai_Digital_Marketing_Portfolio.pdf');
  };

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

      {/* We Are Digital Marketing Experts Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              We Are Digital Marketing <span className="text-[#00C0A3] dark:text-[#3ABEF9]">Experts</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Sayvai boasts a unique, close-knit team with experts in all facets of web marketing: strategic, 
              creative and technical.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              As a recognized leader in digital marketing, Sayvai has a growing team of dedicated professionals 
              located across multiple regions. We work closely together to ensure smooth campaign 
              development and execution for all of our clients.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              From India to global markets, our digital marketing professionals from all over the world offer 
              unique skill sets and years of industry expertise. In every project we handle, you can trust us 
              to deliver custom web solutions that meet your long-term strategic goals.
            </p>

            <div className="flex flex-col items-center space-y-4 bg-gradient-to-r from-[#00C0A3]/10 to-[#3ABEF9]/10 dark:from-[#00C0A3]/20 dark:to-[#3ABEF9]/20 p-6 rounded-xl border-l-4 border-[#00C0A3] dark:border-[#3ABEF9] max-w-2xl mx-auto">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00C0A3] to-[#3ABEF9] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#1B2A41] dark:text-white text-xl mb-2">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Empowering businesses through innovative digital marketing strategies that drive growth, 
                  engagement, and measurable results across all platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We're a Results-Driven Digital Marketing Agency */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              We're a Results-Driven Digital Marketing Agency
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At Sayvai, we take a strategy-first approach to show you real results. Our digital marketing team goes above and beyond to 
              ensure our web marketing campaigns do not just drum up new business for our clients but also support sustainable success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🔍',
                title: 'Search Engine Optimization (SEO)',
                description: 'Get white-hat SEO solutions that improve your organic search rankings and increase brand recognition.'
              },
              {
                icon: '💰',
                title: 'Pay-Per-Click (PPC) Marketing',
                description: 'Position your brand in front of the right people at the right time and platform with a targeted paid ads campaign.'
              },
              {
                icon: '🌐',
                title: 'Web Design and Development',
                description: 'Improve your website accessibility and attract lifetime clients to your business.'
              },
              {
                icon: '👍',
                title: 'Social Media Marketing',
                description: 'Bring your brand closer to your target audience and gain better customer engagement with social media marketing.'
              },
              {
                icon: '⭐',
                title: 'Online Reputation Management',
                description: 'What does your reputation say about your brand? Build and maintain your desired brand image to attract more business.'
              },
              {
                icon: '🛒',
                title: 'eCommerce Marketing',
                description: 'Facilitate a smooth buying process for your customers and reduce operational costs with strategic eCommerce marketing solutions.'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1B2A41] dark:text-white mb-4 group-hover:text-[#00C0A3] dark:group-hover:text-[#3ABEF9] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Happy <span className="text-[#00C0A3] dark:text-[#3ABEF9]">Clients</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-6">
            Trusted by leading brands and innovative companies worldwide
          </p>
        </div>

        {/* Infinite Scroll Container - Full Width */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="flex">
            {/* First set */}
            <div className="flex animate-scroll-infinite shrink-0">
              {[
                { name: 'Atalantiis', logo: '/Atalantiis logo.jpg' },
                { name: 'Minerva Vidhya Mandhir', logo: '/Minervaa loop.png' },
                { name: 'Suvai and Kavya', logo: '/suvai and kavya loop.jpg' },
                { name: 'Shridha Investment', logo: '/shridha loop.png' },
                { name: 'SVS Events', logo: '/svs loop.jpg' },
                { name: 'Sri Enippagam', logo: '/enippagam loop.png' },
                { name: 'MS Builders', logo: '/ms logo loop.png' },
                { name: 'Femi9', logo: '/femi9 loop.png' },
                { name: 'HiFi Trendz', logo: '/hifi loop.jpeg' },
              ].map((client, index) => (
                <div
                  key={`set1-${index}`}
                  className="flex-shrink-0 flex items-center justify-center mx-8"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`w-auto object-contain transition-all duration-500 ${
                      client.name === 'Minerva Vidhya Mandhir' ? 'h-40' : 'h-28'
                    }`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex animate-scroll-infinite shrink-0">
              {[
                { name: 'Atalantiis', logo: '/Atalantiis logo.jpg' },
                { name: 'Minerva Vidhya Mandhir', logo: '/Minervaa loop.png' },
                { name: 'Suvai and Kavya', logo: '/suvai and kavya loop.jpg' },
                { name: 'Shridha Investment', logo: '/shridha loop.png' },
                { name: 'SVS Events', logo: '/svs loop.jpg' },
                { name: 'Sri Enippagam', logo: '/enippagam loop.png' },
                { name: 'MS Builders', logo: '/ms logo loop.png' },
                { name: 'Femi9', logo: '/femi9 loop.png' },
                { name: 'HiFi Trendz', logo: '/hifi loop.jpeg' },
              ].map((client, index) => (
                <div
                  key={`set2-${index}`}
                  className="flex-shrink-0 flex items-center justify-center mx-8"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`w-auto object-contain transition-all duration-500 ${
                      client.name === 'Minerva Vidhya Mandhir' ? 'h-40' : 'h-28'
                    }`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 sticky top-20 z-20 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Projects</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our successful projects across different categories
            </p>
          </div>
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
        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="space-y-24">
            {/* Dynamically render all Web Design projects */}
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="relative group">
                <div className={`md:flex items-center gap-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className="md:w-1/2 min-h-[24rem] rounded-xl bg-white dark:bg-gray-100 flex items-center justify-center p-8">
                    <img 
                      className="w-full h-auto max-h-96 object-contain transition-transform duration-700 group-hover:scale-105" 
                      src={project.image} 
                      alt={project.title} 
                    />
                  </div>
                  {/* Content */}
                  <div className="md:w-1/2 mt-8 md:mt-0">
                    <div className="text-sm font-medium text-[#00C0A3] dark:text-[#3ABEF9] mb-3">
                      {project.category}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {project.description}
                    </p>
                    
                    {project.features && (
                      <div className="space-y-4 mb-8">
                        {project.features.map((feature: string, idx: number) => (
                          <div key={idx} className="flex items-start">
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
                    )}
                    
                    {project.results && (
                      <div className="inline-block px-4 py-2 bg-[#00C0A3]/10 dark:bg-[#3ABEF9]/10 rounded-lg">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Results:</p>
                        <p className="text-[#00C0A3] dark:text-[#3ABEF9] font-bold text-lg">{project.results}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : selectedCategory === 'Social Media' ? (
        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="space-y-24">
            {/* Dynamically render all Social Media projects */}
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="relative group">
                <div className={`md:flex items-center gap-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className="md:w-1/2 min-h-[24rem] rounded-xl bg-white dark:bg-gray-100 flex items-center justify-center p-8">
                    <img 
                      className="w-full h-auto max-h-96 object-contain transition-transform duration-700 group-hover:scale-105" 
                      src={project.image} 
                      alt={project.title} 
                    />
                  </div>
                  {/* Content */}
                  <div className="md:w-1/2 mt-8 md:mt-0">
                    <div className="text-sm font-medium text-[#00C0A3] dark:text-[#3ABEF9] mb-3">
                      {project.category}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {project.description}
                    </p>
                    
                    {project.features && (
                      <div className="space-y-4 mb-8">
                        {project.features.map((feature: string, idx: number) => (
                          <div key={idx} className="flex items-start">
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
                    )}
                    
                    {project.results && (
                      <div className="inline-block px-4 py-2 bg-[#00C0A3]/10 dark:bg-[#3ABEF9]/10 rounded-lg">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Results:</p>
                        <p className="text-[#00C0A3] dark:text-[#3ABEF9] font-bold text-lg">{project.results}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : selectedCategory === 'Testimonials' ? (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Client <span className="text-[#00C0A3] dark:text-[#3ABEF9]">Testimonials</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Hear what our satisfied clients have to say about working with us
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Video Testimonials */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8 text-[#00C0A3] dark:text-[#3ABEF9]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Video Testimonials
                </h3>
                
                {[
                  {
                    name: 'Minerva School',
                    role: 'Principal',
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    thumbnail: '/Mineerva logo.png'
                  },
                  {
                    name: 'SVS Events',
                    role: 'Event Manager',
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    thumbnail: '/svs loop.jpg'
                  }
                ].map((video, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative group">
                      <iframe
                        className="w-full h-full"
                        src={video.videoUrl}
                        title={`${video.name} Testimonial`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{video.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{video.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Written Reviews */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8 text-[#00C0A3] dark:text-[#3ABEF9]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                  </svg>
                  Client Reviews
                </h3>
                
                {[
                  {
                    name: 'MS Builders',
                    role: 'Managing Director',
                    image: '/ms logo loop.png',
                    rating: 5,
                    review: 'Sayvai Digital Marketing transformed our online presence completely. Their strategic approach to social media marketing helped us reach our target audience effectively and generate quality leads consistently.'
                  },
                  {
                    name: 'Suvvai Pickles',
                    role: 'Founder',
                    image: '/suvai and kavya loop.jpg',
                    rating: 5,
                    review: 'The team at Sayvai truly understands traditional brand storytelling. They helped us connect with our customers authentically and significantly increased our online sales through creative content and engagement strategies.'
                  },
                  {
                    name: 'Shridha Investments',
                    role: 'CEO',
                    image: '/shridha loop.png',
                    rating: 5,
                    review: 'Professional, reliable, and results-driven. Sayvai\'s digital marketing expertise helped us establish trust in the market and generate high-quality investment leads through targeted campaigns.'
                  },
                  {
                    name: 'Sri Enippagam Sweets',
                    role: 'Owner',
                    image: '/enippagam loop.png',
                    rating: 5,
                    review: 'Exceptional service! Their traditional brand storytelling approach resonated with our customers. The seasonal promotion strategies they created significantly boosted our brand visibility and customer engagement.'
                  }
                ].map((review, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-start gap-4 mb-4">
                      <img 
                        src={review.image} 
                        alt={review.name}
                        className="w-16 h-16 rounded-full object-contain bg-gray-100 dark:bg-gray-800 p-2"
                      />
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">{review.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{review.role}</p>
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">"{review.review}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 bg-[#F5F5F5] dark:bg-gray-800 relative">
          <div className="container mx-auto px-6">
            <div 
              ref={gridRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
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

      {/* Download PDF Button - Fixed Bottom Left */}
      <div className="fixed bottom-8 left-8 z-50">
        <button
          onClick={handleDownloadPDF}
          className="group flex items-center gap-3 bg-[#00C0A3] dark:bg-[#3ABEF9] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-[#00C0A3]/50 dark:hover:shadow-[#3ABEF9]/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          title="Download Portfolio as PDF"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span className="font-semibold hidden sm:inline">Download PDF</span>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
