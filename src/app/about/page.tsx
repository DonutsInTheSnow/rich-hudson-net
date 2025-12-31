import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <section className="py-20 border-t-amber-800 border-t-110 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About Rich Hudson</h1>
          <p className="mt-4 text-xl text-gray-600">Web Developer • Wolfeboro, New Hampshire</p>
        </div>

        <div className="className max-w-3xl mx-auto text-center mb-12 text-xl text-gray-700">
          <p>
            <strong>Proud American. Believer in merit, hard work, and individual responsibility.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-96 md:h-full min-h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image src="/assets/img/about.webp" alt="Rich Hudson on Mars" fill className="object-contain p-5" />
          </div>

          <div className="text-xl max-w-none text-gray-700 space-y-6">
            <p>
                I was born in Huntsville, Alabama—son of an Apollo-era rocket scientist who helped beat the Soviets to the moon. We moved north when I was young. My parents loved New Hampshire&apos;s lakes and independent spirit. They built a home in Wolfeboro for retirement. Life took detours—ten years ago my wife and I made it our own after traveling the country. We&apos;ve seen all 50 states... and the Live Free or <span className="line-through decoration-red-600 decoration-2">Die</span> <span className="font-bold">Fight</span> state is still #1.
            </p>

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
                An iOS app I created to help people break bad habits and stay off social media for 8 weeks. Track progress, redirect mind chatter, and focus on high-value goals.
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
                Guitarist, songwriter, and co-founder of BOB (1990s Atlanta band). Five albums, East Coast tours, and reunion shows in 2018. Still writing and playing today.
              </p>
              <div className="mt-4 space-y-2">
                <a href="https://bob-atlanta.com" target="_blank" rel="noopener" className="block text-green-600 font-semibold underline hover:text-blue-600">
                  bob-atlanta.com →
                </a>
                <p className="text-gray-700">A site I built for a talented Wolfeboro songwriter for his Already Ghosts project:</p>
                <a href="https://thealreadyghosts.com" target="_blank" rel="noopener" className="block text-green-600 font-semibold underline hover:text-blue-600">
                  thealreadyghosts.com →
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl text-gray-800">
              Ready to upgrade your online presence? <Link href="/#contact" className="text-green-600 font-bold underline hover:text-blue-600">Let&apos;s connect.</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}