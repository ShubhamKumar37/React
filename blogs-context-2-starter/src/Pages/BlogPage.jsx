import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import BlogCard from "../components/BlogCard";


export default function BlogPage()
{
    const [Blog, SetBlog] = useState(null);
    const [RelatedBlog, SetRelatedBlog] = useState([]);
    const Location = useLocation();
    const Navigate = useNavigate();
    const {Loading, SetLoading} = useContext(AppContext);
    const BlogId = Location.pathname.split('/').at(-1);

    async function FetchRelatedBlog()
    {
        // SetLoading(true);
        let Url = `${baseUrl}?blogId=${BlogId}`;
        try
        {
            const Response = await fetch(Url);
            const Obj = await Response.json();
            SetBlog(Obj.blog);
            console.log(Obj);
            SetRelatedBlog(Obj.relatedBlog);
        }
        catch(Error)
        {
            console.log("Buddy apka error aye han"); 
            SetBlog(null);
            SetRelatedBlog([]);
        }
        // SetLoading(false);
    }

    useEffect(() =>
    {
        if(BlogId)
        {
            FetchRelatedBlog();
        }
    }, [Location.pathname])
    
    return (
        <div>
            <button onClick={() => Navigate(-1)}>Go Back</button>

            {
                Loading ? (<div>Loading</div>):
                Blog ?
                 (<div>
                    <BlogCard post={Blog}></BlogCard>
                    <h2>Related Blogs</h2>

                    {
                        RelatedBlog.map((post) =>
                        {
                           return (<BlogCard key={post.id} post={post} />)
                        })
                    }
                </div>) : (<div>No Blog Available</div>)
            }
        </div>
    );
}