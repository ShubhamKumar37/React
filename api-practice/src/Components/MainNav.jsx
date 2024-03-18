import NavBar from "./NavBar";
import NavSearch from "./NavSearch";

export default function MainNav() {
    return (
        <div className="border-b border-gray-400">
            <div>
                <NavBar></NavBar>
                <NavSearch></NavSearch>
            </div>
        </div>
    );
}