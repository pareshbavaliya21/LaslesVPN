import React from "react";
import style from "./Plans.module.css";
function Plans() {
  return (
    <div className={style.mainplan}>
      <div className={style.planeheader}>
        <h2>Choose Your Plan</h2>
        <p>
          Let's choose the package that is best for you and explore it happily
          and
          <br /> cheerfully.
        </p>
      </div>
      <div className={style.allPlans}>
        <div className={style.plancontainer}>
          <div className={style.plan}>
            <div className={style.planimage}></div>
            <h3>Free Plans</h3>
            <ul type="none">
              <li>Unlimited Bandwitch</li>
              <li>Encrypted Connection</li>
              <li>No Traffic Logs</li>
              <li>Works on All Devices</li>
            </ul>
            <div className={style.planvaluse1}>
              <h2>Free</h2>
            </div>
            <a href="#">Select</a>
          </div>
        </div>
        <div className={style.plancontainer}>
          <div className={style.plan}>
            <div className={style.planimage2}></div>
            <h3>Standard Plan</h3>
            <ul type="none">
              <li>Unlimited Bandwitch</li>
              <li>Encrypted Connection</li>
              <li>Yes Traffic Logs</li>
              <li>Works on All Devices</li>
              <li>Connect Anyware</li>
            </ul>
            <div className={style.planvaluse2}>
              <h2>
                $9/ <small>mo</small>
              </h2>
            </div>
            <a href="#">Select</a>
          </div>
        </div>
        <div className={style.plancontainerlast}>
          <div className={style.plan}>
            <div className={style.planimage3}></div>
            <h3>Premium Plan</h3>
            <ul type="none">
              <li>Unlimited Bandwitch</li>
              <li>Encrypted Connection</li>
              <li>Yes Traffic Logs</li>
              <li>Works on All Devices</li>
              <li>Connect Anyware</li>
              <li>Get New Features</li>
            </ul>
            <div className={style.planvaluse3}>
              <h2>
                $12 / <small>mo</small>
              </h2>
            </div>
            <a href="#">Select</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
