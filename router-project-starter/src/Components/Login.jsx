import Template from "./Template";
import LoginImg from "../assets/login.png";

export default function Login(Props)
{
    return (
        <Template
            Title="Join the million learning to code with StudyNotation for free"
            Desc1="Build skill for today, tommorrow and beyond"
            Desc2="Education to future-proof your carrer"
            Image={LoginImg}
            FormType="login"
            SetIsLogged={Props.SetIsLogged}
        ></Template>
    );
}