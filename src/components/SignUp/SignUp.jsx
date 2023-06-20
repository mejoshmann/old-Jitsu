import { Link } from "react-router-dom";

function SignUp() {
    return(
        <>
        <div className="signup">
            <div className="signup__logo">
                <h1 className="signup__heading">U-Jitsu</h1>
            </div>
            <div className="signup__inputs">
                <form action="post" className="signup__form">
                    <label htmlFor="email" className="signup__eLabel">
                        <input type="text" className="signup__email" placeholder="Email"/>
                    </label>
                    <label htmlFor="password" className="signup__ePassword">
                        <input type="text" className="signup__password" placeholder="Password" />
                        <p className="signup__forgot">Forgot password</p>
                    </label>
                </form>
            </div>
            <div className="signup__buttons">
                <button className="signup__login">Login</button>
                <button className="signup__create">Create Account</button>
            </div>
            <div className="signup__terms">
              <Link><p className="signup__termsCond">Terms & Conditions and Privacy Policy</p></Link>
            </div>
        </div>
        </>
    )
}

export default SignUp;