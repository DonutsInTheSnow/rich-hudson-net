// app/site-specs/page.tsx
'use client';

import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/solid';
import { motion, Variants } from 'framer-motion';

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // 400ms stagger between cards
    },
  },
};

const cardVariant: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function SiteSpecsPage() {
  return (
    <section className="py-20 border-t-amber-800 border-t-110 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Site Specs</h1>
          <p className="mt-4 text-xl text-gray-600">richhudson.net - A live example</p>
        </div>

        {/* Hero Image + Intro Text */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-96 rounded-xl overflow-hidden order-2 md:order-1">
            <Image
              src="/assets/img/site-specs.webp"
              alt="Screenshot of richhudson.net hero section"
              fill
              className="object-contain bg-gray-100 shadow-[inset_0_0_7px_2px_rgba(0,0,0,0.1)] p-5"
              priority
            />
          </div>

          {/* Intro Text */}
          <div className="text-xl max-w-none text-gray-700 space-y-6 order-1 md:order-2">
            <p>
              <strong>richhudson.net</strong> is my active portfolio, built to showcase the kind of fast, modern, high-performance website I can create for you.
            </p>

            <p>
              This site is designed to load instantly, rank well on Google, and convert visitors into inquiries.
            </p>

            <p>
              It uses modern tools that prioritize speed, SEO, and long-term maintainability over outdated or bloated platforms. It was built leveraging AI tools to generate some assets, like the landing page video, and to streamline development. 
            </p>

          </div>
        </div>

        {/* Animated Three Cards Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Tech Stack Card */}
          <motion.div
            variants={cardVariant}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tech Stack</h2>
            <ul className="space-y-4 font-mono">
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">Next.js 16 (App Router) with React and TypeScript</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">Tailwind CSS for responsive, utility-first styling</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">Framer Motion for subtle, performant animations</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">Sanity.io headless CMS for the blog</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">Web3Forms for secure, serverless contact handling</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">Deployed on Vercel for global edge delivery</span>
              </li>
            </ul>
          </motion.div>

          {/* Performance & SEO Card */}
          <motion.div
            variants={cardVariant}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance & SEO</h2>
            <ul className="space-y-4 font-mono">
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">Google PageSpeed scores consistently 90-100 (mobile & desktop)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">Optimized images, lazy loading, and minimal JavaScript</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">Semantic HTML, proper metadata, and structured data</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">Instant navigation and smooth scrolling</span>
              </li>
            </ul>
          </motion.div>

          {/* Features Card */}
          <motion.div
            variants={cardVariant}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
            <ul className="space-y-4 font-mono">
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">Full-screen AI-generated hero video background</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">Masonry testimonial grid with staggered reveal</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">Animated service cards and scroll-linked effects</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">Fully responsive — perfect on phones, tablets, and desktops</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">Local-focused content optimized for Wolfeboro & Lakes Region search</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}