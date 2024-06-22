import {client} from "@/sanity/lib/client"
import { Blog } from "../types/blog"
import {toPlainText} from '@portabletext/react'

const query = `*[_type == "post"]| order(_createdAt desc){
    _id,
    title,
    slug,
    body,
    mainImage{
      asset->{
        _id,
        url
      }
    }
  }`;

  // Function to create an excerpt from rich text body
function createExcerpt(body: any, maxLength: number = 150): string {
  const plainText = toPlainText(body);
  return plainText.length > maxLength
    ? plainText.slice(0, maxLength) + '...'
    : plainText;
}

 // Fetch blogs from Sanity and add an excerpt
export async function getBlogs(): Promise<Blog[]> {
  const blogs = await client.fetch(query);
  return blogs.map((blog: Blog) => ({
    ...blog,
    excerpt: createExcerpt(blog.body), // Create an excerpt from rich text body
  }));
}

