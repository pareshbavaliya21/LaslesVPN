import React from "react";
import style from "./Header.module.css";
function Header() {
  return (
    <div className={style.maincontainer}>
      <div className={style.logo}></div>
      <div className={style.navitem}>
        <a href="#" className={style.navitemlink}>
          About
        </a>
        <a href="#" className={style.navitemlink}>
          Feature
        </a>
        <a href="#" className={style.navitemlink}>
          Pricing
        </a>
        <a href="#" className={style.navitemlink}>
          Testimonials
        </a>
        <a href="#" className={style.navitemlink}>
          Help
        </a>
      </div>
      <div className={style.button}>
        <a href="#" className={style.signin}>
          Sign In
        </a>
        <a href="#" className={style.signup}>
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default Header;
