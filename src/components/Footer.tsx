import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin, Github } from 'lucide-react';
import { serviceData } from '../pages/ServiceDetails'; // import dynamic service data

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#25344D] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <img
                src="/logo2.svg"
                alt="SAYVAI Logo"
                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xl font-bold">SAYVAI DIGITAL MARKETING</span>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Transforming businesses through innovative digital marketing strategies that drive growth and engagement.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/savyvai/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#00C0A3] transition-colors duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.instagram.com/sayvai.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#00C0A3] transition-colors duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://github.com/Sayvai-io/.github"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#00C0A3] transition-colors duration-300 group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#00C0A3]">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Services', 'Blogs', 'Contact', 'Solution'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-[#00C0A3] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#00C0A3]">Services</h3>
            <ul className="space-y-2">
              {Object.entries(serviceData).map(([slug, data]) => (
                <li key={slug}>
                  <Link
                    to={`/services/${slug}`}
                    className="text-gray-300 hover:text-[#00C0A3] transition-colors duration-300"
                  >
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#00C0A3]">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#00C0A3]" />
                <span className="text-gray-300">info.sayvai@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#00C0A3]" />
                <span className="text-gray-300">+91 8220486198</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#00C0A3]" />
                <span className="text-gray-300">Sayvai Software LLP, CIT Campus, Coimbatore-641013</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-600 text-center">
          <p className="text-gray-400">
            © 2025 SAYVAI. All rights reserved. Crafted with passion for digital excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
