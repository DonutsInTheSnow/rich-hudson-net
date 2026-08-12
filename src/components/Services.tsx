
// components/Services.tsx
'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
// import Link from 'next/link';

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
}

export default function Services() {
  const portfolio: PortfolioItem[] = [
    {
      title: "Louis' Pizza",
      category: 'Restaurant',
      description:
        'A welcoming, easy-to-use website for a longtime Wolfeboro pizza restaurant.',
      image: '/assets/img/portfolio/louis-pizza.webp',
      url: 'https://www.louis-pizza.com/',
    },
    {
      title: "DJ's Septic Pumping",
      category: 'Local Service Business',
      description:
        'A straightforward website designed to help local customers quickly find services and contact information.',
      image: '/assets/img/portfolio/djs-septic.webp',
      url: 'https://djssepticpumping.com/',
    },
    {
      title: 'Dr. Richard Neal',
      category: 'Professional Practice',
      description:
        'A professional website providing patients with clear information about the practice and its services.',
      image: '/assets/img/portfolio/dr-richard-neal.webp',
      url: 'https://drrichardneal.com/',
    },
    {
      title: 'NHASH',
      category: 'Professional Trade Association',
      description:
        'An information-rich website for New Hampshire Association of Setpage Haulers.',
      image: '/assets/img/portfolio/nhash.webp',
      url: 'https://nhash.com/',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Websites I&apos;ve Built
          </h2>

          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            From mom-and-pop pizza shops and condominium communities to land conservation nonprofits and professional trade associations, I build websites for the people and organizations that make our local communities work.
          </p>
        </div>

        {/* Portfolio cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {portfolio.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariant}
              className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Screenshot */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} website`}
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} website`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>
              </a>

              {/* Card content */}
              <div className="p-7">
                <p className="text-sm font-semibold uppercase tracking-wide text-green-600 mb-2">
                  {project.category}
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-700 mb-5">
                  {project.description}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-green-600 hover:text-blue-600 transition-colors"
                >
                  View Website →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio CTA */}
        {/* <div className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="text-lg font-semibold text-gray-700 underline hover:text-green-600 transition-colors"
          >
            See more of my work →
          </Link>
        </div> */}

      </div>
    </section>
  );
}