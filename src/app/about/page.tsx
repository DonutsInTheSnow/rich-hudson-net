import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <section className="py-20 border-t-amber-800 border-t-110 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">About Rich Hudson</h1>
          <p className="mt-4 text-xl text-gray-600">Web Developer • Wolfeboro, New Hampshire</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-96 md:h-full min-h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image src="/assets/img/about.webp" alt="Rich Hudson on Mars" fill className="object-contain p-5" />
          </div>

          <div className="text-xl max-w-none text-gray-700 space-y-6">

            <p>
                Since 2018, I&apos;ve been building modern websites—primarily for small businesses in New Hampshire&apos;s Lakes Region. I began the old-school way by finding outdated sites, creating improved mockups, and reaching out directly. Cold calling takes a thick skin—one sale in fifteen is a win—but persistence and quality deliver results.
            </p>

            <p>
                I especially enjoy serving local owners because I live and work in Wolfeboro. I value the same things many here do: meritocracy, personal honor, integrity, and real relationships. In a world of faceless remote freelancers, I&apos;m available locally—sometimes even in person.
            </p>

          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Side Projects & Music</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Shedooby</h3>
              <p className="text-gray-700">
                An iOS app I created that helps people place the proper value on their time by challenging them to break bad habits, stay off social media and dedicate themselves to achieving three mission goals over 8 weeks. Track progress, redirect mind chatter, and build discipline like a soldier with Shedooby.
              </p>
              <a href="https://apps.apple.com/us/app/shedooby/id6748308602" target="_blank" rel="noopener" className="mt-4 inline-block text-green-600 font-semibold underline hover:text-blue-600">
                Get Shedooby in the App Store →
              </a>
              <a href="https://shedooby.com" target="_blank" rel="noopener" className="mt-4 inline-block text-green-600 font-semibold underline hover:text-blue-600">
                Visit shedooby.com →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Music</h3>
              <p className="text-gray-700">
                I also enjoy creating music and have built a few websites for musicians. Here are a couple of my favorites:
              </p>
              <div className="mt-4 space-y-2">
                <a href="https://thealreadyghosts.com" target="_blank" rel="noopener" className="block text-green-600 font-semibold underline hover:text-blue-600">
                  thealreadyghosts.com →
                </a>
                <a href="https://bob-atlanta.com" target="_blank" rel="noopener" className="block text-green-600 font-semibold underline hover:text-blue-600">
                  bob-atlanta.com →
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl text-gray-800">
              Ready for a great website? <Link href="/#contact" className="text-green-600 font-bold underline hover:text-blue-600">Contact me.</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}