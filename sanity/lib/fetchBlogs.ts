import {client} from '@/sanity/lib/client';
import {Blog} from '../types/blog';
import {toPlainText} from '@portabletext/react';

const allBlogsQuery = `*[_type == "post"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  body,
  mainImage {
    asset->{
      _id,
      url
    }
  }
}`;

// Function to fetch a single blog by slug
const singleBlogQuery = `*[slug.current == $slug] {
  _id,
  title,
  slug,
  body,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  }
}[0]`;

// Function to create an excerpt from rich text body
function createExcerpt(body: any, maxLength: number = 150): string {
  const plainText = toPlainText(body);
  return plainText.length > maxLength
    ? plainText.slice(0, maxLength) + '...'
    : plainText;
}

// Fetch blogs from Sanity and add an excerpt
export async function getBlogs(): Promise<Blog[]> {
  const blogs = await client.fetch(allBlogsQuery);
  return blogs.map((blog: Blog) => ({
    ...blog,
    excerpt: createExcerpt(blog.body), // Create an excerpt from rich text body
  }));
}

// Fetch an individual blog by slug from Sanity
export async function getBlog(slug: string): Promise<Blog> {
  const blog = await client.fetch(singleBlogQuery, {slug});
  if (!blog) {
    throw new Error(`Blog with slug ${slug} not found`);
  }
  return blog;
}
