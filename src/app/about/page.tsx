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
          {/* Placeholder for your photo - replace with actual */}
          <div className="relative h-96 md:h-full min-h-96 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-gray-200 w-full h-full flex items-center justify-center">
              <span className="text-gray-500 text-lg">Your professional photo here</span>
            </div>
            <Image src="/assets/img/rich-hudson.webp" alt="Rich Hudson on Mars" fill className="object-cover" />
          </div>

          <div className="text-xl max-w-none text-gray-700 space-y-6">
            {/* <p>
                <strong>Proud American. Believer in merit, hard work, and individual responsibility.</strong>
            </p> */}

            <p>
                I was born in Huntsville, Alabama—son of an Apollo-era rocket scientist who helped beat the Soviets to the moon. We moved north when I was young. My parents loved New Hampshire&apos;s lakes and independent spirit. They built a home in Wolfeboro for retirement. Life took detours—ten years ago my wife and I made it our own after traveling the country. We&apos;ve seen all 50 states... and the Live Free or <span className="line-through decoration-red-600 decoration-2">Die</span> <span className="font-bold">Fight</span> state is still #1.
            </p>

            <p>
                Since 2018, I&apos;ve been building modern websites—primarily for small businesses and organizations in the Lakes Region and across New Hampshire. I started the old-school way: finding outdated sites, creating improved mockups, and reaching out directly. Cold calling takes a thick skin—one sale in fifteen is a win—but persistence and quality deliver results.
            </p>

            <p>
                I especially enjoy serving local owners because I live and work in this community. I value the same things many here do: meritocracy, personal honor, integrity, and real relationships. In a world of faceless remote freelancers, I&apos;m available locally—sometimes even in person. I&apos;ve had clients hand me cash up front and trust me to deliver. I return half until they&apos;re satisfied. That&apos;s how business used to be done. Reputation matters.
            </p>

            <p>
                I build sites that perform, rank well, and help your business grow—no fluff, just results.
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
              <a href="https://apps.apple.com/us/app/shedooby/id6748308602" target="_blank" rel="noopener" className="mt-4 inline-block text-blue-600 font-medium hover:underline">
                Get Shedooby in the App Store for $8.99 →
              </a>
              <a href="https://shedooby.com" target="_blank" rel="noopener" className="mt-4 inline-block text-blue-600 font-medium hover:underline">
                shedooby.com →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Music</h3>
              <p className="text-gray-700">
                Guitarist, songwriter, and co-founder of BOB (1990s Atlanta band). Five albums, East Coast tours, and reunion shows in 2018. Still writing and playing today.
              </p>
              <div className="mt-4 space-y-2">
                <a href="https://bob-atlanta.com" target="_blank" rel="noopener" className="block text-blue-600 font-medium hover:underline">
                  bob-atlanta.com →
                </a>
                <p className="text-gray-700">Site I built for a talented Wolfeboro songwriter for his Already Ghosts project. Check out the explosive introducion!</p>
                <a href="https://thealreadyghosts.com" target="_blank" rel="noopener" className="block text-blue-600 font-medium hover:underline">
                  thealreadyghosts.com →
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl text-gray-800">
              Ready to upgrade your online presence? <Link href="/#contact" className="text-blue-600 font-bold hover:underline">Let&apos;s talk.</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}