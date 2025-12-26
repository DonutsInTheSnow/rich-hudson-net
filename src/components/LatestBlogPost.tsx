import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/client';

const LATEST_POST_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc)[0]{
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  image{
    alt,
    asset->{
      _id,
      url
    }
  }
}`;

const options = { next: { revalidate: 60 } }; // Slightly longer cache than full list

export default async function LatestBlogPost() {
  const post = await client.fetch(LATEST_POST_QUERY, {}, options);

  if (!post) return null;

  const imageUrl = post.image?.asset?.url;

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Latest from Rich Blog
        </h2>

        <Link
          href={`/blog/${post.slug.current}`}
          className="block max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {imageUrl ? (
                <div className="relative w-full h-96 md:h-full min-h-96">
                <Image
                    src={imageUrl}
                    alt={post.image?.alt || post.title}
                    fill
                    className="object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
                </div>
            ) : (
                <div className="bg-gray-200 h-96 md:h-full min-h-96 rounded-t-xl md:rounded-l-xl md:rounded-tr-none flex items-center justify-center">
                <span className="text-gray-500 text-xl">No image</span>
                </div>
            )}

            <div className="p-8 md:p-12">
              <time className="text-sm text-gray-600 uppercase tracking-wider">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>

              <h3 className="text-3xl font-bold mt-4 mb-6 text-gray-900 hover:text-blue-600 transition">
                {post.title}
              </h3>

              {post.excerpt ? (
                <p className="text-lg text-gray-700 leading-relaxed">
                  {post.excerpt}
                </p>
              ) : (
                <p className="text-gray-500 italic">No excerpt available.</p>
              )}

              <span className="inline-block mt-6 text-blue-600 font-medium hover:underline">
                Read more →
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}