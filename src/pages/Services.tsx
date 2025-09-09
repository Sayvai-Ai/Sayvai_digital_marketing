import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, PenTool, TrendingUp, Target, BarChart3 } from 'lucide-react';

// Function to safely convert service titles to URL-friendly slugs
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, 'and')       // replace & with 'and'
    .replace(/[^\w\s-]/g, '')  // remove other special characters
    .replace(/\s+/g, '-');      // replace spaces with '-'

// Updated services array with slug keys to match slugify logic
const services = [
  {
    icon: Search,
    slug: 'seo-optimization',
    title: 'SEO Optimization',
    description: 'Boost your search rankings and organic visibility with our proven SEO strategies.',
    features: ['Keyword Research', 'On-Page Optimization', 'Link Building', 'Technical SEO'],
    gradient: 'from-[#00C0A3] to-[#3ABEF9]'
  },
  {
    icon: Users,
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    description: 'Build and engage your community across all major social platforms.',
    features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Influencer Partnerships'],
    gradient: 'from-[#3ABEF9] to-[#00C0A3]'
  },
  {
    icon: PenTool,
    slug: 'content-creation',
    title: 'Content Creation',
    description: 'Compelling content that tells your story and drives meaningful engagement.',
    features: ['Blog Writing', 'Video Production', 'Graphic Design', 'Copywriting'],
    gradient: 'from-[#1B2A41] to-[#00C0A3]'
  },
  {
    icon: TrendingUp,
    slug: 'ppc-advertising',
    title: 'PPC Advertising',
    description: 'Maximize your ROI with data-driven paid advertising campaigns.',
    features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'A/B Testing'],
    gradient: 'from-[#00C0A3] to-[#1B2A41]'
  },
  {
    icon: Target,
    slug: 'google-my-business-setup',
    title: 'Google My Business Setup',
    description: 'Helps businesses establish and optimize their presence on Google Maps and Google Search to improve local visibility.',
    features: ['Profile Creation', 'Local SEO Optimization', 'Photos & Media Management', 'Review Management'],
    gradient: 'from-[#3ABEF9] to-[#1B2A41]'
  },
  {
    icon: BarChart3,
    slug: 'analytics-and-reporting',
    title: 'Analytics & Reporting',
    description: 'Comprehensive insights and reporting to track your marketing performance.',
    features: ['Performance Tracking', 'Custom Dashboards', 'ROI Analysis', 'Competitor Analysis'],
    gradient: 'from-[#1B2A41] to-[#3ABEF9]'
  },
];

const Services: React.FC = () => {
  return (
    <div className="pt-20 relative z-10">
      {/* Hero Section with Background Image */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Digital marketing services"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A41]/90 to-[#00C0A3]/80 dark:from-[#1B2A41]/95 dark:to-[#00C0A3]/90"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#3ABEF9]">Services</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions designed to accelerate your business growth 
            and establish a dominant online presence in your industry.
          </p>
          <Link to="/contact">
            <button className="mt-8 bg-white dark:bg-gray-800 text-[#1B2A41] dark:text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-2xl transition-all duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                to={`/services/${service.slug}`}
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl dark:shadow-gray-800/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-semibold text-[#1B2A41] dark:text-white mb-4 group-hover:text-[#00C0A3] dark:group-hover:text-[#3ABEF9] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-[#00C0A3] rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-[#00C0A3] dark:text-[#3ABEF9] font-semibold hover:text-[#1B2A41] dark:hover:text-white transition-colors duration-300 group-hover:translate-x-2 transform inline-block">
                    Learn More → 
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#F5F5F5] dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B2A41] dark:text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures consistent results and exceeds expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[ 
              { step: '01', title: 'Discovery', description: 'Deep dive into your business goals and market landscape' },
              { step: '02', title: 'Strategy', description: 'Develop customized strategies based on data and insights' },
              { step: '03', title: 'Execution', description: 'Implement campaigns with precision and attention to detail' },
              { step: '04', title: 'Optimization', description: 'Continuously refine and improve performance' },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-[#00C0A3] to-[#3ABEF9] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-[#1B2A41] dark:text-white mb-4">{process.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1B2A41] to-[#00C0A3] dark:from-[#0F172A] dark:to-[#00C0A3]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your digital marketing goals.
          </p>
          
          <Link to="/contact">
            <button className="bg-white dark:bg-gray-800 text-[#1B2A41] dark:text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
