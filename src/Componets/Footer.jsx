import React from "react";
import style from "./Footer.module.css";
function Footer() {
  return (
    <>
      <div className={style.footercontainer}>
        <div className={style.webdetails}>
          <ul type="none">
            <li>
              <div className={style.footerlogo}></div>
            </li>
            <li>
              LaslesVPN is a private virtual network that
              <br /> has unique features and has high security.
            </li>
            <li>
              <img src="Socmed/Facebook.png" />
              <img src="Socmed/Instagram.png" />
              <img src="Socmed/Twitter.png" />
            </li>
            <li>©2020LaslesVPN</li>
          </ul>
        </div>
        <div className={style.product}>
          <ul type="none">
            <lh>Product</lh>
            <li>Download</li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Server</li>
            <li>Countries</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className={style.engage}>
          <ul type="none">
            <lh>Engage</lh>
            <li>LaslesVPN ?</li>
            <li>FAQ</li>
            <li>Tutoris</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Tearm of Service</li>
          </ul>
        </div>
        <div className={style.earnmony}>
          <ul type="none">
            <lh>Earn Money</lh>
            <li>Affiliate</li>
            <li>Become Partner</li>
          </ul>
        </div>
      </div>
      <div className={style.subscriptioncontainer}>
        <div className={style.subscriptiontext}>
          <h1>
            Subscribe Now for
            <br /> Get Special Features!
          </h1>
          <p>Let's subscribe with us and find the fun.</p>
        </div>
        <div className={style.subscriptionbutton}>
          <a href="#">Subscribe Now</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
