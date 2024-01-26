// import BlogList from "@/components/blogs/blog-list";

import BlogList from "../components/blogs/blog-list";

async function extractAllBlogs() {
  const res = await fetch(`https://fullstack-blog-app-one.vercel.app/api/blog-post/get-all-posts`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  if (data.success) return data.data;
}

export default async function Blogs() {
  const blogPostsList = await extractAllBlogs();

  return <BlogList lists={blogPostsList}/>;
}