import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm(Props) {

    const Navigate = useNavigate();
    const [PassField, SetPassField] = useState(false);
    const [FormData, SetFormData] = useState(
        {
            Email: "", Password: ""
        }
    )

    function ChangeHandler(Event) {
        SetFormData((Prev) => {
            return {
                ...Prev,
                [Event.target.name]: Event.target.value
            }
        });
    }

    function SubmitHandler(Event)
    {
        Event.preventDefault();
        Props.SetIsLogged(true);
        toast.success("Loggedin successfully");
        Navigate('/dashboard');
    }

    return (
        <form onSubmit={SubmitHandler}>
            <label>
                <p>Email Address <sup>*</sup></p>
                <input type="email" name="Email" onChange={ChangeHandler} placeholder="Example@gmail.com" value={FormData.Email} required></input>
            </label>

            <label>
                <p>Password <sup>*</sup></p>
                <input type={PassField === false ? "password" : "text"} name="Password" onChange={ChangeHandler} placeholder="Enter your password" value={FormData.Password} required></input>

            </label>

            <span className="cursor-pointer" onClick={() => SetPassField((Flag) => !Flag)}>
                {
                    PassField === false ?
                        (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) :
                        (<AiOutlineEye></AiOutlineEye>)
                }
            </span>
            <Link to="#">
                <span>Forget Password</span>
            </Link>

            <button>log in</button>
        </form>
    );
}