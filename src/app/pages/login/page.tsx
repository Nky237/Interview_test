import React from "react";
import Link from "next/link";
import Image from "next/image";
import LoginImage from "../../assets/sign.png";
const Login = () => {
  return (
    <div className="Login_Page">
      <div className="Loginy">
        <div className="Logintext">
          <h1>We&apos;ve Missed You</h1>
          <p>
            Kindly sign in and get first access to the very best, community and
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
            <div className="break">
              <button className="colored">Login</button>
              <Link href="/pages/forgot">Forgot username or password?</Link>
              <small>
                Don&apos;t have an account?
                <Link
                  href="/pages/signup"
                  style={{ color: "#0018FF", paddingLeft: "5px" }}
                >
                  Sign up
                </Link>
              </small>
            </div>
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
