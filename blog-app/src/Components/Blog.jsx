import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";

export default function Blog()
{
    const {Loading, Blog} = useContext(AppContext);
    return (
        <div>
            {
                Loading === true ? (<Spinner></Spinner>) : 
                (
                    Blog.length === 0 ? (<div>No Post Available for you</div>):
                    (
                        Blog.map((Element) =>
                        (
                            <div keys={Element.id}>

                            </div>
                        ))
                    )
                )
            }
        </div>
    );
}