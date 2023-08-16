import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import React from "react";

const Home = () => {
  return (
    <div className="center">
      <h1>WELCOME TO OUR PAGE </h1>
      <Link href="/pages/login">Login</Link>
    </div>
  );
};

export default Home;
