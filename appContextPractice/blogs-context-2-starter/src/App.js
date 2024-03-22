import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { Route, Routes } from "react-router-dom";
export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    // Fetch the inital Blogposts data
    fetchBlogPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/blog/:blogId" element={<BlogPage></BlogPage>}></Route>
      <Route path="/categories/:category" element={<CategoryPage></CategoryPage>}></Route>
      <Route path="/tags/:tag" element={<TagPage></TagPage>}></Route>
    </Routes>
  );
}
