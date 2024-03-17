import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

export default function LoginForm({ SetIsLogged }) {

    const [FormData, SetFormData] = useState({
        Email: "", Password: ""
    });
    const [IsVisible, SetIsVisible] = useState(false);

    function ChangeHandler(Event) {
        SetFormData((Prev) => {
            return {
                ...Prev,
                [Event.target.name]: Event.target.value
            }
        });
    }
    console.log(FormData);

    return (
        <form>
            <label>
                <p>Email Addreass <sup>*</sup></p>
                <input type="email" name="Email" placeholder="Enter your email" onChange={ChangeHandler}></input>
            </label>

            <div>

                <label>
                    <p>Password <sup>*</sup></p>
                    <input type={IsVisible === true ? "text" : "password"} name="Password" placeholder="Enter password" onChange={ChangeHandler}></input>

                </label>
                <span className="cursor-pointer" onClick={() => {
                    SetIsVisible(!IsVisible)
                }}>
                    {
                        IsVisible === true ?
                        <AiOutlineEye></AiOutlineEye>:
                        <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                    }
                </span>
            </div>

            <div>
                <button>Login</button>
            </div>

        </form>
    );
}