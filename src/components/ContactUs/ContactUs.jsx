import React from 'react';
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={classes.background}>
      <div className={classes.card}>
        <div className={classes.card2}>
          <h1 className={classes.heading}>Our Sponsors</h1>
          <div className={classes.sponsors}>
            <div className={classes.sponsor}><h2>Prinu Vinod Nair</h2></div>
            <div className={classes.sponsor}></div>
            <div className={classes.sponsor}></div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
