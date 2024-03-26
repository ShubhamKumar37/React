import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

export default function Home()
{ 
    return (
        <div>
            <Header></Header>
            <Blogs></Blogs>
            <Pagination></Pagination>
        </div>
    );
}