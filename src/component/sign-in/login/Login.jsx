import React from "react";
import "./login.css";
import "./login-media.css";
import { Link } from "react-router-dom";
import { ReactComponent as Apple } from "./apple.svg";
import { ReactComponent as Facebook } from "./facebook.svg";
import { ReactComponent as Google } from "./google.svg";

function Login() {
	return (
		<div className="login">
			<h1>Log In</h1>
			<Link className="login-p" to="../account/register">
				<span>No account yet?</span>
				<span>Sign up</span> <span> to register</span>
			</Link>
			<form action="" className="login-form">
				<input
					type="text"
					name="password"
					className="login-username"
					placeholder="Email/Username"
				/>
				<input
					type="password"
					name="password"
					className="login-password"
					placeholder="Password"
				/>
				<p>
					Forgot password?<Link> Request new password</Link>
				</p>

				<button type="submit">Login</button>
			</form>

			<div className="alternative-login">
				<p className="alternative-login-p">Or Login with</p>
				<div className="alternative-login-icon">
					<div className="alternative-login-icon-div">
						<Link>
							<Facebook />
						</Link>
						<Link>
							<Google />
						</Link>
						<Link>
							<Apple />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
