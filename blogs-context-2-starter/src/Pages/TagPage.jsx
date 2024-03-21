import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";


export default function TagPage()
{

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1);
    return (
        <div>
            <Header />
            <div>
                <button onClick={() => navigation(-1)}></button>
                <span>#{tag}</span>

            </div>
            <Blogs></Blogs>

            <Pagination />
        </div>
    );
}