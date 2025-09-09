// src/pages/Solution.tsx
import React from "react";
import { motion } from "framer-motion";

const Solution = () => {
  return (
    <section id="solution" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-16">
        <motion.h2
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 mt-12 text-black dark:text-white"
        >
            Digital Marketing Solutions
        </motion.h2>
        </div>


        {/* Section 1 */}
        <div className="py-10 md:py-14">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Text */}
            <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="w-full px-6 md:px-8 lg:w-1/2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-lg ring-1 ring-black/5 dark:ring-white/10 text-black dark:text-white"
            >

              <h3 className="text-2xl font-semibold mb-4">
                1. Market Trends Forecasting & Campaign Planning
              </h3>
              <ul className="list-disc list-inside mb-4">
                <li>Analyze historical performance, competitor activity, and real-time social trends to spot demand shifts.</li>
                <li>Identify high-impact channels and audiences with AI-driven segmentation and insights.</li>
                <li>Prioritize campaign opportunities and mitigate budget risks with predictive analytics.</li>
                <li>Build data-backed campaign plans with clear KPIs and expected ROI.</li>
              </ul>
              <h4 className="text-xl font-bold mb-2 mt-4">Powerful Marketing Intelligence Platform:</h4>
              <p className="mb-2">Use AI to unify ads, web, and social data for forecasting, channel selection, and budget planning.</p>
              <ul className="list-disc list-inside mb-4">
                <li>Capture — Aggregate multi-channel data (ads, web, CRM, social).</li>
                <li>Search — Surface contextual insights and competitor signals quickly.</li>
                <li>Analyze — Predict demand, audiences, and likely ROI by channel.</li>
                <li>Automate — Recommend budgets and pacing to maximize efficiency.</li>
              </ul>
              <h4 className="text-xl font-bold mb-2 mt-4">Features:</h4>
              <ul className="list-disc list-inside">
                <li>Trend detection across channels to anticipate campaign opportunities.</li>
                <li>Audience discovery and segmentation recommendations.</li>
                <li>No-code planning workflows with role-based access and approvals.</li>
                <li>Reduce planning cycles with automated briefs and KPI suggestions.</li>
                <li>Contextual search across past campaigns for inspiration and benchmarks.</li>
              </ul>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="w-full px-6 md:px-8 lg:w-1/2"
            >
              <div className="relative mx-auto aspect-[736/489] max-w-[590px] overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
                <img
                  src="/digital-01.jpg"
                  alt="about-image"
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="-mx-4 flex flex-wrap items-center py-10 md:py-14">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="w-full px-6 md:px-8 lg:w-1/2"
          >
            <div className="relative mx-auto mb-6 aspect-[736/489] max-w-[590px] text-center overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
              <img
                src="/digital-03.png"
                alt="about image"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="w-full px-6 md:px-8 lg:w-1/2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-lg ring-1 ring-black/5 dark:ring-white/10 text-black dark:text-white"
            >

            <h3 className="text-2xl font-semibold mb-4">
              2. AI-Assisted Creative & Content
            </h3>
            <ul className="list-disc list-inside mb-4">
              <li>Generate ad copy, headlines, and variations aligned to audience personas.</li>
              <li>Create and adapt creatives at scale while maintaining brand consistency.</li>
              <li>Streamline approvals with human-in-the-loop edits and versioning.</li>
              <li>Reduce time-to-launch with automated briefs and asset recommendations.</li>
            </ul>
            <h4 className="text-xl font-bold mb-2 mt-4">Powerful AI Creative Platform:</h4>
            <p className="mb-2">Leverage AI to produce on-brand assets and copy variations tailored to channels and audiences.</p>
            <ul className="list-disc list-inside mb-4">
              <li>Capture — Centralize brand guidelines, assets, tone, and examples.</li>
              <li>Search — Retrieve past top-performers and relevant references instantly.</li>
              <li>Analyze — Score copy/creatives against goals and audience preferences.</li>
              <li>Automate — Generate variants and resize/adapt assets across platforms.</li>
            </ul>
            <h4 className="text-xl font-bold mb-2 mt-4">Features:</h4>
            <ul className="list-disc list-inside">
              <li>On-brand content generation with governance and approvals.</li>
              <li>Variant testing at scale across headlines, CTAs, and visuals.</li>
              <li>Semantic search across creative libraries and performance data.</li>
              <li>No-code workflows to brief, generate, review, and publish.</li>
              <li>Continuous learning from performance feedback to improve outputs.</li>
            </ul>
          </motion.div>
        </div>

        {/* Section 3 */}
        <div className="py-10 md:py-14">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Text */}
            <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="w-full px-6 md:px-8 lg:w-1/2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-lg ring-1 ring-black/5 dark:ring-white/10 text-black dark:text-white"
            >

              <h3 className="text-2xl font-semibold mb-4">
                3. Campaign Merchandising & Performance Analysis
              </h3>
              <ul className="list-disc list-inside mb-4">
                <li>Consolidate cross-channel metrics (ads, email, social, web) for a unified view.</li>
                <li>Forecast performance and allocate budget dynamically to best-performing assets.</li>
                <li>Identify optimization opportunities and reduce wasted spend.</li>
                <li>Automate reporting with insights and recommended next actions.</li>
              </ul>
              <h4 className="text-xl font-bold mb-2 mt-4">Powerful Campaign Intelligence Platform:</h4>
              <p className="mb-2">AI unifies marketing data to optimize budget, creative, and audience strategy in real time.</p>
              <h4 className="text-xl font-bold mb-2 mt-4">Features:</h4>
              <ul className="list-disc list-inside">
                <li>Multi-source data consolidation and normalization.</li>
                <li>Real-time dashboards with anomaly and opportunity detection.</li>
                <li>Budget pacing and bid strategy recommendations.</li>
                <li>Automated reporting with goal tracking and alerts.</li>
              </ul>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="w-full px-6 md:px-8 lg:w-1/2"
            >
              <div className="relative mx-auto aspect-[736/489] max-w-[590px] overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
                <img
                  src="/digital-06.png"
                  alt="about-image"
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="-mx-4 flex flex-wrap items-center py-10 md:py-14">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="w-full px-6 md:px-8 lg:w-1/2"
          >
            <div className="relative mx-auto mb-6 aspect-[736/489] max-w-[590px] text-center overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
              <img
                src="/digital-07.png"
                alt="about image"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="w-full px-6 md:px-8 lg:w-1/2 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-lg ring-1 ring-black/5 dark:ring-white/10 text-black dark:text-white"
            >

            <h3 className="text-2xl font-semibold mb-4">
              4. SEO & Content Research Automation
            </h3>
            <ul className="list-disc list-inside mb-4">
              <li>Accelerate keyword research and topic clustering.</li>
              <li>Empower content teams with briefs and outlines.</li>
              <li>Intelligent monitoring of rankings and competitor moves.</li>
              <li>Reduce costs with automation across research to publication.</li>
            </ul>
            <h4 className="text-xl font-bold mb-2 mt-4">Powerful SEO & Content Platform:</h4>
            <p className="mb-2">Use AI to extract opportunities, generate briefs, and monitor performance end to end.</p>
            <ul className="list-disc list-inside mb-4">
              <li>Capture — Crawl SERPs, competitor content, and analytics.</li>
              <li>Search — Contextual exploration of topics, intent, and gaps.</li>
                            <li>Analyze — Score difficulty, intent, and expected impact.</li>
              <li>Automate — Generate briefs and track outcomes automatically.</li>
            </ul>
            <h4 className="text-xl font-bold mb-2 mt-4">Features:</h4>
            <ul className="list-disc list-inside">
              <li>Rapid keyword/topic clustering with intent mapping.</li>
              <li>End-to-end workflow from research to brief to publish.</li>
              <li>No-code configuration, semantic understanding for topic relevance.</li>
              <li>Automated QA to reduce content errors and ensure brand alignment.</li>
              <li>Continuous learning loop with performance-driven updates.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
