import { FormControlItem, MenuItem, Option } from "./types";


export const menuItems: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "category",
    label: "Category",
    path: "/category/application",
  },
  {
    id: "blogs",
    label: "Blogs",
    path: "/blogs",
  },
  {
    id: "search",
    label: "Search",
    path: "/search",
  },
];

export const categories: Option[] = [
  {
    value: "technology",
    label: "Technology",
  },
  {
    value: "hobby",
    label: "Hobby",
  },
  {
    value: "travel",
    label: "Travel",
  },
  {
    value: "education",
    label: "Education",
  },
  {
    value: "others",
    label: "Others",
  },
];

export const formControls: FormControlItem[] = [
  {
    id: "title",
    label: "Title",
    placeholder: "Enter Blog Title",
    type: "text",
    component: "input",
    options: [],
  },
  {
    id: "description",
    label: "Description",
    placeholder: "Enter Blog Description",
    type: "text",
    component: "textarea",
    options: [],
  },
  {
    id: "category",
    label: "Category",
    placeholder: "Choose Blog Category",
    type: "",
    component: "select",
    options: categories,
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyCwP8RrJzdyIR6CaueweLYVm8xvTboKy-o",
  authDomain: "nextjs-blog-typescript-2024.firebaseapp.com",
  projectId: "nextjs-blog-typescript-2024",
  storageBucket: "nextjs-blog-typescript-2024.appspot.com",
  messagingSenderId: "921229855471",
  appId: "1:921229855471:web:ddf87a130525c9cec6691a"
};

export const initialBlogFormData = {
 title :  '',
 description : '',
 image : '',
 category : '' 
}