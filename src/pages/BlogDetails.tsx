// src/pages/BlogDetails.tsx
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';

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

export const blogs: Blog[] = [
  {
    id: 1,
    title: 'The Future of Digital Marketing: Trends to Watch in 2025',
    excerpt: 'Explore the emerging trends that will shape digital marketing strategies and how to prepare your business for success.',
    content: `
      <p>Key trends shaping digital marketing in 2025 include the pervasive use of Artificial Intelligence (AI) for personalization and automation, the continued dominance of short-form video content, the growing importance of voice search optimization and immersive AR/VR experiences, a shift to privacy-first, first-party data strategies due to stricter regulations, the rise of social commerce, and a greater focus on sustainability and social responsibility in marketing efforts.</p>
      
      <h2>Here are the specific trends to watch:</h2>

      <h3>Technology & Data</h3>
      <p><strong>AI-Powered Personalization:</strong> AI will become a necessity for creating hyper-personalized user experiences, from content recommendations to predictive journeys.</p>
      <p><strong>Voice Search Optimization:</strong> As smart speakers and voice assistants become more common, optimizing content for voice queries is critical.</p>
      <p><strong>AR/VR Experiences:</strong> Augmented and Virtual Reality will transform how consumers interact with brands, offering immersive experiences and new advertising formats.</p>
      <p><strong>Privacy-First Marketing:</strong> With increasing data privacy laws and the phasing out of third-party cookies, marketers will focus on consent-based, first-party data collection through methods like loyalty programs and direct customer engagement.</p>
      <p><strong>AI-Driven Content Creation:</strong> AI tools will assist in generating a variety of marketing content, from personalized messages to creative designs.</p>

      <h3>Content & Platforms</h3>
      <p><strong>Short-Form Video Dominance:</strong> Bite-sized, engaging videos on platforms like TikTok and Instagram Reels will continue to be a powerful content format.</p>
      <p><strong>Evolving Influencer Marketing:</strong> The creator economy will thrive, with a focus on more genuine, authentic, and long-term partnerships with micro-influencers.</p>
      <p><strong>Social Commerce Growth:</strong> The integration of e-commerce features directly into social media platforms will allow consumers to shop seamlessly within apps.</p>
      <p><strong>Omnichannel Marketing:</strong> An integrated, consistent approach to marketing across multiple channels is becoming more critical than ever.</p>

      <h3>Strategy & Ethics</h3>
      <p><strong>Focus on Sustainability & Social Responsibility:</strong> Consumers are increasingly aligning with brands that demonstrate strong ethical practices and a commitment to sustainability.</p>
      <p><strong>Community Building:</strong> In an increasingly digital world, fostering a sense of community around a brand will become a key strategy for engagement.</p>
    `,
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
    content: `
      <p>AI content tools can dramatically increase productivity for marketers and writers.</p>
      <p>By automating repetitive tasks, generating ideas, and providing grammar and style assistance, AI allows teams to focus on creativity and strategy.</p>

      <h2>Benefits of AI in Content Creation</h2>
      <ul>
        <li><strong>Efficiency & Automation:</strong> Automate repetitive tasks such as grammar checking, formatting, and basic copywriting.</li>
        <li><strong>Idea Generation:</strong> AI tools can suggest topics, headlines, and outlines to inspire content creation.</li>
        <li><strong>Content Optimization:</strong> AI analyzes audience behavior and engagement metrics to improve readability and SEO.</li>
      </ul>

      <h2>Maintaining Authenticity</h2>
      <p>Despite AI assistance, human oversight ensures content retains your brand voice and emotional resonance.</p>
      <ul>
        <li>Review AI-generated drafts carefully before publishing.</li>
        <li>Combine AI suggestions with human creativity for unique narratives.</li>
        <li>Ensure the tone matches your brand personality.</li>
      </ul>

      <h2>Future Outlook</h2>
      <p>Hybrid content creation, where AI handles repetitive tasks and humans focus on strategy and storytelling, is becoming the industry standard.</p>
    `,
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
    content: `
      <p>Social commerce is changing the way brands sell online.</p>
      <p>Platforms like Instagram, TikTok, and Facebook now allow users to buy products without leaving the app.</p>

      <h2>Benefits of Social Commerce</h2>
      <ul>
        <li>Seamless shopping experience for customers.</li>
        <li>Increased conversion rates due to impulse purchases.</li>
        <li>Direct engagement and feedback from social audiences.</li>
      </ul>

      <h2>Strategies for Success</h2>
      <ul>
        <li>Integrate shoppable posts and stories across Instagram, TikTok, and Facebook.</li>
        <li>Collaborate with influencers to drive awareness and trust.</li>
        <li>Use live selling events to showcase products in real time.</li>
      </ul>

      <h2>Emerging Trends</h2>
      <p>AI-driven product recommendations, AR/VR try-ons, and advanced analytics are making social commerce more personalized and effective.</p>

      <h2>Tips for Marketers</h2>
      <ul>
        <li>Focus on user-generated content to build trust.</li>
        <li>Offer exclusive social-only deals to incentivize purchases.</li>
        <li>Track metrics like click-to-purchase conversion and cart abandonment for continuous optimization.</li>
      </ul>
    `,
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
    content: `
      <p>SEO is evolving, and relying solely on keywords is no longer enough.</p>
      <p>Data-driven SEO involves analyzing search trends, user behavior, and engagement metrics to optimize content strategically.</p>

      <h2>Advanced Techniques</h2>
      <ul>
        <li>Keyword & Trend Analysis: Identify high-value keywords and content gaps using analytics.</li>
        <li>User Behavior Insights: Analyze dwell time, bounce rate, and engagement to guide optimization.</li>
        <li>Technical SEO: Ensure page speed, mobile responsiveness, and proper indexing.</li>
      </ul>

      <h2>Content Optimization</h2>
      <ul>
        <li>Structure content to answer user intent clearly.</li>
        <li>Optimize headings, meta descriptions, and images for SEO.</li>
        <li>Regularly update content to maintain relevance.</li>
      </ul>

      <h2>Analytics & Measurement</h2>
      <p>Track ranking changes, organic traffic, click-through rates, and conversion metrics to measure effectiveness and adjust strategies in real time.</p>

      <h2>Future of SEO</h2>
      <p>AI-powered SEO, semantic search, and voice search optimization will dominate, making data-driven insights critical.</p>
    `,
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
    content: `
      <p>Strong customer communities create brand loyalty and advocacy.</p>
      <p>Engaging users through interactive content, exclusive events, and forums encourages them to contribute and share experiences.</p>

      <h2>Steps to Build Communities</h2>
      <ul>
        <li>Identify Passionate Users: Engage with customers who already love your brand.</li>
        <li>Create Interaction Spaces: Host forums, online groups, or events for meaningful engagement.</li>
        <li>Reward Participation: Offer recognition, exclusive content, or perks for active contributors.</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Increased brand loyalty and repeat purchases.</li>
        <li>Organic advocacy and word-of-mouth promotion.</li>
        <li>Valuable feedback for product and service improvement.</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Encourage authentic conversations.</li>
        <li>Moderate interactions to ensure positivity.</li>
        <li>Continuously provide valuable content and resources.</li>
      </ul>

      <h2>Success Examples</h2>
      <p>Brands like LEGO and Glossier have cultivated thriving online communities that actively contribute ideas, share experiences, and promote the brand organically.</p>
    `,
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
    content: `
      <p>ROI is the ultimate measure of marketing success. Understanding which metrics drive business value helps marketers allocate budgets effectively.</p>

      <h2>Key Metrics</h2>
      <ul>
        <li>Conversions: Track the number of leads, purchases, or desired actions.</li>
        <li>Customer Acquisition Cost (CAC): Evaluate the cost of gaining each new customer.</li>
        <li>Customer Lifetime Value (CLV): Measure long-term revenue from each customer.</li>
      </ul>

      <h2>Optimization Techniques</h2>
      <ul>
        <li>Use A/B testing to refine messaging, creatives, and landing pages.</li>
        <li>Analyze cross-channel performance to allocate budgets effectively.</li>
        <li>Leverage predictive analytics to forecast ROI and optimize campaigns proactively.</li>
      </ul>

      <h2>Tips for Success</h2>
      <ul>
        <li>Focus on actionable metrics rather than vanity metrics.</li>
        <li>Continuously iterate campaigns based on insights.</li>
        <li>Align ROI measurement with overall business objectives for long-term growth.</li>
      </ul>

      <h2>Future Trends</h2>
      <p>AI-driven attribution models, predictive ROI analytics, and automation tools will empower marketers to make data-driven decisions faster and more accurately.</p>
    `,
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'James Miller',
    date: 'March 3, 2025',
    readTime: '9 min read',
    category: 'Analytics',
  },
];

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const blogId = Number(id);
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">404 - Blog Not Found</h1>
        <button
          onClick={() => navigate('/blogs')}
          className="bg-[#00C0A3] text-white px-6 py-3 rounded-full hover:bg-[#1B2A41] transition-colors duration-300"
        >
          Go Back to Blogs
        </button>
      </div>
    );
  }

  return (
  <div className="pt-20 pb-20">
    {/* Hero Section with Gradient Background */}
    <div className="relative w-full py-20 rounded-b-2xl shadow-lg bg-gradient-to-r from-[#00C0A3] via-[#3ABEF9] to-[#1B2A41]">
      <div className="container mx-auto px-6 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
        <div className="flex justify-center items-center flex-wrap space-x-4 text-sm md:text-base">
          <div className="flex items-center space-x-1 mb-2 md:mb-0">
            <User className="w-4 h-4" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center space-x-1 mb-2 md:mb-0">
            <Calendar className="w-4 h-4" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{blog.readTime}</span>
          </div>
        </div>
      </div>
    </div>

    {/* Blog Content */}
    <div className="container mx-auto px-6 mt-12 max-w-4xl">
      <div
        className="prose prose-lg text-gray-700 dark:text-gray-300 dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
      <div className="mt-10">
        <Link
          to="/blogs"
          className="inline-flex items-center text-[#00C0A3] dark:text-[#3ABEF9] hover:text-[#1B2A41] dark:hover:text-white font-semibold transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Blogs
        </Link>
      </div>
    </div>
  </div>
);

};

export default BlogDetails;
