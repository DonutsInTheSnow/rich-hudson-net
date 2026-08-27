import QuickSiteForm from './QuickSiteForm';

export const metadata = {
  title: 'Quick Site Special | Rich Hudson',
  description:
    '$499 website special for the first five Wolfeboro and Lakes Region businesses this week.',
};

export default function QuickSitePage() {
  return (
    <section className="py-20 border-t-amber-800 border-t-110 bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          {/* <p className="text-2xl font-semibold text-red-600">The Quick Site Special is now closed. Check back for the next special!</p> */}
          <p className="text-sm font-semibold tracking-widest uppercase text-amber-800 mb-3">
            This week only · First five
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Quick Site Special
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            $499 · Wolfeboro &amp; Lakes Region businesses
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 mb-12 text-gray-700 space-y-5 text-lg">
          <p>
            A simple, fast-loading one-page site for local businesses who need
            to be findable online without spending days inside Wix, Squarespace,
            or an AI builder.
          </p>
          <p>
            <strong>What you get:</strong> up to 6 images, a contact form, social
            links, your contact info, a call-to-action section, one revision
            before launch, help with a new domain or pointing an existing one,
            and setup on your own GoDaddy hosting account. <a href="/demo/index.html" className="text-green-600 hover:text-green-700 font-bold hover:underline">See a Quick Site demo.</a>
          </p>
          <p>
            Fill out the form below with the content I need to build it. I&apos;ll
            review what you send and email you to confirm whether one of the
            five $499 spots is still available.
          </p>
          <p>
            If I confirm a spot, the $499 is due by PayPal before work starts.
            One revision is included before launch. If you&apos;re not happy with
            the first preview and we haven&apos;t launched yet, I&apos;ll refund
            you in full. After launch, extra changes are hourly.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What to send me
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Who are you?
              </h3>
              <p className="text-gray-700">
                What do you do, and for whom? Write it the way you&apos;d tell a
                neighbor in Wolfeboro — plain and specific.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. What&apos;s happening now?
              </h3>
              <p className="text-gray-700">
                Current hours, a seasonal offer, an upcoming event, or what
                people should do this week.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Why you?
              </h3>
              <p className="text-gray-700">
                The one reason someone should call, book, buy, join, visit, or
                donate. Keep it short.
              </p>
            </div>
          </div>
          <p className="mt-6 text-gray-600">
            Short beats clever. Real photos of your place, work, or people beat
            stock. Incomplete forms delay the spot.
          </p>
        </div>

        <QuickSiteForm />
      </div>
    </section>
  );
}
