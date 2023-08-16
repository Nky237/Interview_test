import React from "react";
import Link from "next/link";
import Image from "next/image";
import LoginImage from "../../assets/sign.png";
const Login = () => {
  return (
    <div className="Login_Page">
      <div className="Loginy">
        <div className="Logintext">
          <h1>We've Missed You</h1>
          <p>
            Kindly signin and get first access to the very best, community and
            unlock more opportunities.
          </p>
          <form action="">
            <div>
              <label>Email</label>
              <input type="email" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" />
            </div>
            <button className="colored">Login</button> <br />
            <Link href="#">Forgot username or password?</Link> <br />
            <small>
              Don't have an account?
              <Link
                href="/pages/signup"
                style={{ color: "#0018FF", paddingLeft: "5px" }}
              >
                Sign up
              </Link>
            </small>
          </form>
        </div>
        <div className="Loginimage">
          <Image src={LoginImage} alt="loginImage" height={100} width={100} />
        </div>
      </div>
      <Link href="/">Home</Link>
    </div>
  );
};

export default Login;
