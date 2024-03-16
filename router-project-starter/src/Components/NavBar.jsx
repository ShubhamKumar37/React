import {Link} from 'react-router-dom';
import logo from "../assets/Logo.svg";

export default function NavBar(Props)
{
    return (
        <div className='relative flex flex-row justify-evenly'>
            <Link to='/'>
                <img src={logo} alt='This is logo' width={160} height={40} loading='lazy'></img>
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
                {Props.IsLogged === false &&
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                }
                {Props.IsLogged === false &&
                    <Link to='/signup'>
                        <button >Signup</button>
                    </Link>
                }
                {Props.IsLogged === true &&
                    <Link to='/'>
                        <button onClick={() => Props.SetIsLogged(!Props.IsLogged)}>
                        {/* onClick={() => Props.SetIsLogged((Props.IsLogged) = !Props.IsLogged)} */}
                            Log out</button>
                    </Link>
                }
                {Props.IsLogged === true &&
                    <Link to='/dashboard'>
                        <button>Dashboard</button>
                    </Link>
                }
            </div>
        </div>
    );
}