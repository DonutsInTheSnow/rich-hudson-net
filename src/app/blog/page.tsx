import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import Image from 'next/image'

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  image{
    alt,
    asset->{
      _id,
      url
    }
  }
}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <section id="psi-blog" className="py-20 border-t-amber-800 border-t-110 bg-gray-50 text-gray-800">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Rich Blog</h1>
          <p className="text-xl text-gray-600 text-center mt-4 mb-16">
            From Code to Community: Web Insights & New Hampshire
          </p>
        </div>
        
        <div className="grid md:grid b-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (

            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
            {post.image?.asset?.url && (
              <Image
                src={post.image.asset.url}
                alt={post.image?.alt || post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
            )}

              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-green-600 underline group-hover:text-blue-600 transition">
                  {post.title}
                </h2>
                <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
              </div>
            </Link>

            ))}
        </div>
      </div>
    </section>
  );
}