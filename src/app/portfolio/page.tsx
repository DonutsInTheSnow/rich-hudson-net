import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Rich Hudson Web Design',
  description:
    'A selection of websites I have designed and built for local businesses, nonprofits, professional organizations, and individuals in New Hampshire.',
};

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'The Already Ghosts',
    category: 'Musician / Creative',
    description:
      'A distinctive website for a Wolfeboro musician, featuring an immersive opening experience that transitions from a simple landing screen into the main site.',
    image: '/assets/img/portfolio/the-already-ghosts.webp',
    url: 'https://thealreadyghosts.com/',
    featured: true,
  },

  {
    title: 'Sunday Paving & Sealing',
    category: 'Local Service Business',
    description:
      'A simple, lightning-fast, search-engine-optimized website for a Wolfeboro paving and pavement maintenance company serving residential and commercial customers.',
    image: '/assets/img/portfolio/sunday-paving.webp',
    url: 'https://www.sundaypaving.com/',
  },

  {
    title: 'Butternuts Good Dishes',
    category: 'Retail / Food',
    description:
      'A homemade website for a popular Wolfeboro kitchen and gourmet shop featuring kitchenware, specialty foods, prepared dishes, local products, and more.',
    image: '/assets/img/portfolio/butternuts.webp',
    url: 'https://butternutsgooddishes.com/',
  },

  {
    title: 'Ingram Engineering',
    category: 'Specialized Manufacturing',
    description:
      'A website for my friend and former bandmate, featuring nearly 100 audio samples stored on Amazon S3 so prospective clients can hear and compare his audio engineering work.',
    image: '/assets/img/portfolio/ingram-engineering.webp',
    url: 'https://ingramengineering.net/',
  },

  {
    title: 'Landbank of NH',
    category: 'Nonprofit / Conservation',
    description:
      'A website for the Lakes Region land conservation organization responsible for securing funds for The Nick, Sewall Woods and more.',
    image: '/assets/img/portfolio/landbank-nh.webp',
    url: 'https://landbanknh.org/',
  },

  {
    title: 'Kingswood Press',
    category: 'Local Business',
    description:
      'Website redesign for a longtime local printing and publishing shop turned into a full-on digital and design business.',
    image: '/assets/img/portfolio/kingswood-press.webp',
    url: 'https://kingswoodpress.com/',
  },

  {
    title: 'Wolfeboro Business Center',
    category: 'Commercial Property',
    description:
      'A website providing information about businesses, offices, and commercial space at the Wolfeboro Business Center.',
    image: '/assets/img/portfolio/wolfeboro-business-center.webp',
    url: 'https://wolfeborobusinesscenter.com/',
  },

  {
    title: 'Rourke Builders',
    category: 'Construction',
    description:
      'A professional website for a local residential construction and building company.',
    image: '/assets/img/portfolio/rourke-builders.webp',
    url: 'https://rourkebuilders.com/',
  },
];

export default function PortfolioPage() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <main className="bg-white">

      {/* Page Header */}
      <section className="py-20 border-t-amber-800 border-t-110 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Portfolio
            </h1>

            <p className="mt-5 text-xl text-gray-600">
              I&apos;ve built websites for a wide range of local clients.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <section className="pb-20">
          <div className="container mx-auto px-6 max-w-5xl">

            <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">

              {/* Featured Screenshot */}
              <a
                href={featuredProject.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${featuredProject.title} website`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={featuredProject.image}
                    alt={`${featuredProject.title} website`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 1024px"
                    className="object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>
              </a>

              <div className="p-8 md:p-10">

                <p className="text-sm font-semibold uppercase tracking-wide text-green-600 mb-2">
                  {featuredProject.category}
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredProject.title}
                </h2>

                <p className="text-lg text-gray-700 max-w-3xl mb-6">
                  {featuredProject.description}
                </p>

                <a
                  href={featuredProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-semibold text-green-600 hover:text-blue-600 transition-colors"
                >
                  Visit The Already Ghosts →
                </a>

              </div>
            </div>

          </div>
        </section>
      )}

      {/* Other Projects */}
      <section className="pb-24">
        <div className="container mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

            {otherProjects.map((project) => (
              <article
                key={project.title}
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

                {/* Content */}
                <div className="p-7">

                  <p className="text-sm font-semibold uppercase tracking-wide text-green-600 mb-2">
                    {project.category}
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h2>

                  <p className="text-gray-700 mb-5">
                    {project.description}
                  </p>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-green-600 hover:text-blue-600 transition-colors"
                  >
                    Visit Website →
                  </a>

                </div>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Need a better website?
          </h2>

          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            I work with individuals, small businesses and organizations throughout
            Wolfeboro, the Lakes Region and beyond.
          </p>

          <Link
            href="/#contact"
            className="inline-block mt-8 px-7 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
          >
            Let&apos;s Connect
          </Link>

        </div>
      </section>

    </main>
  );
}