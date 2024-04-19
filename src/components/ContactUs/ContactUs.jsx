import React from 'react';
import classes from "./ContactUs.module.css";
import sponsor1 from "./sponsor1.jpg";
import sponsor2 from "./sponsor2.png";

const ContactUs = () => {
  return (
    <div className={classes.background}>
      <h1 className={classes.heading}>Our Sponsors</h1>
      <div className={classes.card}>
        <div className={classes.card2}>
          <div className={classes.sponsors}>
            <div className={classes.sponsor}>
              <div className={classes.sponsorItem}>
                <img src={sponsor2} alt="sponsor2" className={classes.sponsorImage} />
                <h2><a href='https://www.instagram.com/heavenly__tales?igshhttps://g.co/kgs/3oqbsC6=MTJxOGVoNWY5d28ydQ=='>Heavenly Tales</a></h2>
                <h3>Jeffrey Alex John</h3>
                <h3>Phone : 7012498241</h3>
                <h3>Whatsapp : 9447420312</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.card2}>
          <div className={classes.sponsors}>
            <div className={classes.sponsor}>
              <div className={classes.sponsorItem}>
                <img src={sponsor1} alt="sponsor1" className={classes.sponsorImage} />
                <h2>Annet Elisa Mathew</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
