import React from "react";
import style from "./Hero.module.css";
function Hero() {
  return (
    <>
      <div className={style.hero}>
        <div className={style.herocontain}>
          <h1>
            Want anything to be <br />
            easy with LaslesVPN
          </h1>
          <p>
            Provide a network for all your needs with ease and fun using
            LaslesVPN <br /> discover interesting features from us.
          </p>
          <a href="#" className={style.getstart}>
            Get Started
          </a>
        </div>
        <div className={style.heroimage}></div>
      </div>
      <div className={style.infocontainer}>
        <div className={style.info}>
          <div className={style.icon1}></div>
          <div>
            <div className={style.number}>
              <h2>90+</h2>
            </div>
            <div className={style.text}>Users</div>
          </div>
        </div>
        <div className={style.info}>
          <div className={style.icon2}></div>
          <div>
            <div className={style.number}>
              <h2>30+</h2>
            </div>
            <div className={style.text}>Locations</div>
          </div>
        </div>
        <div className={style.info}>
          <div className={style.icon3}></div>
          <div>
            <div className={style.number}>
              <h2>50+</h2>
            </div>
            <div className={style.text}>Servers</div>
          </div>
        </div>
      </div>
      <div className={style.hero}>
        <div className={style.heroimage2}></div>
        <div className={style.herocontain}>
          <h1>
            We Provide Many
            <br /> Features You Can Use
          </h1>
          <p>
            You can explore the features that we provide with fun and
            <br /> have their own functions each feature.
          </p>
          <div className={style.groupicon}>
            <p>Powerfull online protection.</p>
          </div>
          <div className={style.groupicon}>
            <p>Internet without borders.</p>
          </div>
          <div className={style.groupicon}>
            <p>Supercharged VPN</p>
          </div>
          <div className={style.groupicon}>
            <p>No specific time limits.</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
