import Blogs from "../components/Blogs";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";

export default function CategoryPage()
{

    const location = useLocation();
    const navigate = useNavigate();
    const Category = location.pathname.split('/').at(-1);

    return (
        <div>
            <Header />
            <div>
                <button onClick={navigate(-1)}>Back</button>
                <span>#{Category}</span>
            </div>

            <Blogs></Blogs>
            <Pagination></Pagination>
        </div>
    );
}