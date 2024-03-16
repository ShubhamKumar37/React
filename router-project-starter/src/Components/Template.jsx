import FrameImg from '../assets/frame.png';
import SignupForm from'./SignupForm';
import LoginForm from'./LoginForm';

export default function Template(Props) {
    return (
        <div>
            <div>
                <h1>{Props.Title}</h1>
                <div>
                    <p>{Props.Desc1}</p>
                    <p>{Props.Desc2}</p>
                </div>

                {
                    Props.FormType === 'signup' ?
                    (<SignupForm SetIsLogged={Props.SetIsLogged}></SignupForm>):
                    (<LoginForm SetIsLogged={Props.SetIsLogged}></LoginForm>)
                }

                <div>
                    <div></div>
                    <div>OR</div>
                    <div></div>
                </div>

                <button>
                    <div>
                        Signup with google
                    </div>
                </button>
            </div>

            <div>
                <img src={FrameImg} alt='Grid' loading='lazy' width={558} height={504}></img>
                <img src={Props.Image} alt='Person' loading='lazy' width={558} height={490}></img>
            </div>
        </div>
    );
}