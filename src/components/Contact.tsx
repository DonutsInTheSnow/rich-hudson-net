// components/Contact.tsx
import { PhoneIcon } from '@heroicons/react/24/solid';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Contact</h2>
          <p className="mt-4 text-2xl text-gray-700">Tell Me About Your Project</p>

          <div className="mt-8">
            <a
              href="tel:8022226473"
              className="inline-flex items-center gap-3 px-8 py-4 text-2xl font-bold tracking-wider text-green-400 border-3 border-green-400 bg-gray-900 rounded-full hover:bg-transparent hover:text-gray-900 hover:border-4 hover:border-gray-900 transition-all duration-300"
            >
              <PhoneIcon className="h-8 w-8" />
              (802) 222-6473
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="bg-white rounded-xl shadow-xl p-8 md:p-12"
          >
            <input type="hidden" name="access_key" value="e283c2e0-86d0-4a67-a6a3-6c121470d3be" />
            <input type="hidden" name="from_name" value="New inquiry from richhudson.net" />
            <input type="hidden" name="redirect" value="https://richhudson.net/thank-you" />
            <input type="checkbox" name="botcheck" className="hidden" />

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="w-full text-gray-800 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  className="w-full text-gray-800 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mt-6">
              <input
                type="text"
                name="subject"   
                id="website"
                placeholder="Your Current Website (if applicable) e.g. mywebsite.com or https://mywebsite.com"
                className="w-full text-gray-800 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent peer"
              />
              <p className="mt-1 text-sm text-gray-500 hidden peer-invalid:block">
                Please enter a website with an extension like .com, .net, .org (or leave blank)
              </p>
            </div>

            <div className="mt-6">
              <textarea
                name="message"
                id="message"
                rows={6}
                placeholder="What do you want to improve about your current website? What are your goals for this project? What is your timeline? The more details you can provide, the better I can understand your needs and how I can help."
                required
                className="w-full text-gray-800 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
              />
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="px-10 py-4 bg-green-600 text-white font-medium text-lg rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}