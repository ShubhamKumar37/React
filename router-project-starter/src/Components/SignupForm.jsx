import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function SignupForm(Props) {
    const Navigate = useNavigate();
    const [PassField, SetPassField] = useState(false);
    const [ConPassField, SetConPassField] = useState(false);
    const [FormData, SetFormData] = useState(
        {
            FirstName: "", LastName: "", Email: "", Password: "", ConfirmPassword: ""
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
        if(FormData.Password !== FormData.ConfirmPassword)
        {
            toast.error("Password does not match");
            return ;
        }
        Props.SetIsLogged(true);
        toast.success("Signed up successfully");
        Navigate('/dashboard');
    }

    return (
        <div>
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

            <form onSubmit={SubmitHandler}>
                <div>
                    <label>
                        <p>First Name <sup>*</sup></p>
                        <input type="text"
                            placeholder="Enter your first name"
                            value={FormData.FirstName}
                            onChange={ChangeHandler}
                            name="FirstName" required></input>
                    </label>
                    <label>
                        <p>Last Name <sup>*</sup></p>
                        <input type="text"
                            placeholder="Enter your last name"
                            value={FormData.LastName}
                            onChange={ChangeHandler}
                            name="LastName" required></input>
                    </label>
                </div>
                <label>
                    <p>Email Address <sup>*</sup></p>
                    <input type="email"
                        placeholder="Enter your email"
                        value={FormData.Email}
                        onChange={ChangeHandler}
                        name="Email" required></input>
                </label>

                <div>
                    <label>
                        <p>Create Password <sup>*</sup></p>
                        <input type={PassField === false ? "password" : "text"} name="Password" onChange={ChangeHandler} placeholder="Enter your password" value={FormData.Password} required></input>

                    </label>
                    <span className="cursor-pointer" onClick={() => SetPassField((Flag) => !Flag)}>
                        {
                            PassField === false ?
                                (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) :
                                (<AiOutlineEye></AiOutlineEye>)
                        }
                    </span>
                    <label>
                        <p>Confirm Password <sup>*</sup></p>
                        <input type={ConPassField === false ? "password" : "text"} name="ConfirmPassword" onChange={ChangeHandler} placeholder="Confirm password" value={FormData.ConfirmPassword} required></input>

                    </label>
                    <span className="cursor-pointer" onClick={() => SetConPassField((Flag) => !Flag)}>
                        {
                            ConPassField === false ?
                                (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>) :
                                (<AiOutlineEye></AiOutlineEye>)
                        }
                    </span>
                </div>

                <button>Create Account</button>
            </form>

        </div>
    );
}