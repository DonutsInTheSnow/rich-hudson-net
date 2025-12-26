// app/thank-you/page.tsx  (or app/thanks/page.tsx if you prefer)
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Thank You | Rich Hudson',
  description: 'Your message has been sent. Thank you for reaching out!',
};

export default function ThankYouPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900">
      {/* Background Image */}
      <Image
        src="/assets/img/thanks-bg.webp"
        alt="Thank you background"
        fill
        className="object-cover opacity-60"
        priority
      />

      {/* Overlay Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Large Envelope Icon - using Heroicons Mail as a modern replacement */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-32 w-32 mx-auto text-green-500 mb-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            THANK YOU FOR REACHING OUT!
          </h1>

          <h2 className="text-2xl md:text-3xl text-white mb-12">
            Your message has been sent.
          </h2>

          <Link
            href="/"
            className="inline-block px-10 py-4 bg-green-600 text-white text-lg font-medium rounded-full hover:bg-green-700 transition-colors duration-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}