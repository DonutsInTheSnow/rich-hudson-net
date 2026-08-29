
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

const cases = [
  {
    title: 'Lakes Region Repeater Association',
    subtitle: 'Website Strategy, Information Architecture & WordPress Prototype',
    url: '',
    liveMockupUrl: 'https://affirmative-goldfinch-7afa5f.instawp.site/',
    currentSiteUrl: 'https://www.w1bst.org/',
    paragraphs: [
      'The Lakes Region Repeater Association (LRRA) has a wealth of information about amateur radio, its repeater network, club activities, education, emergency communications, and its 50-year history. But the organization\'s existing WordPress site presents much of that information at once, creating a busy homepage and a navigation structure with dozens of links that can make it difficult for visitors to quickly understand what LRRA is and where to go.',

      'I built a WordPress prototype focused on simplifying the visitor experience without discarding the organization\'s existing content. The goal was to create a clearer path for both newcomers interested in amateur radio and existing members looking for club news, events, repeaters, and resources.',

      'Key improvements in the prototype:',
      '• Simplified information architecture: consolidated the existing navigation into a small number of primary sections, with deeper amateur-radio resources organized into logical categories.',
      '• Lower-noise homepage: replaced the current stream of announcements, images, articles, and miscellaneous links with a focused landing page that introduces LRRA, explains why someone might join, and directs visitors toward the information they need.',
      '• New-member focus: prominent messaging and calls to action introduce amateur radio, license testing, the LRRA community, and opportunities to participate.',
      '• Content strategy: moved secondary and reference material away from the homepage while retaining it as accessible, organized content within the site.',
      '• Current information without clutter: a streamlined Latest News section gives the homepage a sense of activity while allowing individual posts to carry the organization\'s ongoing announcements and articles.',
      '• Responsive WordPress design: built with the WordPress block editor and GeneratePress, with particular attention to mobile presentation and a clean, modern visual treatment.',

      'This project demonstrates my approach to nonprofit and community organizations with content-heavy websites: preserve the value of what they have, but reorganize it around the visitor\'s needs. The prototype gives LRRA a concrete design and information-architecture direction to evaluate before committing to a full website redesign.'
    ],
  },
  {
    title: 'Wolfeboro Lions Club',
    subtitle: 'Website Strategy, UX Redesign & Wix Prototype',
    url: '',
    liveMockupUrl: 'https://rhudson4966.wixsite.com/lions-club-of-wolfeb',
    currentSiteUrl: 'https://wolfeborolionsclub.wixsite.com/wolfeboro-lions-club',
    paragraphs: [
      'The Wolfeboro Lions Club\'s current Wix site is functional but unfocused. A free-plan banner, oversized sponsor logos at the top of every page, and generic service-club language make it hard for visitors to immediately understand who the local club is, what it does in Wolfeboro, or how to join, volunteer, or donate. High-profile fundraisers such as the Great Smith River Race, the Car Show at The Nick, and the Golf Outing are under-connected to the club’s identity.',

      'I built a Wix homepage prototype and two-phase proposal to reorganize the site around three questions: Who are the Wolfeboro Lions? How do they help neighbors here? How can I get involved or support the work?',

      'Key improvements in the prototype and proposal:',
      '• Clearer visual hierarchy: club identity and local mission first, then impact, events, and ways to help — instead of leading with a sponsor carousel.',
      '• Local-first messaging and a service-focused hero, with Platinum sponsors moved below the hero and fuller recognition planned for a dedicated Donors page.',
      '• Simplified navigation plus a persistent Donate button (initially linked to PayPal) to support membership, volunteering, and giving.',
      '• Content strategy that ties signature community events back to the club and the local programs those events fund.',
      '• A phased plan: Phase 1 is a clean, mobile-friendly static rebuild in Wix; Phase 2 adds event registration, payments, a small shop, lead capture, calendar, and stronger SEO.',

      'This project shows how I approach nonprofit and community-club work: strategy and information architecture first, then a focused prototype that the organization can evaluate before investing in a full rollout.'
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
      'This project shows the value of moving away from bloated SPA templates and focusing on speed and simplicity for local service businesses.'
    ],
  },
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
                    {/* Title Row - Clickable only if url exists */}
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

                    {/* Extra Links for WCYC */}
                    {c.liveMockupUrl && (
                      <p className="mt-6 text-gray-700 font-medium font-mono">
                        Live mock-up:{' '}
                        <a 
                          href={c.liveMockupUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-green-600 hover:underline"
                        >
                          {c.liveMockupUrl}
                        </a>
                      </p>
                    )}
                    {c.currentSiteUrl && (
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
                    )}
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