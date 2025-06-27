import React from "react";
import style from "./Feedback.module.css";
function Feedback() {
  return (
    <>
      <div className={style.feedbackheader}>
        <h2>
          Trusted by Thousands of <br />
          Happy Customer
        </h2>
        <p>
          These are the stories of our customers who have joined us with great
          <br />
          pleasure when using this crazy feature.
        </p>
      </div>
      <div className={style.feedbackcontainer}>
        <div className={style.feedback}>
          <div className={style.feedbackboxheader}>
            <div className={style.feedbackimage}></div>
            <div className={style.feedbackname}>
              <h4>Viezh Robert</h4>
              <p>Warsaw, Poland</p>
            </div>
            <div className={style.feedbackrating}>4.5 </div>
          </div>
          <div className={style.feedbackbody}>
            <p>
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>
        </div>
        <div className={style.feedback}>
          <div className={style.feedbackboxheader}>
            <div className={style.feedbackimage}></div>
            <div className={style.feedbackname}>
              <h4>Viezh Robert</h4>
              <p>Warsaw, Poland</p>
            </div>
            <div className={style.feedbackrating}>4.5 </div>
          </div>
          <div className={style.feedbackbody}>
            <p>
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>
        </div>
        <div className={style.feedback}>
          <div className={style.feedbackboxheader}>
            <div className={style.feedbackimage}></div>
            <div className={style.feedbackname}>
              <h4>Viezh Robert</h4>
              <p>Warsaw, Poland</p>
            </div>
            <div className={style.feedbackrating}>4.5 </div>
          </div>
          <div className={style.feedbackbody}>
            <p>
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
