// src/pages/Blogs.tsx
import React, { useEffect, useRef } from 'react';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const Blogs: React.FC = () => {
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

    const elements = sectionRef.current?.querySelectorAll('.blog-card');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const blogs: Blog[] = [
    {
      id: 1,
      title: 'The Future of Digital Marketing: Trends to Watch in 2025',
      excerpt: 'Explore the emerging trends that will shape digital marketing strategies and how to prepare your business for success.',
      content: 'Full content for blog 1 goes here. Add paragraphs, images, or any rich content you want.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Sarah Johnson',
      date: 'March 15, 2025',
      readTime: '8 min read',
      category: 'Strategy',
    },
    {
      id: 2,
      title: 'AI-Powered Content Creation: Boosting Efficiency Without Losing Authenticity',
      excerpt: 'Learn how to leverage AI tools for content creation while maintaining your brand voice and authentic connection with your audience.',
      content: 'Full content for blog 2 goes here.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Michael Chen',
      date: 'March 12, 2025',
      readTime: '6 min read',
      category: 'Content',
    },
    {
      id: 3,
      title: 'Social Commerce Revolution: Turning Social Media Into Sales Channels',
      excerpt: 'Discover how to transform your social media presence into powerful sales channels that drive revenue and build customer loyalty.',
      content: 'Full content for blog 3 goes here.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Emily Rodriguez',
      date: 'March 10, 2025',
      readTime: '10 min read',
      category: 'Social Media',
    },
    {
      id: 4,
      title: 'Data-Driven SEO: Advanced Techniques for Competitive Rankings',
      excerpt: 'Deep dive into advanced SEO strategies that use data analytics to outperform competitors and achieve sustainable rankings.',
      content: 'Full content for blog 4 goes here.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'David Kim',
      date: 'March 8, 2025',
      readTime: '12 min read',
      category: 'SEO',
    },
    {
      id: 5,
      title: 'Building Customer Communities: From Followers to Brand Advocates',
      excerpt: 'Learn the strategies to transform casual followers into passionate brand advocates who actively promote your business.',
      content: 'Full content for blog 5 goes here.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Lisa Wang',
      date: 'March 5, 2025',
      readTime: '7 min read',
      category: 'Community',
    },
    {
      id: 6,
      title: 'ROI Optimization: Measuring What Matters in Digital Campaigns',
      excerpt: 'Master the art of measuring and optimizing ROI across all your digital marketing channels for maximum business impact.',
      content: 'Full content for blog 6 goes here.',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'James Miller',
      date: 'March 3, 2025',
      readTime: '9 min read',
      category: 'Analytics',
    },
  ];

  const featuredPost = blogs[0];
  const regularPosts = blogs.slice(1);

  return (
    <div className="pt-20 relative z-10">
      {/* Hero Section */}
      <section className="pt-32 pb-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://www.labs.pepsico.com/prod/s3fs-public/2023-02/Digital%20marketing%20png%20background%202023%20v3_1.png?auto=compress&cs=tinysrgb&w=1920"
            alt="Content creation and blogging"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A41]/80 to-[#00C0A3]/70 dark:from-[#1B2A41]/95 dark:to-[#00C0A3]/90"></div>
        </div>
        <div className="absolute inset-0 opacity-25">
          <div className="water-ripple"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Digital Marketing <span className="text-[#3ABEF9]">Insights</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Stay ahead of the curve with expert insights, industry trends, and actionable strategies from our team of digital marketing professionals.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Link to={`/blogs/${featuredPost.id}`}>
              <div className="bg-gradient-to-br from-[#F5F5F5] to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-[#00C0A3] text-white text-sm font-medium rounded-full">Featured</span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium rounded-full">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-[#1B2A41] dark:text-white mb-4 hover:text-[#00C0A3] dark:hover:text-[#3ABEF9] transition-colors duration-300">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>{featuredPost.author}</span>
                      <span className="mx-2">•</span>
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section ref={sectionRef} className="py-20 bg-[#F5F5F5] dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B2A41] dark:text-white mb-6">Latest Articles</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Fresh insights and proven strategies to help you navigate the digital marketing landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((blog) => (
              <Link to={`/blogs/${blog.id}`} key={blog.id}>
                <article className="blog-card bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-[#00C0A3]/10 dark:bg-[#3ABEF9]/20 text-[#00C0A3] dark:text-[#3ABEF9] text-sm font-medium rounded-full">
                        {blog.category}
                      </span>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#1B2A41] dark:text-white mb-3 group-hover:text-[#00C0A3] dark:group-hover:text-[#3ABEF9] transition-colors duration-300 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span>By {blog.author}</span>
                      <span className="mx-2">•</span>
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1B2A41] to-[#00C0A3] dark:from-[#0F172A] dark:to-[#00C0A3]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let’s Build Something Extraordinary Together
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Whether you’re looking to amplify your brand, launch a new project, or
            scale your digital presence — our team is ready to make it happen.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="px-10 py-4 bg-white text-[#1B2A41] dark:text-white dark:bg-gray-800 rounded-full font-semibold transition duration-300 
                        hover:bg-[#00C0A3] hover:text-white hover:shadow-[0_0_20px_#00C0A3]"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Blogs;
