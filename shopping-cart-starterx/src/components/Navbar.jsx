import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="w-full relative flex justify-between">
      <div>
        <NavLink to='/'>
          <img src="https://imgs.search.brave.com/xJa3smI-ND-jqYHy1vZpLcik3AU86SfXCadVUljI8gY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mcmVl/ZnJvbnRlbmQuY29t/L2Fzc2V0cy9pbWcv/Y3NzLWxvZ29zLzIw/MjMtY3NzLW9ubHkt/ZnJlZWNvZGVjYW1w/LWxvZ28ucG5n" className="w-[5rem] scale-[1.9]"></img>

        </NavLink>
      </div>

      <div>
        <NavLink to='/'>
          <p>Home</p>

        </NavLink>
        <NavLink to='/cart'>
          <FaCartShopping></FaCartShopping>
          </NavLink >

      </div>
    </div>
  );
}