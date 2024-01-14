import React from "react";
import style from "../stylings/NavBar.module.css";
import LoginButton from "./utils/LoginButton";
import RegisterButton from "./utils/RegisterButton";

const NavBar = () => {
  return (
    <div className={style.body}>
      <div className={style.left}>
        <h1 className={style.heading}>Linkly</h1>
      </div>
      <div className={style.right}>
        <LoginButton />
        <RegisterButton />
      </div>
    </div>
  );
};

export default NavBar;
