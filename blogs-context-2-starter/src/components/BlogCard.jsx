import { NavLink } from "react-router-dom";


export default function BlogCard({post}) {
    return (
        <div>
            <NavLink to={`/blog/${post.id}`}><span>{post.title}</span></NavLink>

            <div>By 
                <span>{post.author}</span>
                on {" "} 
                <NavLink to={`/blog/${post.category}`}><span>{post.category}</span></NavLink>
            </div>
            <p>Posted on {post.date}</p>

            <p>{post.content}</p>
            <div>
                {
                    post.tags.map((Tag, index) =>
                    {
                        return (<NavLink to={`/blog/${Tag.replaceAll(" ", "-")}`} key={index}><span>{`#${Tag}`}</span></NavLink>)
                    })
                }
            </div>
        </div>
    );
}