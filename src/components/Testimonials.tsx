import Image from 'next/image';

const testimonials = [
  {
    name: 'NHASH Board',
    site: 'nhash.com',
    img: '/assets/img/testimonials/nhash.webp',
    alt: 'New Hampshire Association of Septage Haulers',
    text: 'We have had a fantastic experience working with Rich Hudson on the website for the New Hampshire Association Of Septage Haulers (NHASH). From the very beginning, he was responsive, professional, and truly took the time to understand our organization\'s needs. \nHe made the entire process easy- from planning to design to implementation- and kept communication clear and consistent throughout. The website is clean, and easy to navigate which is exactly what we were hoping for.\nWe are confident our website changes will make a big difference for our members and the community. We highly recommended Rich Hudson to any organization looking for a skilled and reliable web partner.',
  },
  {
    name: 'Eric Ingram',
    site: 'ingramengineering.net',
    img: '/assets/img/testimonials/ie-screen.webp',
    alt: 'ingram engineering',
    text: 'Rich does a great job with all aspects of my web site development and maintenance. The initial design was top notch, and he is always super responsive with any updates I have. I\'ve got no time or interest in the technical aspects of implementing or keeping up with the website hosting or technology and I\'m really glad that he is available to take care of it.\nI highly recommend him for website work.',
  },
  {
    name: 'Janice Boucher',
    site: 'Pine Harbor Condos',
    img: '/assets/img/testimonials/phca.webp',
    alt: 'pine harbor condos',
    text: 'Our condominium association was interested in building a new website that would be not only informative, but user friendly for our owners as well as individuals from the general public seeking information about our community. In light of this, we retained web designer Rich Hudson who came highly recommended. With Rich\'s help, we were able to achieve our goal.\nBuilding a website can be quite a process. Rich did a great job of guiding us through each step of setting up the different areas on the site by giving us ideas, direction, and great graphic work. I found him to be an excellent teacher, easy to work with, and that he responds quickly when we need to add or update new content or encounter technical issues.\nI am pleased with the work he has done for our association and would recommend him to others for website and/or graphic work.',
  },
  {
    name: 'Ryan Downer',
    site: 'sundaypaving.com',
    img: '/assets/img/testimonials/sunday.webp',
    alt: 'Sunday Paving & Sealing',
    text: 'Rich completely revamped out company website and it is absolutely beautiful. Communication was and has been great! Any needs we have he responds to right away and has helped us provide the best service for our customers.\nThank you Rich!',
  },
  {
    name: 'Dave Keller',
    site: 'Kellerco Optik',
    img: '/assets/img/testimonials/kco-screen.webp',
    alt: 'kellerco-optik',
    text: 'My thoughts:\n1. Brevity - Designs a website that gets the point across immediately. Your customer can scan your site with ease. No foolish insolent talk.\n2. Cost is very affordable - The results are “In Hand Value”. Anyone who is starting a new business needs a site. You get a first class site that you can be proud of and afford.\n3. Creative - Listens to your thoughts and provides great ideas upon which to build your site. Does excellent work in Logo design.\n4. Communications - Between you and Rich are immediate.\n5. Legality - Always follows the rules as to what you can or cannot use in your site.',
  },
  {
    name: 'Theresa Tocio',
    site: 'butternutsgooddishes.com',
    img: '/assets/img/testimonials/bgg.webp',
    alt: 'Butternuts Good Dishes',
    text: 'Rich is promo and professional. Did a great job.',
  },
  {
    name: 'Bill Swaffield',
    site: 'kingswoodpress.com',
    img: '/assets/img/testimonials/kp-screen.webp',
    alt: 'kingswood press',
    text: 'Rich revamped the website for The Kingswood Press two years ago and he did a fantastic job, making it more concise and much easier to navigate, all at a very reasonable and affordable price. Since then we have had more “hits” which has led to more business and some new accounts. Rich\'s response time to technical questions is immediate, thorough and easy to understand. His website knowledge and design capabilities are excellent, he is easy to work with, and I would recommend him to others who are in need of website design or graphic design.',
  },
  {
    name: 'Henry Grover, Jr',
    site: 'Glass Smart Services',
    img: '/assets/img/testimonials/glassSmart.webp',
    alt: 'glass smart',
    text: 'I could not be more satisfied with the work Rich did for me on the website design and the upgrade of my logo. His pricing is exceptional. Response to all of my questions was very prompt. And I absolutely recommend him to anyone looking for this kind of IT work!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Testimonials</h2>
          <p className="mt-4 text-lg text-gray-600">
            What my clients say.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-8 bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center"
            >
              <Image
                src={t.img}
                alt={t.alt}
                width={240}
                height={240}
                className="rounded-lg border-4 border-white shadow-md object-cover mb-6"
                loading="lazy"
              />

              <div className="mt-auto mb-2">
                <h3 className="text-xl font-bold text-gray-900">{t.name}</h3>
                <h4 className="text-gray-600">{t.site}</h4>
              </div>

              <div className="relative w-full">
                <svg className="absolute left-0 top-0 h-10 w-10 text-green-600 opacity-50 -translate-x-4 -translate-y-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.5 10c-2.3 0-4.1 1.8-4.1 4.1 0 2.3 1.8 4.1 4.1 4.1 1.4 0 2.7-0.7 3.5-1.8-0.8-0.8-1.3-1.9-1.3-3.1 0-2.3-1.8-4.1-4.1-4.1zM18.5 10c-2.3 0-4.1 1.8-4.1 4.1 0 2.3 1.8 4.1 4.1 4.1 1.4 0 2.7-0.7 3.5-1.8-0.8-0.8-1.3-1.9-1.3-3.1 0-2.3-1.8-4.1-4.1-4.1z" />
                </svg>

                <div className="italic text-gray-700 leading-relaxed space-y-4 my-2 text-left">
                    {t.text.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph.trim()}</p>
                    ))}
                </div>

                <svg className="absolute right-0 bottom-0 h-10 w-10 text-green-600 opacity-50 translate-x-4 translate-y-4 rotate-180" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.5 10c-2.3 0-4.1 1.8-4.1 4.1 0 2.3 1.8 4.1 4.1 4.1 1.4 0 2.7-0.7 3.5-1.8-0.8-0.8-1.3-1.9-1.3-3.1 0-2.3-1.8-4.1-4.1-4.1zM18.5 10c-2.3 0-4.1 1.8-4.1 4.1 0 2.3 1.8 4.1 4.1 4.1 1.4 0 2.7-0.7 3.5-1.8-0.8-0.8-1.3-1.9-1.3-3.1 0-2.3-1.8-4.1-4.1-4.1z" />
                </svg>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
