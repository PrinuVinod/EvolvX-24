import React, { useState, useEffect } from "react";
import classes from "./Popup.module.css";
// import whatsapp from "../../../assets/whatsapp.svg";
// import cross from "../../../assets/cross.svg";
// import GrabBitBtn from "../GrabBitBtn/GrabBitBtn";
// import grabbits from "../../../assets/grabbits.png";
// import { NavLink } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import Button from "../Button/Button";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem("eventPopup");
    if (!popupShown) {
      setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("eventPopup", true);
      }, 8000);
    }
  }, []);

  function handleClose() {
    setShowPopup(false);
  }

  return (
    <>
      {showPopup && (
        <>
          <div className={classes.blur}>
            <div className={classes.card}>
              <img className={classes.grabbit_image} src={logo} alt="logo" />
              <h2 className={classes.text}>Exploring EvolvX is Free!</h2>
              <h1 className={classes.subtext}>No, there is not any entry fee to explore EvolvX 2k24 but to participate in some events you have pay registration fee.</h1>
              <div className={classes.btn_container}>
                <Button
                  onClick={handleClose}
                  link="/events"
                  label="Explore our Events"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Popup;
