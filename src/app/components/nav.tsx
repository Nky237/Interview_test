import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.webp";
import Ham from "../assets/ham.svg";
import { GoPersonAdd } from "react-icons/go";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="Navy">
    <div className="hide">
      <Image src = {Ham} alt= 'harmburger' height= {30} width = {30}/>
    </div>
      <div className="Nav_Image">
        <Image src={Logo} alt="logo" height={50} width={50} />
      </div>
      <div className="Nav_Button">
        <button className="colored">
          <GoPersonAdd className='icon' />
          Register
        </button>
        <button className="non_colored"><Link href='/pages/login'>Login</Link></button>
      </div>
    </div>
  );
};

export default Nav;
