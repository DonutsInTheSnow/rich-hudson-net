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
      title: 'Modern Static Websites',
      description:
        'Blazing-fast, SEO-optimized static sites built with clean HTML, CSS, and JavaScript. Hosted on GoDaddy for reliable, high-performance delivery.',
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
        'Content management & admin tools',
        'Secure and scalable',
        'Modern React/Next.js stacks when the project calls for it',
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

      const isMobile = window.innerWidth < 768;

      window.scrollTo({
        top: elementPosition,
        behavior: isMobile ? 'auto' :'smooth',
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Services</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Lightweight, high-performance websites tailored to your needs — using only the minimal tech stack required for speed, clean code, and strong search rankings. No unnecessary frameworks or bloat. Proven results: mobile scores jumping from the 50s to 90s.
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
            <strong>Specializing in</strong> lean, high-performance solutions. Prioritizing clean HTML/CSS/JS for speed, SEO, and simplicity. For e-commerce, Shopify (with custom app experience) to deliver straightforward online sales for local businesses.
          </p>

          <p className="mt-8 text-xl max-w-3xl mx-auto font-semibold text-gray-700">
            Ready for a site that loads fast, ranks well, and reflects your business? I can offer you web options that fit your business and your budget. {' '}
            <Link
              href="/#contact"
              onClick={handleContactClick}
              className="text-green-600 underline hover:text-blue-600 font-bold cursor-pointer"
            >
              Let&apos;s talk.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}