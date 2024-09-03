import React from "react";
import "./style.css";
import Notfound from "../../assets/images/404.png";
export default function NotFound() {
  return (
    <div className="page-not-found">
      <img src={Notfound} alt="404" />
    </div>
  );
}
