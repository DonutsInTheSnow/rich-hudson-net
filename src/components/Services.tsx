// components/Services.tsx
'use client';

import { CheckIcon } from '@heroicons/react/24/solid';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
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

interface Service {
  title: string;
  description: string;
  highlights: string[];
}

export default function Services() {
  const services: Service[] = [
    {
      title: 'Modern Static & React Websites',
      description:
        'Blazing-fast, SEO-friendly sites built with Next.js, React, TypeScript, and Tailwind CSS. Deployed on Vercel for top-tier performance and reliability.',
      highlights: [
        'Mobile-first responsive design',
        'Excellent Google PageSpeed scores (90-100)',
        'Clean, maintainable code',
        'Future-proof architecture',
      ],
    },
    {
      title: 'Dynamic Full-Stack Applications',
      description:
        'Custom web apps with server-side functionality using Node.js, Express, MongoDB, and Cloudinary for image management.',
      highlights: [
        'User authentication & dashboards',
        'Content management tools',
        'API integrations',
        'Secure and scalable',
      ],
    },
    {
      title: 'Site Modernization & Performance Upgrades',
      description:
        'Turn outdated or slow websites into fast, modern experiences that rank higher and convert better.',
      highlights: [
        'Legacy site migration',
        'Performance optimization',
        'SEO improvements (sitemaps, metadata, CSP)',
        'Accessibility enhancements',
      ],
    },
    {
      title: 'Ongoing Maintenance & Local Support',
      description:
        'Reliable updates, fixes, and improvements from someone right here in Wolfeboro — no endless support tickets or overseas teams.',
      highlights: [
        'Quick response times',
        'In-person meetings when needed',
        'Long-term partnerships',
        'Peace of mind',
      ],
    },
  ];

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Services</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            I build clean, fast, modern websites that help your business grow — using the latest tools and best practices.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckIcon className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-mono">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            <strong>Note:</strong> I work on lean, high performance solutions rather than bulky platforms like WordPress. My current focus is on static and dynamic React/Next.js sites. I have limited e-commerce experience (one small merch store), but I&apos;m actively exploring modern Next.js-based alternatives for local businesses wanting simple online sales.
          </p>

          <p className="text-center mt-8 text-xl font-medium text-gray-900">
            Ready for a site that loads fast, ranks well, and reflects your business?{' '}
            <Link
              href="/#contact"
              onClick={handleContactClick}
              className="text-green-600 hover:underline font-bold cursor-pointer"
            >
              Let&apos;s talk.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}