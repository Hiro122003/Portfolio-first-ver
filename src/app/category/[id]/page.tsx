import CategoryList from "@/app/components/category";


async function getAllListsByCategory(getId: string) {
  // console.log(getId,"getID")
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/category/${getId}`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();
  
  // console.log(data,"data")

  if (data.success) return data.data;
}

export default async function Category({ params }: { params: any }) {
  const { id } = params;

  const getAllList = await getAllListsByCategory(id);

  return <CategoryList list={getAllList} />;
}
