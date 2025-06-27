import React from "react";
import style from "./Network.module.css";
function Network() {
  return (
    <>
      <div className={style.Networkheader}>
        <h2>
          Huge Global Network
          <br /> of Fast VPN
        </h2>
        <p>
          See LaslesVPN everywhere to make it easier for you when you move
          <br />
          locations.
        </p>
      </div>
      <div className={style.networkimage}></div>
      <div className={style.sponserimage}></div>
    </>
  );
}

export default Network;
