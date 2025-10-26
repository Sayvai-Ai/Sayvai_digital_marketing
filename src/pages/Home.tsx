// src/pages/Home.tsx
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Award, Zap, Share2, Edit3 } from 'lucide-react';

// import LogoLoop from '../components/LogoLoop/LogoLoop';

const Home = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  // State to track the currently open FAQ item. 'null' means no item is open.
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Scroll-based fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // State-based FAQ toggle function
  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="relative z-10" ref={sectionRef}>
      {/* Hero Section */}
<section className="bg-slate-100 dark:bg-slate-900 py-20 md:py-32">
  <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    {/* Text Content */}
    <div className="fade-on-scroll">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-gray-900 dark:text-gray-100">
        Digital Marketing <br />
        <span className="text-teal-400">Solutions</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mb-8 leading-relaxed">
        Drive growth and maximize your online presence with our data-driven digital marketing strategies. 
        From SEO to social media, we help businesses like yours succeed in the digital landscape.
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center px-6 py-3 border border-teal-400 bg-teal-400 text-white rounded-full text-lg font-semibold 
                   hover:bg-transparent hover:text-teal-400 transition-all duration-300 transform hover:scale-105"
      >
        Get Started
        <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </div>

    {/* Image */}
    <div className="flex justify-center items-center fade-on-scroll">
      <img
        src="/home_start.png"
        alt="Digital Marketing Solutions Illustration"
        className="max-w-full h-auto rounded-lg shadow-lg dark:shadow-gray-800 transition-shadow duration-300"
      />
    </div>
  </div>
