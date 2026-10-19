import { readingMinutes } from '@/lib/readingTime';
import { posts } from './posts';

export * from './blogTypes';

export const seoData = {
  title: "Blogs",
  description: "Read our latest thoughts, engineering deep dives, and insights into the future of AI.",
  url: "https://www.tizora.ai/insights/blogs",
  image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop"
};

export const heroData = {
  tagTitle: "OUR BLOG",
  heading: "Insights & Engineering",
  description: "Deep dives into building scalable AI products, architectural patterns, and the future of enterprise software."
};

// Each post lives in its own file under ./posts/ — see posts/index.ts for
// how to add a new one. This file just aggregates them for the rest of the
// app; it should never need to grow past this re-export as the blog does.
export const allBlogs = posts;


export const blogGridData = {
  studies: allBlogs.map(blog => ({
    id: blog.id,
    type: blog.type,
    category: blog.category,
    title: blog.title,
    description: blog.description,
    image: blog.image,
    imageAlt: blog.imageAlt,
    bgColor: blog.bgColor,
    isImage: blog.isImage,
    date: blog.date,
    author: blog.author,
    readingTime: readingMinutes({ content: blog.content, faqs: blog.faqs }),
    link: `/insights/blogs/${blog.slug}` // Dynamic link routing
  }))
};
