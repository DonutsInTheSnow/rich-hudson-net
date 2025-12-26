import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

const cases = [
  {
    title: 'Rourke Fine Home Building, LLC — Skyrocketed Traffic with SEO & Features',
    url: 'https://rourkebuilders.com/',
    paragraphs: [
      'John discovered my web development services via Sally at Butternuts Good Dishes and approached me with a vision: a partially dynamic website for Rourke employees to effortlessly create, read, update, and delete projects. He also had big goals—top search engine rankings and targeted ad campaigns—and asked if I could connect him with a marketing expert. I recommended a trusted pro.',
      'While SEO was new territory for me, I dove in, equipping the site with Open Graph Metatags, Google and Facebook scripts, a sitemap, an in-site Blog, a Privacy Policy, and a Thank You page for Contact Form submissions. These upgrades turbocharged marketing efforts, tracking, and ads. The payoff? Rourke\'s website traffic has skyrocketed, driving more eyes to the business.',
      'John elected to add a full hero section video. While videos are known to impact site performance, the trade-off may be justified given the 80% increase in conversion rates according to marketing industry analysis.',

  // Inline JSX for the links
  <> 
    {' '}Epilogue: I handed the site over to a Las Vegas marketing agency in mid-2024. A recent speed test shows their {' '}
    <a 
      href="https://pagespeed.web.dev/analysis/https-rourkebuilders-com/nf4m2ailh8?form_factor=mobile" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline font-medium"
    >
      mobile PageSpeed score 
    </a> is a sluggish 55/100. For comparison, Next.js sites I build today — even with full hero videos — consistently score 90+ on mobile. Check out the performance for richhudson.net.
  </>,

  'This experience reinforced why Next.js has become my go-to framework for clients who want fast, future-proof websites that help their business grow.',
    ],
  },
  {
    title: 'Action King Services — A Lesson in SEO and Perseverance',
    url: 'https://actionkingservices.com',
    paragraphs: [
      'Web development often involves discovery—and always perseverance. While building Action King Services\' new site, I discovered that some hosting providers inject scripts for "performance monitoring" that ironically degrade site speed. By implementing a strong Content Security Policy (CSP), I caught and addressed these issues, improving performance metrics and SEO.',
      'Perseverance came from a campaign I launched while working on the NHASH site. After mocking up 30 websites in 30 days and receiving zero immediate leads, I moved on. Six months later, Karen King reached out for a redesign. That cold campaign ultimately led to a great partnership and a high-performing, SEO-optimized site.',
    ],
  },
  {
    title: 'Dr. Richard Neal, DMD',
    url: 'https://drrichardneal.com/',
    paragraphs: [
      'Dr. Neal\'s office took a chance on me, and I delivered. As a dental patient turned resident web developer, I revamped his outdated site—swapping low-res images, pruning irrelevant content, fixing broken links (including a payment portal), and modernizing the landing page.',
      'I also seamlessly migrated his email to GoDaddy hosting with zero downtime. SEO wasn\'t the goal here—demand\'s already sky-high, with appointments booked six months out.',
    ],
  },
  {
    title: 'Butternuts Good Dishes',
    url: 'https://butternutsgooddishes.com',
    paragraphs: [
      'Theresa Tocio tapped me to refresh Butternuts Good Dishes\' website after taking over from Sally, one of my first local clients. As neighbors in Wolfeboro\'s tight-knit community, Theresa and I teamed up. She craved a modern, clean look to showcase her new product line.',
      'I delivered, boosting SEO with a sitemap, robots.txt, and Content Security Policy, plus a Facebook feed for daily specials. We broke the single-page layout into multiple pages for a breezy feel and added borders to gallery images.',
    ],
  },
  {
    title: 'Ingram Engineering',
    url: 'https://ingramengineering.net',
    paragraphs: [
      'Eric Ingram, my Georgia Tech housemate and bandmate, transitioned into designing top-notch sound equipment. For ingramengineering.net, the mission was clear: streamline dozens of sound files for easy access.',
      'We tapped Amazon S3 to store the extensive collection, tackling the time-intensive task of organizing them with smart naming. Beyond audio, the site packs in rich content—critical reviews, videos, and detailed product specs—making it a go-to resource for audio pros.',
    ],
  },
  {
    title: 'Keith E Lee Website Tribute: Honoring a Life in Art and Music',
    url: 'https://donutsinthesnow.github.io/keith-e-lee',
    paragraphs: [
      'This site commemorates my friend Keith E Lee—an Atlanta-based artist, guitarist, writer, and radio host—who took his own life in 2020.',
      'Upgrades included: removing unused code, optimizing performance (with a 35-point boost), adding SEO-rich metadata targeting Atlanta and Georgia, and splitting the original Single Page Application into multiple pages for better navigation and readability. I also improved color contrast, font sizes, and accessibility.',
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
            <h3 className="text-2xl font-bold text-gray-600 mb-6">Process</h3>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Ready to Build a Great Website?</h4>
              <p className="text-gray-700 font-semibold leading-relaxed">
                As a fellow New Hampshire resident, I understand the local business landscape. Let&apos;s boost your online presence with a website that works harder for you! Whether you need a fresh design, a complete rebuild, or specific features to streamline your goals, I&apos;m here to help. Tired of a site that demands too much time with little return? Let&apos;s chat to see if we&apos;re the right match. I build lasting partnerships with my clients, offering ongoing support for tweaks, fixes, and updates—turning your vision into a reality that drives results. Ready to soar? Let&apos;s connect!
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
                    <h4 className="text-xl font-semibold text-green-600 mb-4 flex items-center gap-2">
                      <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                      <a href={c.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {c.title}
                      </a>
                    </h4>
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