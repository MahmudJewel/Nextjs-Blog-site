import { NextPage } from "next";
import { use } from "react";
import { getBlogFileNames } from "../lib/blogs";
// import { getBlogFileNames } from "../lib/blogs";

async function getBlogs() {
  const fileName = getBlogFileNames();
  return fileName;
}


const Page: NextPage = () => {
  const names = use(getBlogs());
  return (
    <div>
      Hello World!!!
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      {JSON.stringify(names)}
      {/* {names} */}
    </div>
  );
};

export default Page;
