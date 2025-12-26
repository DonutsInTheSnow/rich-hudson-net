// app/privacy-policy/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Rich Hudson',
  description: 'Privacy Policy for richhudson.net - how your information is handled when using this site.',
};

export default function PrivacyPolicy() {
  return (
    <section className="py-20 border-t-amber-800 border-t-110 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Privacy Policy
        </h1>

        <div className="text-xl max-w-none text-gray-700 space-y-8">
          <p>
            Rich Hudson (“I”, “me”, or “my”) operates the <strong>richhudson.net</strong> website.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12">Information Collection and Use</h2>
          <p>
            I only collect personal information that you voluntarily provide through the contact form (name, email, and message). This information is used solely to respond to your inquiry and is not stored long-term, shared with third parties, or used for marketing purposes.
          </p>
          <p>
            The site does not use tracking cookies, analytics tools (beyond basic Vercel/Netlify logs), or any advertising services.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12">Changes to This Privacy Policy</h2>
          <p>
            I may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12">Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please use the{' '}
            <Link href="/#contact" className="text-blue-600 hover:underline font-medium">
              Contact form
            </Link>{' '}
            on the home page.
          </p>

          <p className="text-sm text-gray-500 mt-16">
            Last updated: December 2025
          </p>
        </div>
      </div>
    </section>
  );
}