import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

export default function SignupForm({ SetIsLogged }) {
    const [FormData, SetFormData] = useState({
        Email: "", Password: "", FirstName: "", LastName: "", ConPassword: ""
    });

    const [IsVisible, SetIsVisible] = useState(false);
    const [IsConVisible, SetIsConVisible] = useState(false);

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
        <div>
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>
            <form>
                <div>
                    <label>
                        <p>First Name <sup>*</sup></p>
                        <input type="text" name="FirstName" placeholder="Enter your first name" onChange={ChangeHandler}></input>
                    </label>
                    <label>
                        <p>Last Name <sup>*</sup></p>
                        <input type="text" name="LastName" placeholder="Enter your last name" onChange={ChangeHandler}></input>
                    </label>

                </div>
                <label>
                    <p>Email Addreass <sup>*</sup></p>
                    <input type="email" name="Email" placeholder="Enter your email" onChange={ChangeHandler}></input>
                </label>

                <div>
                    <div>

                        <label>
                            <p>Create Password <sup>*</sup></p>
                            <input type={IsVisible === true ? "text" : "password"} name="Password" placeholder="Enter password" onChange={ChangeHandler}></input>

                        </label>
                        <span className="cursor-pointer" onClick={() => {
                            SetIsVisible(!IsVisible)
                        }}>
                            {
                                IsVisible === true ?
                                    <AiOutlineEye></AiOutlineEye> :
                                    <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                            }
                        </span>
                    </div>
                    <div>

                        <label>
                            <p>Confirm Password <sup>*</sup></p>
                            <input type={IsConVisible === true ? "text" : "password"} name="ConPassword" placeholder="Confirm password" onChange={ChangeHandler}></input>

                        </label>
                        <span className="cursor-pointer" onClick={() => {
                            SetIsConVisible(!IsConVisible)
                        }}>
                            {
                                IsConVisible === true ?
                                    <AiOutlineEye></AiOutlineEye> :
                                    <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                            }
                        </span>
                    </div>
                </div>
                <div>
                    <button>
                        Signup
                    </button>
                </div>
            </form>
        </div>
    );
}