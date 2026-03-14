import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

const cases = [
  {
    title: 'DJ\'s Septic Pumping Service, Inc.',
    subtitle: 'Local SEO & Performance',
    url: 'https://djssepticpumping.com/',
    paragraphs: [
      'The client, a family-owned septic pumping business serving Wolfeboro and the Lakes Region since 1983, needed a faster website to improve Google rankings and user experience on mobile.',
      'The original site used a heavy Bootstrap 4 template with over 100 files, including bloated vendor scripts (AOS, counter-up, Venobox), Google Fonts CDN (750ms lag), and unoptimized JPG images. Mobile PageSpeed was stuck in the low 50s.',
      'We rebuilt it lean:',
      '• Removed unnecessary vendor files (replaced animations with vanilla JS/CSS, static testimonials instead of Owl Carousel).',
      '• Served fonts locally (WOFF2 subsets).',
      '• Converted images to WebP.',
      '• Added robots.txt, sitemap.xml, Open Graph meta, CSP.',
      '• Inlined critical CSS, deferred non-critical resources, enabled gzip.',
      'Result: Reduced files to ~34, eliminated render-blocking delays, and boosted mobile Performance to 93, Accessibility to 95, Best Practices & SEO to 100. Faster load times support better rankings and happier visitors in a local service market.',
      'This project shows why lightweight, modern techniques beat legacy templates for small-business sites.'
    ],
  },
  {
    title: 'Rourke Builders',
    subtitle: 'SEO & Traffic Growth',
    url: 'https://rourkebuilders.com/',
    paragraphs: [
      'John found me through a mutual contact and wanted a dynamic project management site for his team (CRUD functionality). He also aimed for strong SEO rankings and ad campaigns, so I connected him with a reliable marketing specialist.',
      'I added Open Graph tags, tracking scripts, sitemap, blog, privacy policy, and form thank-you pages to support SEO and ads. Traffic grew significantly as a result.',
      'He added a hero video — a performance trade-off, but justified by industry data showing ~80% conversion lifts from video.',
      'Handed off to a Las Vegas agency in mid-2024. Their current mobile PSI is 60. For contrast, my recent vanilla JavaScript renovation of DJ\s is 93.',
      'These days browsers have excellent built-in tools for things like smooth scrolling, fade-ins, and subtle animations. By using those native features (plain HTML, CSS, and clean JavaScript) instead of older add-on libraries, I can deliver the same great look and feel with far less code and much faster speeds.',
    ],
  },
  {
    title: 'Action King',
    subtitle: 'Performance & SEO Discovery',
    url: 'https://actionkingservices.com',
    paragraphs: [
      'Web development often involves discovery—and always perseverance. While building Action King Services\' new site, I discovered that some hosting providers inject scripts for "performance monitoring" that ironically degrade site speed. By implementing a strong Content Security Policy (CSP), I caught and addressed these issues, improving performance metrics and SEO.',
    <>
      Perseverance came from a campaign I launched while working on the{' '}
      <a href="https://nhash.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 underline hover:text-blue-600">
        NHASH site
      </a>
      . After mocking up 30 websites in 30 days and receiving zero immediate leads, I moved on. Six months later, Karen King reached out for a redesign. That cold campaign ultimately led to a great partnership and a high-performing, SEO-optimized site.
    </>,
    ],
  },
  // {
  //   title: 'Action King',
  //   subtitle: 'Performance & SEO Discovery',
  //   url: 'https://actionkingservices.com',
  //   paragraphs: [
  //     'Web development often involves discovery—and always perseverance. While building Action King Services\' new site, I discovered that some hosting providers inject scripts for "performance monitoring" that ironically degrade site speed. By implementing a strong Content Security Policy (CSP), I caught and addressed these issues, improving performance metrics and SEO.',
  //     'Perseverance came from a campaign I launched while working on the NHASH site. After mocking up 30 websites in 30 days and receiving zero immediate leads, I moved on. Six months later, Karen King reached out for a redesign. That cold campaign ultimately led to a great partnership and a high-performing, SEO-optimized site.',
  //   ],
  // },
  {
    title: 'Dr. Neal',
    subtitle: 'Modernization & Migration',
    url: 'https://drrichardneal.com/',
    paragraphs: [
      'Dr. Neal\'s office took a chance on me, and I delivered. As a dental patient turned resident web developer, I revamped his outdated site—swapping low-res images, pruning irrelevant content, fixing broken links (including a payment portal), and modernizing the landing page.',
      'I also seamlessly migrated his email to GoDaddy hosting with zero downtime. SEO wasn\'t the goal here—demand\'s already sky-high, with appointments booked six months out.',
    ],
  },
  {
    title: 'Ingram',
    subtitle: 'Audio Content Organization',
    url: 'https://ingramengineering.net',
    paragraphs: [
      'Eric Ingram, my Georgia Tech housemate and bandmate, transitioned into designing top-notch sound equipment. For ingramengineering.net, the mission was clear: streamline dozens of sound files for easy access.',
      'We tapped Amazon S3 to store the extensive collection, tackling the time-intensive task of organizing them with smart naming. Beyond audio, the site packs in rich content—critical reviews, videos, and detailed product specs—making it a go-to resource for audio pros.',
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <section className="py-20 border-t-amber-800 border-t-110 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Case Studies</h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Process Sidebar */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold text-gray-600 mb-6">My Approach</h3>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Let&apos;s talk about what your site could be.</h4>
              <p className="text-gray-700 font-semibold leading-relaxed">
                Your website is often the first impression customers have of your business—like a front yard that&apos;s either welcoming or overgrown.
                Many sites I see are like gardens left untended for years: confusing, slow, broken links, forgotten blogs, fonts almost unreadable on mobile. They turn visitors away before they ever step inside. Consumers judge quickly—and harshly. It&apos;s their money, after all.
                You don&apos;t need an extravagant showcase to stand out. A clean, fast, easy-to-navigate site built on modern tools invites repeat visits and turns interest into action.
                I&apos;m a Wolfeboro-based developer focused on performance, clarity, and long-term results. If your current site feels outdated or underperforming, let&apos;s talk about what&apos;s possible.
              </p>
            </div>
          </div>

          {/* Timeline Projects */}
          <div className="lg:col-span-8">
            <h3 className="text-2xl font-bold text-gray-600 mb-6">Selected Case Studies</h3>
            <div className="relative pl-8 lg:pl-12 border-l-2 border-green-600">
              {cases.map((c, i) => (
                <div key={i} className="relative mb-12 last:mb-0">
                  {/* Dot */}
                  <span className="absolute -left-10 lg:-left-14 top-0 w-3.5 h-3.5 bg-white border-2 border-green-600 rounded-full" />

                  <div className="bg-white rounded-xl shadow-[inset_0_0_7px_2px_rgba(0,0,0,0.1)] p-8">
                    {/* Title + Icon Row */}
                    <div className="flex items-center gap-3 mb-3">
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl font-bold text-green-600 underline hover:text-blue-600"
                      >
                        <ArrowTopRightOnSquareIcon className="h-6 w-6 shrink-0 inline-flex pe-1" />{c.title}
                      </a>
                    </div>

                    {/* Subtitle */}
                    <p className="text-lg font-medium text-gray-600 mb-6">
                      {c.subtitle}
                    </p>

                    {/* Paragraphs */}
                    {c.paragraphs.map((p, pi) => (
                      <p key={pi} className="text-gray-700 font-medium font-mono leading-relaxed mb-4 last:mb-0">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}