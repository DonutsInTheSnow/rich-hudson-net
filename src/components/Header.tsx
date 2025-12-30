'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/#contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactInView, setIsContactInView] = useState(false);

  // Header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to detect when Contact section is in view (only on home page)
  useEffect(() => {
    if (pathname !== '/') return;

    const contactSection = document.getElementById('contact');
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactInView(entry.isIntersecting);
      },
      {
        rootMargin: '-10% 0px -70% 0px',
        threshold: 0,
      }
    );

    observer.observe(contactSection);

    return () => {
      observer.disconnect();
      // Optional: reset state on cleanup if desired
      setIsContactInView(false);
    };
  }, [pathname]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth',
        });
      }
      setMobileMenuOpen(false);
    } else {
      setMobileMenuOpen(false);
    }
  };

  // Determine active link: route-based for real pages, scroll-based for Contact on home
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' && !isContactInView;
    if (href === '/about') return pathname === '/about';
    if (href === '/blog') return pathname.startsWith('/blog');
    if (href === '/case-studies') return pathname === '/case-studies';
    if (href === '/#contact') return pathname === '/' && isContactInView;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/richLogo.svg"
              alt="Rich Hudson logo"
              width={79}
              height={79}
              priority
              className={`transition-all duration-300 ${
                scrolled ? 'brightness-0 dark:invert' : 'brightness-100 dark:brightness-100'
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <Link
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={`text-lg font-medium pb-1 transition-colors ${
                    isActive(link.href)
                      ? 'text-green-400'
                      : 'text-gray-700 hover:text-green-400 dark:text-gray-300 dark:hover:text-green-400'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-green-400 transition-all duration-300 ${
                      isActive(link.href) ? 'w-full' : 'w-0 hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars2Icon className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-xl shadow-lg py-6 px-6">
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.name} className="relative">
                  <Link
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className={`text-xl font-medium pb-1 block transition-colors ${
                      isActive(link.href)
                        ? 'text-green-600'
                        : 'text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400'
                    }`}
                  >
                    {link.name}
                    {isActive(link.href) && (
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}