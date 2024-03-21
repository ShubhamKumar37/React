import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage";
import Home from "./Pages/Home";
import TagPage from "./Pages/TagPage";  



export function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const [SerachParams, SetSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = SerachParams.get('page') ?? 1;
    if(location.pathname.includes('tags'))
    {
      const tag = location.pathname.split('/').at(-1).replaceAll("-", "");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes('categories'))
    {
      const category = location.pathname.split('/').at(-1).replaceAll("-", "");
      fetchBlogPosts(Number(page), null, category);
    }
    else
    {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/blog/:blogId" element={<BlogPage />}></Route>
      <Route path="/Categories/:category" element={<CategoryPage />}></Route>
      <Route path="/tags/:tag" element={<TagPage/>}></Route>
    </Routes>
  );
}
