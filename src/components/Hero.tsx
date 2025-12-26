// src/components/Hero.tsx
"use client";

export default function Hero() {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag */}
          <span className="inline-block bg-green-600/90 backdrop-blur-sm border border-green-400/30 text-white px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-8">
            RICH HUDSON • WEB DEVELOPER
          </span>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-8">
            Fast, Modern Websites That Help Your Business Grow
          </h1>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#contact"
              onClick={handleContactClick}
              className="inline-flex items-center px-10 py-5 bg-green-600 text-white text-lg font-semibold rounded-full hover:bg-green-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              Get a Free Website Review
            </a>

            <a
              href="/case-studies"
              className="inline-flex items-center px-10 py-5 bg-white/20 backdrop-blur-md text-white text-lg font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}