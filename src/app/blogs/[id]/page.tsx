import BlogDetailsHome from '@/app/components/blogs/blog-details';

interface Param {
  id: string;
}

async function extractBlogDetails(id: string) {
  // console.log(id, 'api id');
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/blog-post/blog-details/${id}`,
    {
      method: 'GET',
      next: {
        revalidate: 0,
      },
    }
  );

  const data = await res.json();

  if (data.success) return data.data;
}

export default async function BlogDetails({ params }: { params: Param }) {
  const { id } = params;

  const blogData = await extractBlogDetails(id);

  return <BlogDetailsHome blogData={blogData} />;
}
