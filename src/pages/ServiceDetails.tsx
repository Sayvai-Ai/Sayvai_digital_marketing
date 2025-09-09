import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

// Service data with full content
export const serviceData: Record<string, any> = {
  'seo-optimization': {
    title: 'SEO Optimization',
    description: 'Boost your search rankings and organic visibility.',
    fullDescription: `
SEO optimization, or Search Engine Optimization, is the process of improving a website's visibility in search engine results to attract unpaid ("organic") traffic. It involves making a website more user-friendly, creating authoritative content that answers user queries, and technically optimizing the site so search engines can easily find, crawl, and index it. By following search engine guidelines and best practices, businesses and creators can increase their website's organic reach, improve rankings, and drive more users to their content.

*Key Aspects of SEO Optimization*
- *Increased Visibility:* Improve rankings in organic search results, making your site more discoverable.  
- *Organic Traffic:* Focus on attracting free, unpaid traffic from search engines.  
- *User Experience:* Enhance usability, clarity, and accessibility.  
- *Content is Key:* Create high-quality, relevant content that answers user intent.  
- *Technical Foundations:* Optimize site structure so search engines can crawl and index it.

*Why SEO Optimization Matters*
- Cost-effective way to attract potential customers.  
- Expands reach by tapping into massive search engine audiences.  
- Builds trust and authority in your niche.  

*How SEO Optimization Works*
1. Research search queries and keywords.  
2. Create authoritative content.  
3. Optimize content for both users and search engines.  
4. Improve website structure for better crawling.  
5. Earn backlinks from reputable sites.  
6. Provide a seamless, mobile-friendly user experience.
    `,
    features: ['Keyword Research', 'On-Page Optimization', 'Link Building', 'Technical SEO'],
    caseStudies: [
      { title: 'E-commerce SEO', detail: 'Boosted organic traffic by 120% in 3 months.' },
      { title: 'Local Business SEO', detail: 'Increased local leads by 80% in 2 months.' }
    ],
    images: ['/seo1.png', '/seo2.png'],
  },
  'social-media-marketing': {
    title: 'Social Media Marketing',
    description: 'Build and engage your community.',
    fullDescription: `
Social media marketing is the practice of promoting a product, service, or brand on social media platforms like Facebook, Instagram, TikTok, and LinkedIn to engage with audiences, drive website traffic, and boost sales.  

**Key Components of Social Media Marketing**
- **Content Creation:** Publish posts, videos, and graphics that resonate.  
- **Audience Engagement:** Interact with followers via comments, messages, and live streams.  
- **Advertising:** Use paid ads to reach wider, targeted audiences.  
- **Community Building:** Foster groups and communities around your brand.  
- **Influencer Marketing:** Partner with creators to build trust.  
- **User-Generated Content:** Encourage customers to share brand-related content.  
- **Performance Tracking:** Measure KPIs like engagement and CTR.  

**Why It Matters**
- Boosts brand awareness.  
- Strengthens customer relationships.  
- Drives traffic and lead generation.  
- Provides real-time market insights.  

**How to Build a Strategy**
1. Define SMART goals.  
2. Understand your audience.  
3. Create an 80/20 content strategy.  
4. Maintain a consistent posting schedule.  
5. Use management tools like Hootsuite.  
6. Engage actively and listen to your audience.  
7. Analyze results and adapt.
    `,
    features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Influencer Partnerships'],
    caseStudies: [
      { title: 'Instagram Campaign', detail: 'Grew followers by 50% in 2 months with targeted content.' },
      { title: 'Facebook Ads', detail: 'Reduced cost-per-click by 30% while increasing conversions.' }
    ],
    images: ['/smm1.webp', '/smm2.jpg'],
  },
  'content-creation': {
    title: 'Content Creation',
    description: 'Compelling content that drives engagement.',
    fullDescription: `
Content creation is the process of developing and sharing text, images, audio, and video to engage audiences and provide value.  

**Key Aspects of Content Creation**
- **Strategy:** Align content with business goals and audience needs.  
- **Ideation:** Generate valuable and trending topics.  
- **Crafting:** Create engaging blogs, videos, graphics, etc.  
- **Distribution:** Share across websites and social platforms.  
- **Engagement:** Encourage interaction and community building.  
- **Optimization:** Track performance and refine.  

**Why It’s Important**
- Builds brand awareness.  
- Attracts and engages customers.  
- Establishes authority.  
- Drives traffic and sales.  
- Fosters loyalty.  

**Formats**
- Written (blogs, eBooks).  
- Visual (infographics, graphics).  
- Audio (podcasts).  
- Video (vlogs, livestreams).
    `,
    features: ['Blog Writing', 'Video Production', 'Graphic Design', 'Copywriting'],
    caseStudies: [
      { title: 'Video Series', detail: 'Produced 10 educational videos leading to a 25% increase in leads.' },
      { title: 'Blog Strategy', detail: 'Created 20 blog posts, improving organic traffic by 40%.' }
    ],
    images: ['/cc1.webp', '/cc2.png'],
  },
  'ppc-advertising': {
    title: 'PPC Advertising',
    description: 'Maximize your ROI with paid campaigns.',
    fullDescription: `
PPC (pay-per-click) marketing is a digital advertising model where businesses pay only when users click their ads. It drives targeted traffic quickly and efficiently.  

**How PPC Works**
1. Keyword bidding in ad auctions.  
2. Winning ads placed in SERPs or platforms.  
3. Users click ads to visit your site.  
4. Advertiser pays only per click.  

**Key Benefits**
- Cost-effective: Pay only for engagement.  
- Immediate traffic compared to SEO.  
- Precise audience targeting.  
- Improves brand visibility.  
- Provides measurable ROI data.  

**Popular Platforms**
- **Search:** Google Ads, Microsoft Ads.  
- **Social:** Facebook, Instagram, LinkedIn Ads.  
- **E-commerce:** Amazon Ads.
    `,
    features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'A/B Testing'],
    caseStudies: [
      { title: 'Google Ads', detail: 'Reduced CPC by 20% while increasing conversions by 30%.' },
      { title: 'Retargeting Ads', detail: 'Improved ROI by 50% for an e-commerce client.' }
    ],
    images: ['/ppc1.jpg', '/ppc2.webp'],
  },
  'google-my-business-setup': {
    title: 'Google My Business Setup',
    description: 'Helps businesses establish and optimize their presence on Google Maps and Google Search to improve local visibility.',
    fullDescription: `
Google My Business (GMB) Setup helps businesses create and manage their online presence on Google Search and Google Maps, making it easier for potential customers to find you.  

**Key Components of Google My Business Setup**
- **Profile Creation:** Set up your business profile with accurate information.  
- **Business Verification:** Ensure your business is verified for authenticity.  
- **Local SEO Optimization:** Optimize profile for relevant keywords and categories.  
- **Photos & Media:** Add images, videos, and virtual tours to engage users.  
- **Reviews & Reputation Management:** Collect and respond to customer reviews.  
- **Insights & Analytics:** Track profile performance and user interactions.  

**Why It Matters**
- Increases local visibility and discoverability.  
- Helps customers find essential information quickly.  
- Builds trust and credibility with verified business details.  
- Supports marketing and lead generation efforts.  

**How to Optimize Your GMB**
1. Claim and verify your business.  
2. Complete all profile details accurately.  
3. Add high-quality images and posts regularly.  
4. Encourage customer reviews and respond promptly.  
5. Monitor insights and optimize for better local search performance.
    `,
    features: ['Profile Creation', 'Local SEO Optimization', 'Photos & Media Management', 'Review Management'],
    caseStudies: [
      { title: 'Local Restaurant', detail: 'Increased local search visibility by 70% in 3 months.' },
      { title: 'Service Business', detail: 'Generated 50+ leads per month after optimization.' }
    ],
    images: ['/gg1.webp', '/gg2.jpg'],

  },
  'analytics-and-reporting': {
    title: 'Analytics & Reporting',
    description: 'Track your marketing performance.',
    fullDescription: `
Analytics and reporting turn raw data into insights. Reporting shows **what happened**; analytics explains **why it happened** and **what to do next**.  

**Reporting vs Analytics**
- **Reporting:** Summarizes past data, answers "what happened."  
- **Analytics:** Interprets data, answers "why" and "what’s next."  

**Importance**
- Drives better decisions.  
- Improves efficiency and productivity.  
- Enhances customer experience with personalization.  
- Provides competitive advantage with predictive insights.  
- Ensures accountability and transparency.  

**Implementation Steps**
1. Define goals & key questions.  
2. Collect and organize quality data.  
3. Use tools like Power BI, Tableau, Google Analytics.  
4. Perform descriptive to predictive analysis.  
5. Visualize with clear charts and dashboards.  
6. Tell a story with data, not just numbers.  
7. Automate reporting and refine regularly.
    `,
    features: ['Performance Tracking', 'Custom Dashboards', 'ROI Analysis', 'Competitor Analysis'],
    caseStudies: [
      { title: 'E-commerce Analytics', detail: 'Identified top-performing channels, increasing revenue by 35%.' }
    ],
    images: ['/ma1.webp', '/ma2.jpg'],
  },
  // Add other services here as needed...
};

