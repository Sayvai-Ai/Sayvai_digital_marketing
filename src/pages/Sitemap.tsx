// src/pages/Sitemap.tsx
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const SitemapPage = () => {
  useSEO({
    title: 'Sitemap - SAYVAI Digital Marketing',
    description: 'Complete sitemap of all pages on SAYVAI Digital Marketing website.',
    keywords: 'sitemap, site map',
    canonicalUrl: 'https://sayvai.com/sitemap',
  });

  const mainPages = [
    { path: '/', title: 'Home', description: 'Main landing page' },
    { path: '/about', title: 'About Us', description: 'Learn about SAYVAI' },
    { path: '/services', title: 'Services', description: 'Our digital marketing services' },
    { path: '/portfolio', title: 'Portfolio', description: 'Our past projects and work' },
    { path: '/solution', title: 'Solutions', description: 'Digital marketing solutions' },
    { path: '/blogs', title: 'Blog', description: 'Digital marketing blog posts' },
    { path: '/contact', title: 'Contact', description: 'Get in touch with us' },
  ];

  const services = [
    { slug: 'seo-optimization', title: 'SEO Optimization' },
    { slug: 'social-media-marketing', title: 'Social Media Marketing' },
    { slug: 'content-creation', title: 'Content Creation' },
    { slug: 'ppc-advertising', title: 'PPC Advertising' },
    { slug: 'google-my-business-setup', title: 'Google My Business Setup' },
    { slug: 'analytics-and-reporting', title: 'Analytics & Reporting' },
  ];

  const blogs = [
    { id: 1, title: 'The Future of Digital Marketing: Trends to Watch in 2025' },
    { id: 2, title: 'AI-Powered Content Creation: Boosting Efficiency Without Losing Authenticity' },
    { id: 3, title: 'Social Commerce Revolution: Turning Social Media Into Sales Channels' },
    { id: 4, title: 'Data-Driven SEO: Advanced Techniques for Competitive Rankings' },
    { id: 5, title: 'Building Customer Communities: From Followers to Brand Advocates' },
    { id: 6, title: 'ROI Optimization: Measuring What Matters in Digital Campaigns' },
  ];

  return (
    <div className="pt-20 pb-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Sitemap</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Browse all pages and content on SAYVAI Digital Marketing website.
          </p>
        </div>

        {/* Main Pages */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pb-3 border-b-2 border-[#00C0A3]">
            Main Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mainPages.map((page, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <Link to={page.path} className="text-[#00C0A3] hover:text-[#00b891] font-semibold text-lg">
                  {page.title}
                </Link>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{page.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pb-3 border-b-2 border-[#00C0A3]">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <Link to={`/services/${service.slug}`} className="text-[#00C0A3] hover:text-[#00b891] font-semibold">
                  {service.title}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Posts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pb-3 border-b-2 border-[#00C0A3]">
            Blog Posts
          </h2>
          <div className="space-y-3">
            {blogs.map((blog, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <Link to={`/blogs/${blog.id}`} className="text-[#00C0A3] hover:text-[#00b891] font-semibold">
                  {blog.title}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Info Box */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-[#3ABEF9] p-6 rounded">
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Note:</strong> For a complete list of all URLs, please refer to our <a href="/sitemap.xml" className="text-[#00C0A3] hover:underline">XML Sitemap</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
