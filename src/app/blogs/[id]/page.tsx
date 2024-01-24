import BlogDetailsHome from '@/app/components/blogs/blog-details';

interface Param {
  id: string;
}

async function extractBlogDetails(id: string) {
  // console.log(id, 'api id atPage.tsx');
  const res = await fetch(
    `${process.env.URL}/api/blog-post/blog-details/${id}`,
    {
      method: 'GET',
      // next: {
      //   revalidate: 0,
      // },
      cache:"no-store"
    }
  );
  if (!res.ok) {
    console.error(`API request failed with status ${res.status}`);
    return;
  }
  const data = await res.json();
  console.log(data,"api response at Page.tsx")
 

  if (data.success) return data.data;
}

export default async function BlogDetails({ params }: { params: Param }) {
  const { id } = params;
  // console.log(id,"params")
  

  const blogData = await extractBlogDetails(id);

  return <BlogDetailsHome blogData={blogData} />;
}