const ServiceDetails: React.FC = () => {
  const { serviceSlug } = useParams();
  const service = serviceSlug ? serviceData[serviceSlug] : null;

  if (!service) {
    return <p className="text-center py-20 text-red-500 text-xl dark:text-white">Service not found!</p>;
  }

  return (
    <div className="container mx-auto px-6 py-20 pt-32">
      {/* Animated Back Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-20 inline-block mb-6"
      >
        <Link
          to="/services"
          className="bg-[#00C0A3] text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-[#00b891] transition-colors duration-300 text-xl"
        >
          ← Back to Services
        </Link>
      </motion.div>

      {/* Service Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#1B2A41] dark:text-white mb-8">{service.title}</h1>

      {/* Render fullDescription as Markdown */}
      <div className="prose max-w-none mb-8 text-lg md:text-xl dark:prose-invert">
        <ReactMarkdown
          components={{
            li: ({ children }) => (
              <li className="flex items-start space-x-2 text-lg md:text-xl dark:text-white">
                <span className="text-[#00C0A3] mt-1">•</span>
                <span>{children}</span>
              </li>
            ),
            strong: ({ children }) => <strong className="dark:text-white">{children}</strong>,
            p: ({ children }) => <p className="dark:text-white">{children}</p>,
            h1: ({ children }) => <h1 className="dark:text-white">{children}</h1>,
            h2: ({ children }) => <h2 className="dark:text-white">{children}</h2>,
            h3: ({ children }) => <h3 className="dark:text-white">{children}</h3>,
          }}
        >
          {service.fullDescription}
        </ReactMarkdown>
      </div>

      {/* Features */}
      <h2 className="text-3xl font-semibold text-[#1B2A41] dark:text-white mb-6">Key Features</h2>
      <ul className="list-disc ml-8 mb-10 space-y-3 text-lg md:text-xl dark:text-white">
        {service.features.map((feature: string, idx: number) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      {/* Case Studies */}
      {service.caseStudies?.length > 0 && (
        <>
          <h2 className="text-3xl font-semibold text-[#1B2A41] dark:text-white mb-6">Case Studies</h2>
          <div className="space-y-6 mb-10">
            {service.caseStudies.map((cs: any, idx: number) => (
              <div key={idx} className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1B2A41] dark:text-white">{cs.title}</h3>
                <p className="mt-2 dark:text-white">{cs.detail}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Images */}
      {service.images?.length > 0 && (
        <>
          <h2 className="text-3xl font-semibold text-[#1B2A41] dark:text-white mb-6">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.images.map((img: string, idx: number) => (
              <div key={idx} className="w-full flex justify-center">
                <img 
                  src={img} 
                  alt={`${service.title} example ${idx + 1}`} 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceDetails;