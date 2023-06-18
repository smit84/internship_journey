import React from "react";
import QRCode from "react-qr-code";
import clean from "../styles/Clean.module.css";
import standard from "../styles/Standard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Display(props) {
  const qrCodeSize = 100;
  let templateStyle = clean;

  // Applying styles based on the selected template
  if (props.template === "clean") {
    templateStyle = clean;
  } else if (props.template === "standard") {
    templateStyle = standard;
  }
  const frontCardContent = (
    <>
      <div className={templateStyle.cfleft}>
        <h2 style={{ color: `${props.darkColor}` }}>
          {props.companyName || "<name of your company>"}
        </h2>
        <span>
          {(props.logo && <FontAwesomeIcon icon={props.logo}></FontAwesomeIcon>) ||
            "<company logo>"}
        </span>
      </div>
      <hr />
      <div className={templateStyle.cfright}>
        <div className="fname">
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          <h3>{props.fullName || "<Full Name>"}</h3>
        </div>
        <p className="cf-designation">{props.designation || "<Designation>"}</p>
        <p className="cf-cn">{props.contactNumber || "<Contact Number>"}</p>
        <p className="cf-email">{props.emailAddress || "<Email Address>"}</p>
      </div>
    </>
  );

  const backCardContent = (
    <>
      <h2>{props.companyName || "<name of your company>"}</h2>
      <div className="qrcode">
        <QRCode value={props.website} size={qrCodeSize} />
      </div>
    </>
  );

  return (
    <div className="display ">
      <div className={templateStyle.card} id="card">
        <div
          className={templateStyle.cardfront}
          style={{
            backgroundColor: `${props.mainColor}`,
            color: `${props.lightColor}`
          }}
        >
          {frontCardContent}
        </div>
        <div
          className={templateStyle.cardback}
          style={{
            color: `${props.mainColor}`,
            backgroundColor: `${props.darkColor}`
          }}
        >
          {backCardContent}
        </div>
      </div>

      <div className="display-btn">
        <div className="reset-btn-wrapper">
          <button className="reset-btn" onClick={props.handleReset}>
            Reset
          </button>
        </div>
        <div className="download-btn-wrapper">
          <button className="download-btn" onClick={props.handleDownload}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
