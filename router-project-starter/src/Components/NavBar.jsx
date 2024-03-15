import {Link} from 'react-router-dom';
import logo from "../assets/Logo.svg";
import { toast } from 'react-hot-toast';

export default function NavBar(Props)
{
    return (
        <div className='relative flex flex-row justify-evenly'>
            <Link to='/'>
                <img src={logo} width={160} height={40} loading='lazy'></img>
            </Link>

            <nav>
                <ul className='relative flex flex-row gap-5'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className='flex flex-row gap-4'>
                {!Props.IsLogged &&
                    <Link to='/login'>
                        <button onClick={() =>
                        {
                            Props.SetIsLogged(true);
                            toast.success("Logged in successfully");
                        }}>Login</button>
                    </Link>
                }
                {!Props.IsLogged &&
                    <Link to='/signup'>
                        <button onClick={() =>
                        {
                            Props.SetIsLogged(true);
                            toast.success("Signed up successfully");
                        }}>Signup</button>
                    </Link>
                }
                {Props.IsLogged &&
                    <Link to='/'>
                        <button onClick={() =>
                        {
                            Props.SetIsLogged(false);
                            toast.success("Logged out successfully");
                        }}>Log out</button>
                    </Link>
                }
                {Props.IsLogged &&
                    <Link to='/dashboard'>
                        <button onClick={() =>
                        {
                            Props.SetIsLogged(false);
                        }}>Dashboard</button>
                    </Link>
                }
            </div>
        </div>
    );
}