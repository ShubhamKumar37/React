import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";


export default function BlogPage()
{
    const [Blog, SetBlog] = useState(null);
    const [RelatedBlog, SetRelatedBlog] = useState([]);
    const Location = useLocation();
    const Navigate = useNavigate();
    const {SetLoading} = useContext(AppContext);
    const BlogId = Location.pathname.split('/').at(-1);

    async function FetchRelatedBlog()
    {
        SetLoading(true);
        let Url = `${baseUrl}?BlogId=${BlogId}`
        try
        {
            const Response = await fetch(Url);
            const Obj = await Response.json();
            SetBlog(Obj.blog);
            SetRelatedBlog(Obj.relatedBlogs);
        }
        catch(Error)
        {
            console.log("Buddy apka error aye han"); 
            SetBlog(null);
            SetRelatedBlog([]);
        }
        SetLoading(false);
    }

    useEffect(() =>
    {
        if(BlogId)
        {
            FetchRelatedBlog();
        }
    })
    
    return (
        <div></div>
    );
}