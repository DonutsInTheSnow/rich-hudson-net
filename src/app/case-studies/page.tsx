
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

type ProcessStep = {
  step: string;
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
};

type CaseStudy = {
  title: string;
  subtitle: string;
  url?: string;
  currentSiteUrl?: string;
  paragraphs: string[];
  processHeading?: string;
  process?: ProcessStep[];
  statusLabel?: string;
  statusNote?: string;
  closing?: string[];
};

const cases: CaseStudy[] = [
  {
    title: 'Lakes Region Repeater Association',
    subtitle: 'Website Strategy, UX/UI Design & WordPress Prototype',
    url: '',
    currentSiteUrl: 'https://www.w1bst.org/',
    paragraphs: [
      'The Lakes Region Repeater Association (LRRA) has more than 50 years of history, a large amount of useful amateur-radio information, and an active community. Its existing website contains that information, but the homepage and navigation make it difficult for visitors—particularly newcomers—to quickly understand where to begin.',
    ],
    processHeading: 'Project in Progress',
    process: [
      {
        step: '01',
        title: 'Discovery & UX Requirements',
        body: 'Identified primary audiences, visitor goals, content priorities, and problems with the current experience.',
        href: '/case-studies/lrra-website-discovery.pdf',
        linkLabel: 'PDF',
      },
      {
        step: '02',
        title: 'Content Audit',
        body: 'Reviewing existing content to determine what should be retained, consolidated, reorganized, or moved.',
        href: '/case-studies/Case-Studies-Content-Audit.pdf',
        linkLabel: 'PDF',
      },
      {
        step: '03',
        title: 'Information Architecture',
        body: "Developing a simplified sitemap and navigation structure around visitor tasks rather than the organization's existing collection of pages.",
      },
      {
        step: '04',
        title: 'User Flows',
        body: 'Mapping key journeys such as getting started with amateur radio, finding repeater information, joining LRRA, and finding events.',
      },
      {
        step: '05',
        title: 'Wireframes',
        body: 'Creating low-fidelity page layouts in Figma to establish hierarchy, content structure, and navigation before visual styling.',
      },
      {
        step: '06',
        title: 'UI Design',
        body: 'Developing the visual system, responsive layouts, components, and interaction patterns in Figma.',
      },
      {
        step: '07',
        title: 'WordPress',
        body: 'Translating the UX/UI direction into a working GeneratePress + WordPress prototype for evaluation.',
        href: 'https://vivacious-addax-cab5c2.instawp.site/',
        linkLabel: 'Prototype',
      },
      {
        step: '08',
        title: 'Testing & Iteration',
        body: 'Testing the experience across desktop and mobile, gathering feedback, and refining the design.',
      },
    ],
    statusLabel: 'Current Status',
    statusNote: 'The project is currently at the 03 Information Architecture stage.',
    closing: [
      'The current WP prototype is a basic landing page and focuses on giving visitors a clearer path to understand LRRA, get started with amateur radio, become involved, and find the practical information they need.',
    ],
  },
  {
    title: 'Sunday Paving & Sealing',
    subtitle: 'Enhanced Performance for SEO',
    url: 'https://sundaypaving.com/',
    paragraphs: [
      'Ryan wanted a faster, cleaner website to improve local search rankings and provide a better experience for customers in the Lakes Region.',
      'The original site was a heavy single-page application built on Bootstrap with multiple jQuery libraries, resulting in slow load times and poor mobile performance.',
      'We made significant improvements:',
      '• Moved the Gallery and Employment sections to their own dedicated pages to declutter and streamline the main landing page.',
      '• Removed heavy dependencies (jQuery, Isotope, Venobox, Owl Carousel, AOS, etc.) and rebuilt using vanilla HTML, CSS, and JavaScript.',
      '• Optimized with critical CSS, local fonts, WebP images, and modern best practices.',
      'Result: Mobile PageSpeed score jumped from the low 60s to 96+, with strong Core Web Vitals. The lighter landing page now loads much faster and ranks better for local asphalt paving and sealcoating searches.',
      'This project shows the value of moving away from bloated SPA templates and focusing on speed and simplicity for local service businesses.',
    ],
  },
  {
    title: "DJ's Septic Pumping Service, Inc.",
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
      'This project shows why lightweight, modern techniques beat legacy templates for small-business sites.',
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
      "Handed off to a Las Vegas agency in mid-2024. Their current mobile PSI is 60. For contrast, my recent vanilla JavaScript renovation of DJ's is 93.",
      'These days browsers have excellent built-in tools for things like smooth scrolling, fade-ins, and subtle animations. By using those native features (plain HTML, CSS, and clean JavaScript) instead of older add-on libraries, I can deliver the same great look and feel with far less code and much faster speeds.',
    ],
  },
  {
    title: 'Dr. Neal',
    subtitle: 'Modernization & Migration',
    url: 'https://drrichardneal.com/',
    paragraphs: [
      "Dr. Neal's office took a chance on me, and I delivered. As a dental patient turned resident web developer, I revamped his outdated site—swapping low-res images, pruning irrelevant content, fixing broken links (including a payment portal), and modernizing the landing page.",
      "I also seamlessly migrated his email to GoDaddy hosting with zero downtime. SEO wasn't the goal here—demand's already sky-high, with appointments booked six months out.",
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
    <section className="w-screen max-w-[100vw] overflow-x-hidden py-20 border-t-amber-800 border-t-110 bg-gray-50 text-gray-800">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Case Studies</h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 min-w-0">
            <h3 className="text-2xl font-bold text-gray-600 mb-6">My Approach</h3>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Let&apos;s talk about what your site could be.</h4>
              <p className="text-gray-700 font-semibold leading-relaxed">
                Your website is often the first impression customers have of your business—like a front yard that&apos;s either well maintained or overgrown.
                Some sites are like gardens left untended for years: confusing, slow, broken links, forgotten blogs, fonts almost unreadable on mobile. They turn visitors away before they ever step inside. Consumers judge quickly—and harshly. You don&apos;t need an extravagant showcase to stand out. A clean, fast, easy-to-navigate site built on modern tools invites repeat visits and turns interest into action.
                I&apos;m a Wolfeboro-based developer focused on performance, clarity, and long-term results. If your current site feels outdated or underperforming, contact me.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 min-w-0">
            <h3 className="text-2xl font-bold text-gray-600 mb-6">Selected Case Studies</h3>
            <div className="relative pl-8 lg:pl-12 border-l-2 border-green-600">
              {cases.map((c, i) => (
                <div key={i} className="relative mb-12 last:mb-0">
                  <span className="absolute -left-10 lg:-left-14 top-0 w-3.5 h-3.5 bg-white border-2 border-green-600 rounded-full" />

                  <div className="bg-white rounded-xl shadow-[inset_0_0_7px_2px_rgba(0,0,0,0.1)] p-8">
                    <div className="flex items-center gap-3 mb-3">
                      {c.url ? (
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-2xl font-bold text-green-600 underline hover:text-blue-600 flex items-center gap-2"
                        >
                          <ArrowTopRightOnSquareIcon className="h-6 w-6 shrink-0" />
                          {c.title}
                        </a>
                      ) : (
                        <h4 className="text-2xl font-bold text-green-600">{c.title}</h4>
                      )}
                    </div>

                    <p className="text-lg font-medium text-gray-600 mb-6">{c.subtitle}</p>

                    {c.paragraphs.map((p, pi) => (
                      <p
                        key={pi}
                        className="text-gray-700 font-medium font-mono leading-relaxed mb-4 last:mb-0"
                      >
                        {p}
                      </p>
                    ))}

                    {Array.isArray(c.process) && c.process.length > 0 && (
                      <div className="mt-8">
                        {c.processHeading ? (
                          <h5 className="text-lg font-bold text-gray-600 mb-4">
                            {c.processHeading}
                          </h5>
                        ) : null}
                        <ol className="space-y-4">
                          {c.process.map((item, si) => (
                            <li key={si} className="flex gap-3">
                              <span className="shrink-0 font-mono text-sm font-bold text-green-600 w-8 pt-0.5">
                                {item.step}
                              </span>
                              <div className="min-w-0">
                                <p className="font-bold text-gray-700">
                                  {item.title}
                                  {item.href ? (
                                    <>
                                      {' '}
                                      <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-mono font-medium text-green-600 hover:underline"
                                      >
                                        {item.linkLabel ?? 'PDF'}
                                      </a>
                                    </>
                                  ) : null}
                                </p>
                                <p className="text-gray-700 font-medium font-mono leading-relaxed">
                                  {item.body}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {c.statusNote ? (
                      <div className="mt-8">
                        {c.statusLabel ? (
                          <h5 className="text-lg font-bold text-gray-600 mb-2">
                            {c.statusLabel}
                          </h5>
                        ) : null}
                        <p className="text-gray-700 font-medium font-mono leading-relaxed">
                          {c.statusNote}
                        </p>
                      </div>
                    ) : null}

                    {Array.isArray(c.closing) && c.closing.length > 0
                      ? c.closing.map((p, ci) => (
                          <p
                            key={ci}
                            className="mt-4 text-gray-700 font-medium font-mono leading-relaxed"
                          >
                            {p}
                          </p>
                        ))
                      : null}

                      <div className="mt-6 space-y-2">
                        {c.currentSiteUrl ? (
                          <p className="text-gray-700 font-medium font-mono">
                            Current site:{' '}
                            <a
                              href={c.currentSiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-600 hover:underline"
                            >
                              {c.currentSiteUrl}
                            </a>
                          </p>
                        ) : null}
                      </div>
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