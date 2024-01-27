// import BlogList from "@/components/blogs/blog-list";


import BlogList from "../components/blogs/blog-list";

async function extractAllBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog-post/get-all-posts`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();
  // console.log(data)

  if (data.success) return data.data;
}

// console.log(process.env.NEXTAUTH_URL)

export default async function Blogs() {
  const blogPostsList = await extractAllBlogs();
  console.log(blogPostsList)

  return <BlogList lists={blogPostsList}/>;
}