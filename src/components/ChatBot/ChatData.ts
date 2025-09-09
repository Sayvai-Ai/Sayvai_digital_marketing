// src/components/ChatBot/chatData.ts
export interface QA {
  intent: string;
  questions: string[];
  answer: string;
}

// src/components/ChatBot/chatData.ts
export const chatData: QA[] = [
  {
    intent: "greeting_general",
    questions: ["hi", "hello", "hey"],
    answer: "Hello! How can I help you with digital marketing today?"
  },
  {
    intent: "greeting_morning",
    questions: ["good morning", "morning"],
    answer: "Good morning! Ready to boost your digital marketing today?"
  },
  {
    intent: "greeting_afternoon",
    questions: ["good afternoon", "afternoon"],
    answer: "Good afternoon! How can I help you with your marketing goals?"
  },
  {
    intent: "greeting_evening",
    questions: ["good evening", "evening"],
    answer: "Good evening! Need help with your digital campaigns?"
  },
  {
    intent: "greeting_night",
    questions: ["good night", "night"],
    answer: "Good night! Don’t forget to plan tomorrow’s marketing strategy 🙂"
  },
  {
    intent: "thanks",
    questions: ["thanks", "thank you", "thx", "thanks a lot", "thank you very much"],
    answer: "You're welcome! 🙂"
  },
  {
  intent: "services_provided",
  questions: [
    "what services do you provide?", 
    "services offered", 
    "list your services", 
    "digital marketing services", 
    "services you offer", 
    "show your services", 
    "company services", 
    "services list", 
    "marketing services provided", 
    "tell me your services"
  ],
  answer: "We provide a wide range of digital marketing services including SEO, Social Media Marketing (Facebook, Instagram, LinkedIn, TikTok, YouTube), PPC, Email Marketing, Content Marketing, Video Marketing, Branding, Influencer Marketing, Affiliate Marketing, Marketing Automation, CRM Solutions, Webinars, Growth Hacking, Retargeting Ads, Omnichannel Marketing, Lead Generation, Website Optimization, Landing Page & Blog Marketing, Mobile & App Marketing, Local SEO, E-commerce Marketing, and more."
  },
  {
  intent: "farewell",
  questions: [
    "bye",
    "goodbye",
    "see you",
    "see you later",
    "talk to you later",
    "catch you later",
    "farewell",
    "have a good day",
    "take care",
    "see you soon"
  ],
  answer: "Goodbye! 👋 Have a great day! Feel free to reach out anytime for your digital marketing needs."
},
{
  intent: "bot_identity",
  questions: [
    "who are you?",
    "what is your name?",
    "introduce yourself",
    "tell me about you",
    "are you a bot?",
    "what do you do?"
  ],
  answer: "Hello! I am Sayvai Bot, your digital marketing assistant. I can help you with SEO, social media, PPC, content marketing, and more!"
},
{
  intent: "bot_capabilities",
  questions: [
    "what can you do?", 
    "how can you help me?", 
    "services you provide as bot", 
    "assist me with marketing?", 
    "digital marketing help"
  ],
  answer: "I can answer queries about digital marketing services, provide tips for SEO, social media, PPC, content marketing, and help guide you to the right solutions."
},
{
  intent: "bot_availability",
  questions: [
    "are you available 24/7?", 
    "can i chat anytime?", 
    "working hours", 
    "when are you online?", 
    "support timing"
  ],
  answer: "Yes! I am available 24/7 to help you with all your digital marketing questions."
},
{
  intent: "bot_language",
  questions: [
    "which languages do you speak?", 
    "can you speak english?", 
    "other languages", 
    "do you understand other languages?"
  ],
  answer: "Currently, I can communicate in English. We may add more languages soon!"
},
{
  intent: "bot_humor",
  questions: [
    "tell me a joke", 
    "make me laugh", 
    "funny bot", 
    "do you know jokes?", 
    "say something funny"
  ],
  answer: "Why did the marketer break up with the calendar? Because their days were numbered! 😄"
},
{
  intent: "bot_personality",
  questions: [
    "are you friendly?", 
    "do you have feelings?", 
    "are you smart?", 
    "are you human?", 
    "personality"
  ],
  answer: "I am friendly, helpful, and always learning to provide the best digital marketing guidance! 🤖"
},
{
  intent: "connect_query",
  questions: [
    "how can i connect you",
    "how do i contact you",
    "how can i reach you",
    "how do i connect with you",
    "can i connect with you",
    "how to reach you"
  ],
  answer: "You can connect with us anytime through our Contact page, email (support@savyai.com), or call us directly. We're here to help!"
},
{
    intent: "seo_query",
    questions: ["what is seo?", "tell me about seo", "how does seo work?", "seo explanation", "search engine optimization info", "can you explain seo?", "seo tips", "seo techniques", "seo services", "how to do seo?"],
    answer: "SEO (Search Engine Optimization) helps your website rank higher on search engines. We provide complete SEO services."
  },
  {
    intent: "onpage_seo",
    questions: ["what is on-page seo?", "on-page optimization", "onpage seo tips", "seo content optimization", "meta tags seo"],
    answer: "On-page SEO optimizes your website content and HTML source code to improve search rankings."
  },
  {
    intent: "offpage_seo",
    questions: ["off-page seo", "what is off-page seo?", "backlinking seo", "link building strategies", "seo off-site tips"],
    answer: "Off-page SEO involves actions outside your website like backlinks and social signals to improve rankings."
  },
  {
    intent: "technical_seo",
    questions: ["technical seo", "seo site speed", "seo crawl optimization", "seo index issues", "website seo errors"],
    answer: "Technical SEO ensures your website is crawlable, fast, and structured for search engines."
  },
  {
    intent: "social_media_query",
    questions: ["social media marketing", "what is smm?", "smm tips", "how to do smm?", "social media strategies", "smm services", "explain social media marketing", "smm campaign", "social media promotion", "smm marketing"],
    answer: "Social Media Marketing promotes your brand on platforms like Facebook, Instagram, LinkedIn, and more."
  },
  {
    intent: "facebook_marketing",
    questions: ["facebook marketing", "facebook ads tips", "promote on facebook", "facebook campaigns", "facebook business page"],
    answer: "Facebook marketing involves creating ads and content to engage audiences and increase conversions."
  },
  {
    intent: "instagram_marketing",
    questions: ["instagram marketing", "promote on instagram", "instagram growth tips", "instagram reels marketing", "instagram ads"],
    answer: "Instagram marketing uses posts, stories, reels, and ads to engage your audience and grow your brand."
  },
  {
    intent: "linkedin_marketing",
    questions: ["linkedin marketing", "linkedin company page tips", "linkedin content strategy", "linkedin ads", "linkedin b2b marketing"],
    answer: "LinkedIn marketing is ideal for B2B strategies, professional branding, and connecting with clients."
  },
  {
    intent: "tiktok_marketing",
    questions: ["tiktok marketing", "promote on tiktok", "tiktok ads tips", "tiktok growth", "tiktok reels marketing"],
    answer: "TikTok marketing engages audiences using short-form videos, trends, and influencer campaigns."
  },
  {
    intent: "youtube_marketing",
    questions: ["youtube marketing", "promote on youtube", "youtube ads", "video marketing tips", "youtube channel growth"],
    answer: "YouTube marketing uses video content, ads, and SEO to increase visibility and engagement."
  },
  {
    intent: "ppc_query",
    questions: ["what is ppc?", "pay per click advertising", "google ads", "how does ppc work?", "ppc campaigns", "paid ads tips", "advertising with ppc", "ppc marketing", "facebook ads info", "bing ads tips"],
    answer: "PPC (Pay-Per-Click) advertising drives traffic to your website by paying for ad clicks. We manage effective PPC campaigns."
  },
  {
    intent: "email_marketing_query",
    questions: ["what is email marketing?", "email campaign tips", "newsletter marketing", "how to do email marketing?", "email automation", "email marketing services", "send marketing emails", "email marketing strategies", "email list building", "email personalization tips"],
    answer: "Email Marketing helps you reach your audience directly through personalized emails. We design and automate effective campaigns."
  },
  {
    intent: "content_marketing_query",
    questions: ["what is content marketing?", "content strategy", "blog marketing", "content creation tips", "how to do content marketing?", "content marketing services", "digital content marketing", "content promotion", "content planning", "long-form content strategy"],
    answer: "Content Marketing focuses on creating and distributing valuable content to attract and engage your audience."
  },
  {
    intent: "video_marketing_query",
    questions: ["video marketing tips", "how to promote videos?", "youtube marketing", "video content strategy", "social media videos", "video ads", "video content ideas", "short-form videos", "reels marketing", "video campaigns"],
    answer: "Video Marketing engages audiences effectively. We create and promote high-quality videos for your brand."
  },
  {
    intent: "branding_query",
    questions: ["what is branding?", "brand strategy", "how to improve brand image?", "digital branding", "brand marketing", "branding services", "brand identity", "brand awareness", "brand reputation", "branding tips"],
    answer: "Branding strengthens your company’s identity. We help create a consistent and strong online brand presence."
  },
  {
    intent: "analytics_query",
    questions: ["what is digital marketing analytics?", "track website traffic", "google analytics tips", "how to measure marketing performance?", "digital metrics", "marketing KPIs", "analytics tools", "performance tracking", "data-driven marketing", "campaign analytics"],
    answer: "Digital Marketing Analytics helps track and measure your campaigns. We provide insights to improve ROI and performance."
  },
  {
    intent: "influencer_marketing",
    questions: ["influencer marketing", "collaborate with influencers", "social media influencers", "influencer campaigns", "influencer strategy"],
    answer: "Influencer Marketing leverages popular personalities to promote your brand to their audience."
  },
  {
    intent: "affiliate_marketing",
    questions: ["affiliate marketing", "partner marketing", "promote via affiliates", "affiliate programs", "how does affiliate marketing work?"],
    answer: "Affiliate Marketing uses partners or affiliates to promote your products in exchange for commissions."
  },
  {
    intent: "marketing_automation",
    questions: ["marketing automation", "automated campaigns", "email workflow automation", "crm automation", "how to automate marketing?"],
    answer: "Marketing Automation uses software to automate repetitive tasks like emails, social media posting, and ad campaigns."
  },
  {
    intent: "crm_tools",
    questions: ["crm tools", "customer relationship management", "crm software", "how to manage leads?", "best crm for marketing"],
    answer: "CRM tools help manage customer interactions, track leads, and improve customer relationships."
  },
  {
    intent: "webinars_marketing",
    questions: ["webinar marketing", "promote webinars", "webinar campaign", "online seminar marketing", "how to host a webinar?"],
    answer: "Webinars are online seminars used for lead generation, engagement, and showcasing expertise."
  },
  {
    intent: "growth_hacking",
    questions: ["growth hacking", "growth marketing strategies", "how to grow quickly?", "viral marketing techniques", "startup marketing tips"],
    answer: "Growth Hacking uses creative, low-cost strategies to help businesses grow rapidly."
  },
  {
    intent: "retargeting_ads",
    questions: ["retargeting ads", "remarketing campaigns", "how to do retargeting?", "retargeting strategy", "ads for previous visitors"],
    answer: "Retargeting Ads show ads to users who visited your site but didn’t convert, increasing chances of conversion."
  },
  {
    intent: "omnichannel_marketing",
    questions: ["omnichannel marketing", "multi-channel marketing", "integrated marketing strategy", "cross-channel campaigns", "omnichannel strategy"],
    answer: "Omnichannel Marketing provides a seamless customer experience across multiple platforms and channels."
  },
  {
    intent: "lead_generation",
    questions: ["lead generation", "how to generate leads?", "lead capture", "lead funnels", "prospective customer acquisition"],
    answer: "Lead Generation attracts and converts visitors into potential customers through forms, offers, and campaigns."
  },
  {
    intent: "website_optimization",
    questions: ["website optimization", "improve website speed", "mobile optimization", "ux improvements", "conversion rate optimization"],
    answer: "Website Optimization enhances user experience, speed, and conversion rates to boost digital marketing results."
  },
  {
    intent: "landing_page_marketing",
    questions: ["landing page marketing", "landing page tips", "optimize landing page", "landing page design", "high conversion landing page"],
    answer: "Landing Pages are designed to convert visitors into leads or customers through targeted content and calls-to-action."
  },
  {
    intent: "blog_marketing",
    questions: ["blog marketing", "promote blog posts", "blog seo tips", "increase blog traffic", "content marketing via blog"],
    answer: "Blog Marketing increases visibility and engagement through valuable, SEO-optimized articles."
  },
  {
    intent: "infographics_marketing",
    questions: ["infographics marketing", "promote infographics", "visual content marketing", "infographic strategy", "shareable graphics"],
    answer: "Infographics Marketing uses visual content to engage audiences and explain complex topics clearly."
  },
  {
    intent: "podcast_marketing",
    questions: ["podcast marketing", "promote podcasts", "podcast campaigns", "audio content marketing", "podcast advertising"],
    answer: "Podcast Marketing helps reach audiences through audio content, sponsorships, and podcast promotion."
  },
  {
    intent: "mobile_marketing",
    questions: ["mobile marketing", "sms marketing", "app promotion", "mobile ads", "push notifications marketing"],
    answer: "Mobile Marketing reaches users on smartphones via apps, SMS, push notifications, and mobile ads."
  },
  {
    intent: "local_seo",
    questions: ["local seo", "local search optimization", "google my business tips", "rank locally", "local business seo"],
    answer: "Local SEO improves your visibility for searches in your local area and helps attract nearby customers."
  },
  {
    intent: "ecommerce_marketing",
    questions: ["ecommerce marketing", "online store promotion", "shopify marketing", "ecommerce seo", "sell online marketing"],
    answer: "Ecommerce Marketing promotes your online store through SEO, ads, content, and social media strategies."
  },
 {
    intent: "snapchat_marketing",
    questions: ["snapchat marketing", "promote on snapchat", "snap ads", "snapchat campaigns", "snapchat content tips"],
    answer: "Snapchat marketing uses short-lived content and ads to engage younger audiences effectively."
  },
  {
    intent: "pinterest_marketing",
    questions: ["pinterest marketing", "promote on pinterest", "pinterest boards", "pinterest ads", "visual marketing pinterest"],
    answer: "Pinterest Marketing leverages pins, boards, and ads to drive traffic and engagement for visual content."
  },
  {
    intent: "conversion_rate_optimization",
    questions: ["CRO", "conversion rate optimization", "increase website conversions", "improve landing page conversion", "optimize sales funnel"],
    answer: "Conversion Rate Optimization improves the percentage of visitors who complete desired actions on your website."
  },
  {
    intent: "marketing_funnel",
    questions: ["marketing funnel", "sales funnel", "lead funnel", "funnel optimization", "customer journey funnel"],
    answer: "Marketing Funnels guide potential customers from awareness to purchase, optimizing each stage for conversions."
  },
  {
    intent: "customer_retention",
    questions: ["customer retention", "increase loyalty", "repeat customers", "retain clients", "customer retention strategies"],
    answer: "Customer Retention focuses on keeping existing customers engaged and increasing lifetime value."
  },
  {
    intent: "loyalty_programs",
    questions: ["loyalty programs", "reward programs", "customer loyalty tips", "points system marketing", "membership marketing"],
    answer: "Loyalty Programs encourage repeat purchases and strengthen customer relationships through rewards."
  },
  {
    intent: "ad_copywriting",
    questions: ["ad copy tips", "write ad content", "advertising copywriting", "marketing text tips", "effective ad writing"],
    answer: "Ad Copywriting creates compelling messages to attract and persuade your target audience effectively."
  },
  {
    intent: "landing_page_design",
    questions: ["landing page tips", "optimize landing page design", "high converting landing pages", "design for leads", "landing page best practices"],
    answer: "Landing Page Design focuses on layout, content, and calls-to-action to maximize conversions."
  },
  {
    intent: "ai_marketing_tools",
    questions: ["ai marketing", "ai tools for marketing", "artificial intelligence marketing", "ai automation", "ai content creation"],
    answer: "AI Marketing Tools automate campaigns, create content, analyze data, and optimize marketing performance efficiently."
  },
  {
    intent: "chatbot_marketing",
    questions: ["chatbot marketing", "ai chatbot for website", "automated customer support", "chatbot campaigns", "marketing chatbot tips"],
    answer: "Chatbot Marketing uses AI chatbots to engage users, answer queries, and generate leads automatically."
  },
  {
    intent: "remarketing_google",
    questions: ["google remarketing", "google ads retargeting", "display ads retargeting", "how to retarget users", "google ads remarketing tips"],
    answer: "Google Remarketing shows targeted ads to users who have previously visited your website, increasing conversions."
  },
  {
    intent: "remarketing_facebook",
    questions: ["facebook retargeting", "fb remarketing ads", "facebook ad campaigns", "re-engage visitors facebook", "fb remarketing strategies"],
    answer: "Facebook Remarketing targets previous website visitors or engaged users to boost conversion rates."
  },
  {
    intent: "retention_emails",
    questions: ["retention email campaigns", "customer retention emails", "email follow-up tips", "email nurture campaigns", "email drip campaigns"],
    answer: "Retention Emails engage existing customers, encouraging repeat purchases and maintaining relationships."
  },
  {
    intent: "crm_automation",
    questions: ["crm automation", "customer relationship automation", "automate client management", "crm workflow automation", "marketing crm tips"],
    answer: "CRM Automation streamlines customer management, automates communication, and improves marketing efficiency."
  },
  {
    intent: "influencer_collaboration",
    questions: ["influencer collaboration", "partner with influencers", "influencer strategy", "social influencer campaign", "micro influencer marketing"],
    answer: "Influencer Collaboration partners with relevant personalities to amplify your brand reach and credibility."
  },
  {
    intent: "affiliate_program_setup",
    questions: ["setup affiliate program", "affiliate marketing setup", "partner program setup", "create affiliate campaign", "affiliate tracking"],
    answer: "Affiliate Program Setup enables others to promote your products for commissions, increasing sales and reach."
  },
  {
    intent: "blog_seo",
    questions: ["blog seo tips", "optimize blog posts", "blog search ranking", "seo for articles", "content optimization seo"],
    answer: "Blog SEO optimizes articles for search engines, improving visibility and attracting organic traffic."
  },
  {
    intent: "landing_page_seo",
    questions: ["landing page seo", "seo for landing page", "optimize page for search", "seo best practices landing page", "landing page search ranking"],
    answer: "Landing Page SEO ensures that your landing pages are optimized for keywords and search visibility."
  },
  {
    intent: "voice_search_seo",
    questions: ["voice search seo", "optimize for voice search", "speakable seo", "voice assistant optimization", "seo for siri alexa"],
    answer: "Voice Search SEO optimizes your content to appear in voice assistant results like Siri, Alexa, and Google Assistant."
  },
  {
    intent: "local_business_ads",
    questions: ["local ads", "local business promotion", "geo-targeted ads", "local google ads", "ads for nearby customers"],
    answer: "Local Business Ads target users in a specific geographic area, increasing local foot traffic and sales."
  },
  {
    intent: "shopify_marketing",
    questions: ["shopify marketing", "promote shopify store", "shopify seo", "shopify ads", "ecommerce store promotion"],
    answer: "Shopify Marketing promotes your online store using SEO, ads, content, and social media strategies."
  },
  {
    intent: "woocommerce_marketing",
    questions: ["woocommerce marketing", "promote woocommerce store", "woocommerce ads", "woocommerce seo", "ecommerce marketing woo"],
    answer: "WooCommerce Marketing boosts your online store performance through digital campaigns, SEO, and social media promotion."
  },
  {
    intent: "app_marketing",
    questions: ["app marketing", "promote mobile app", "app store optimization", "app ads", "mobile app campaigns"],
    answer: "App Marketing promotes mobile apps via app store optimization, ads, and social campaigns to increase downloads."
  },
  {
    intent: "push_notification_marketing",
    questions: ["push notification marketing", "app notifications", "push campaigns", "mobile notification marketing", "user engagement notifications"],
    answer: "Push Notification Marketing engages users through timely notifications, increasing retention and conversions."
  },
  {
    intent: "sms_marketing",
    questions: ["sms marketing", "text message campaigns", "sms promotion", "send marketing sms", "sms advertising"],
    answer: "SMS Marketing sends promotional messages to users’ phones to drive engagement and conversions."
  },
  {
    intent: "online_reputation",
    questions: ["online reputation management", "brand reputation online", "manage reviews", "improve online image", "reputation monitoring"],
    answer: "Online Reputation Management monitors and improves your brand image across reviews, social media, and search results."
  },
  {
    intent: "google_my_business",
    questions: ["google my business", "gmb optimization", "local seo google business", "manage business listing", "google business tips"],
    answer: "Google My Business helps your business appear in local search and maps, improving local visibility."
  },
  {
    intent: "marketing_trends",
    questions: ["latest marketing trends", "digital marketing trends", "emerging marketing strategies", "current marketing trends", "top digital trends"],
    answer: "Marketing Trends highlight emerging strategies, tools, and platforms to stay ahead in digital marketing."
  },
  {
    intent: "marketing_tools",
    questions: ["best marketing tools", "digital marketing software", "tools for seo", "tools for social media", "marketing automation tools"],
    answer: "Marketing Tools like HubSpot, SEMrush, Ahrefs, and Hootsuite help plan, automate, and analyze campaigns."
  },
  {
    intent: "content_calendar",
    questions: ["content calendar", "social media calendar", "marketing content schedule", "plan content posts", "content posting plan"],
    answer: "Content Calendar helps schedule, organize, and plan content across all digital channels effectively."
  },
  {
    intent: "competitor_analysis",
    questions: ["competitor analysis", "analyze competition", "competitive research", "competitor marketing strategy", "market research tools"],
    answer: "Competitor Analysis helps you understand competitors’ strategies and improve your marketing campaigns."
  },
  {
    intent: "customer_persona",
    questions: ["customer persona", "define target audience", "ideal customer profile", "buyer persona", "marketing persona"],
    answer: "Customer Persona defines your ideal audience to create targeted and effective marketing campaigns."
  },
  {
    intent: "a_b_testing",
    questions: ["a/b testing", "split testing", "test marketing variations", "conversion optimization testing", "landing page test"],
    answer: "A/B Testing compares different versions of content or ads to see which performs better."
  },
  {
    intent: "utm_tracking",
    questions: ["utm tracking", "track marketing campaigns", "utm parameters", "google analytics tracking", "campaign source medium"],
    answer: "UTM Tracking adds parameters to URLs to measure campaign performance in analytics."
  },
  {
    intent: "remarketing_strategy",
    questions: ["remarketing strategy", "retargeting campaign ideas", "how to retarget users", "remarketing tips", "retargeting best practices"],
    answer: "Remarketing Strategy targets users who previously engaged, bringing them back to convert."
  },
  {
    intent: "roi_calculation",
    questions: ["calculate marketing roi", "return on investment digital marketing", "measure campaign effectiveness", "marketing roi formula", "roi tips"],
    answer: "ROI Calculation measures the return on marketing spend to evaluate campaign performance."
  },
  {
    intent: "content_curating",
    questions: ["content curating", "find relevant content", "share curated content", "curated marketing content", "content curation tips"],
    answer: "Content Curating shares relevant content from multiple sources to engage your audience and establish authority."
  },
  {
    intent: "viral_marketing",
    questions: ["viral marketing tips", "how to make content viral", "viral campaign strategy", "viral content marketing", "shareable content ideas"],
    answer: "Viral Marketing creates highly shareable content to quickly increase brand reach."
  },
  {
    intent: "user_generated_content",
    questions: ["ugc marketing", "user generated content", "ugc campaigns", "customer content marketing", "promote user content"],
    answer: "User-Generated Content uses content created by customers to build trust and engagement."
  },
  {
    intent: "gamification_marketing",
    questions: ["gamification in marketing", "marketing games", "engage users gamification", "game-based campaigns", "interactive marketing ideas"],
    answer: "Gamification Marketing adds game elements to campaigns to increase engagement and user interaction."
  },
  {
    intent: "micro_moments",
    questions: ["micro moments marketing", "instant marketing", "quick engagement strategy", "mobile micro-moments", "target small interactions"],
    answer: "Micro-Moments target users with quick, intent-driven interactions on mobile devices to influence decisions."
  },
  {
    intent: "programmatic_ads",
    questions: ["programmatic advertising", "automated ad buying", "programmatic campaigns", "ai ads buying", "real-time bidding ads"],
    answer: "Programmatic Ads use AI and automation to buy ads in real-time for efficient targeting."
  },
  {
    intent: "affiliate_tracking",
    questions: ["affiliate tracking tools", "track affiliate sales", "affiliate software", "monitor partners", "affiliate analytics"],
    answer: "Affiliate Tracking monitors partner performance, sales, and commissions in your affiliate program."
  },
  {
    intent: "cross_channel_marketing",
    questions: ["cross-channel marketing", "multi-channel campaigns", "integrated marketing", "cross platform strategy", "marketing across channels"],
    answer: "Cross-Channel Marketing ensures consistent messaging across multiple platforms to improve engagement."
  },
  {
    intent: "customer_feedback",
    questions: ["customer feedback", "collect reviews", "feedback surveys", "customer opinions", "customer satisfaction surveys"],
    answer: "Customer Feedback helps improve products, services, and marketing campaigns based on real user input."
  },
  {
    intent: "interactive_content",
    questions: ["interactive content marketing", "quizzes marketing", "polls for engagement", "interactive campaigns", "engage users with content"],
    answer: "Interactive Content engages users actively, making campaigns more memorable and shareable."
  },
  {
    intent: "remarketing_email",
    questions: ["email remarketing", "follow up emails", "retarget via email", "email retargeting tips", "email re-engagement campaigns"],
    answer: "Email Remarketing re-engages previous visitors or customers with targeted emails to increase conversions."
  },
  {
    intent: "customer_journey_mapping",
    questions: ["customer journey", "map buyer journey", "customer experience map", "user journey", "purchase path analysis"],
    answer: "Customer Journey Mapping visualizes the steps customers take from awareness to conversion to optimize marketing touchpoints."
  },
  {
    intent: "brand_storytelling",
    questions: ["brand storytelling", "story marketing", "narrative marketing", "brand story tips", "storytelling campaigns"],
    answer: "Brand Storytelling creates emotional connections through compelling narratives that resonate with your audience."
  },
  {
    intent: "interactive_ads",
    questions: ["interactive ads", "clickable ads", "engaging ads", "interactive marketing campaigns", "ads that users interact with"],
    answer: "Interactive Ads increase user engagement by allowing them to participate directly in the ad experience."
  },
  {
    intent: "ugc_campaigns",
    questions: ["user generated content campaigns", "ugc promotion", "customer content campaigns", "ugc marketing ideas", "ugc strategy"],
    answer: "UGC Campaigns encourage users to create content around your brand, increasing trust and reach."
  },
  {
    intent: "chatbot_lead_generation",
    questions: ["chatbot leads", "generate leads via chatbot", "lead capturing bot", "ai chatbot marketing", "chatbot for business"],
    answer: "Chatbots can capture leads automatically, answer FAQs, and guide users through sales funnels."
  }
];
