import React, { useEffect, useRef } from 'react';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="pt-20 relative z-10">
      {/* Hero Section with Background Image */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Digital marketing team"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A41]/80 to-[#00C0A3]/70 dark:from-[#1B2A41]/95 dark:to-[#00C0A3]/90"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-[#3ABEF9]">Us</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            We're a passionate team of digital marketing experts dedicated to helping businesses 
            thrive in the ever-evolving digital landscape through innovative strategies and cutting-edge solutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div ref={sectionRef} className="bg-white dark:bg-gray-900">
        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-on-scroll">
                <h2 className="text-4xl font-bold text-[#1B2A41] dark:text-white mb-6">Our Story</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Founded in 2025, our team is dedicated to empowering businesses 
                  to thrive in the ever-evolving digital landscape. Our mission is to craft innovative digital 
                  marketing strategies that drive engagement, build brand presence, and deliver measurable results.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  We specialize in social media management, SEO, content creation, and AI-powered marketing solutions. 
                  By combining creativity, technology, and data-driven insights, we design campaigns that resonate 
                  with audiences and achieve business goals.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Our team works closely with clients to understand their vision and transform it into actionable strategies. 
                  Staying ahead of digital trends and adopting cutting-edge tools allows us to deliver impactful results 
                  and long-term success.
                </p>

                <div className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00C0A3] to-[#3ABEF9] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B2A41] dark:text-white">Our Mission</h3>
                    <p className="text-gray-600 dark:text-gray-300">Empowering businesses through digital excellence</p>
                  </div>
                </div>
              </div>
              <div className="fade-on-scroll">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="rounded-xl shadow-2xl hover:shadow-[#00C0A3]/20 dark:hover:shadow-[#3ABEF9]/30 transition-shadow duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-[#F5F5F5] dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 fade-on-scroll">
              <h2 className="text-4xl font-bold text-[#1B2A41] dark:text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                The principles that guide every decision we make and every strategy we create.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[ 
                { icon: Lightbulb, title: 'Innovation', description: 'We stay ahead of trends and embrace cutting-edge technologies to deliver forward-thinking solutions.' },
                { icon: Users, title: 'Collaboration', description: 'We believe in the power of partnership, working closely with our clients as an extension of their team.' },
                { icon: Target, title: 'Results-Driven', description: 'Every strategy is designed with clear objectives and measurable outcomes that align with your business goals.' },
                { icon: Award, title: 'Excellence', description: 'We maintain the highest standards in everything we do, from strategy development to execution.' },
              ].map((value, index) => (
                <div
                  key={index}
                  className="fade-on-scroll bg-white dark:bg-gray-700 rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00C0A3] to-[#3ABEF9] rounded-lg mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1B2A41] dark:text-white mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 fade-on-scroll">
              <h2 className="text-4xl font-bold text-[#1B2A41] dark:text-white mb-6">Our Founder</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Our founder leads with vision and dedication, driving innovative solutions and ensuring exceptional results.
              </p>
            </div>
            
            <div className="flex justify-center">
              {[{
                name: 'Ajith Ilakkuvan',
                role: 'Founder & CEO',
                image: '/ajith.jpeg',
                description: 'Visionary leader driving innovative digital marketing solutions.'
              }].map((member, index) => (
                <div
                  key={index}
                  className="fade-on-scroll bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group max-w-xs"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-[#1B2A41] dark:text-white mb-2">{member.name}</h3>
                    <p className="text-[#00C0A3] dark:text-[#3ABEF9] font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