</section>


      {/* Company Introduction */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center fade-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Empowering Businesses in the Digital Age
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00C0A3] to-[#3ABEF9] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              At Digital Marketing Solutions, we're more than just marketers – we're growth partners.
              With over a decade of experience in the digital landscape, we've helped hundreds of
              businesses transform their online presence and achieve remarkable results.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Our data-driven approach combines cutting-edge technology with creative strategies to
              deliver measurable outcomes. We believe in building lasting relationships with our clients,
              understanding their unique challenges, and crafting customized solutions that drive real business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to elevate your brand and drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {[
    { 
      title: 'SEO Optimization', 
      description: 'Boost your visibility and rank higher in search results with our proven SEO strategies.', 
      gradient: 'from-[#00C0A3] to-[#3ABEF9]', 
      icon: <TrendingUp className="w-8 h-8 text-white" /> 
    },
    { 
      title: 'Social Media Marketing', 
      description: 'Engage your audience and build lasting relationships across all social platforms.', 
      gradient: 'from-[#3ABEF9] to-[#00C0A3]', 
      icon: <Share2 className="w-8 h-8 text-white" /> 
    },
    { 
      title: 'Content Creation', 
      description: 'Compelling content that tells your story and converts visitors into customers.', 
      gradient: 'from-[#1B2A41] to-[#00C0A3]', 
      icon: <Edit3 className="w-8 h-8 text-white" /> 
    },
  ].map((service, index) => (
    <div 
      key={index} 
      className="relative bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group fade-on-scroll mb-8 overflow-hidden"
    >
      <div className="absolute -top-1 -left-1 w-12 h-12 bg-gradient-to-br from-transparent to-[#00C0A3]/10 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-gradient-to-tl from-transparent to-[#00C0A3]/10 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-lg mb-6 flex items-center justify-center group-hover:rotate-6 transition-transform duration-300`}>
        {service.icon} {/* dynamic icon here */}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
    </div>
  ))}
</div>

          <div className="text-center mt-12 fade-on-scroll">
            <Link to="/services" className="inline-flex items-center bg-[#00C0A3] hover:bg-[#00A68F] text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300">
              Explore All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're not just another digital marketing agency. Here's what sets us apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Proven Results', description: 'We deliver measurable results with data-driven strategies that drive real business growth.', icon: <TrendingUp className="w-8 h-8 text-white" />, gradient: 'from-[#3ABEF9] to-[#00C0A3]' },
              { title: 'Industry Experts', description: 'Our team consists of certified professionals with years of experience in digital marketing.', icon: <Users className="w-8 h-8 text-white" />, gradient: 'from-[#1B2A41] to-[#3ABEF9]' },
              { title: 'Custom Strategies', description: 'We create tailored marketing plans that align with your unique business goals.', icon: <Award className="w-8 h-8 text-white" />, gradient: 'from-[#00C0A3] to-[#1B2A41]' },
              { title: 'Transparent Reporting', description: 'Get clear, detailed reports on your campaign performance and ROI.', icon: <Zap className="w-8 h-8 text-white" />, gradient: 'from-[#3ABEF9] to-[#1B2A41]' },
            ].map((item, index) => (
              <div key={index} className="relative bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group fade-on-scroll mb-8 overflow-hidden">
                <div className="absolute -top-1 -left-1 w-12 h-12 bg-gradient-to-br from-transparent to-[#00C0A3]/10 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-gradient-to-tl from-transparent to-[#00C0A3]/10 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-lg mb-6 flex items-center justify-center group-hover:rotate-6 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00C0A3] to-[#3ABEF9] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our digital marketing services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'How do you approach SEO for a new website?',
                answer: 'We start by performing thorough keyword research to identify the terms your target audience is searching for. Then, we optimize your website structure, content, and metadata to rank higher on search engines. Continuous monitoring helps us adjust and refine the strategy.'
              },
              {
                question: 'Is paid advertising worth it for small budgets?',
                answer: 'Absolutely! Even with a modest budget, paid ads can drive targeted traffic when carefully planned. We focus on optimizing ad spend by narrowing down audiences, selecting high-converting keywords, and continuously testing ad creatives to ensure maximum return.'
              },
              {
                question: 'How do you create a content strategy that attracts the right audience?',
                answer: 'We align content topics with your audience’s interests and pain points by conducting research and analyzing competitors. Consistent, high-value content helps build trust and establishes your brand as an authority in the industry.'
              },
              {
                question: 'What’s the role of social media in digital marketing?',
                answer: 'Social media is essential for brand awareness, customer engagement, and lead generation. We create tailored content and ad campaigns that reflect your brand’s voice while interacting with users in real time to build relationships and trust.'
              },
              {
                question: 'How can I track my ROI on different marketing channels?',
                answer: 'We implement tracking tools like Google Analytics, conversion pixels, and campaign dashboards to measure performance. By analyzing metrics like traffic sources, conversion rates, and cost per acquisition, you get clear insights into what’s working.'
              },
              {
                question: 'How do you handle negative feedback or reviews online?',
                answer: 'We address negative feedback by responding promptly and professionally. Listening to customer concerns, offering solutions, and showing empathy helps build credibility while turning unhappy experiences into opportunities to showcase excellent customer service.'
              },
              {
                question: 'What’s the importance of email marketing in today’s digital world?',
                answer: 'Email marketing is still one of the most cost-effective channels for nurturing leads and converting them into customers. Through personalized messaging and automation, we help maintain engagement while delivering timely offers and information.'
              },
              {
                question: 'Do I need to invest in marketing automation tools?',
                answer: 'Marketing automation tools help streamline repetitive tasks, improve targeting, and boost efficiency. While not always necessary for small campaigns, they’re incredibly useful for scaling strategies, segmenting audiences, and providing timely follow-ups.'
              },
              {
                question: 'How do you tailor marketing campaigns for mobile users?',
                answer: 'We design mobile-friendly content, fast-loading pages, and intuitive user experiences to meet the needs of on-the-go users. Mobile-specific campaigns include responsive ads and optimized landing pages that guide users seamlessly from interaction to conversion.'
              },
              {
                question: 'Can content marketing help improve customer retention?',
                answer: 'Yes! Well-crafted content keeps customers informed, engaged, and connected with your brand. By providing valuable insights and helpful resources, content nurtures long-term relationships, encourages repeat purchases, and builds brand loyalty.'
              }
            ].map((faq, index) => (
              <div key={index} className="group">
                <button
                  className="w-full px-6 py-4 text-left rounded-lg transition-all duration-300 flex justify-between items-center mb-4
                    bg-white dark:bg-gray-900 shadow hover:shadow-md hover:shadow-[#00C0A3]/20
                    focus:outline-none focus:ring-2 focus:ring-[#00C0A3] focus:ring-opacity-50"
                  onClick={() => handleFaqToggle(index)}
                  aria-expanded={openFaqIndex === index ? "true" : "false"}
                  aria-controls={`faq-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">{faq.question}</h3>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${openFaqIndex === index ? 'rotate-180' : 'rotate-0'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  id={`faq-${index}`} 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-96' : 'max-h-0'}`}
                  aria-hidden={openFaqIndex !== index}
                >
                  <div className="py-4 text-gray-600 dark:text-gray-300">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Still have questions? We're here to help!</p>
            <Link to="/contact" className="inline-flex items-center bg-[#00C0A3] hover:bg-[#00A68F] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 text-base">
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
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

    </div>
  );
};

export default Home;