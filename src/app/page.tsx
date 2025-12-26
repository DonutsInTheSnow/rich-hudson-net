import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import LatestBlogPost from '@/components/LatestBlogPost'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <LatestBlogPost />

      {/* Hidden anchor with padding to create offset for Contact section */}
      <div id="contact" className="-mt-27 pt-27" />

      <Contact />
    </>
  );
}
