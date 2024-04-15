import React, { useState } from 'react';
import classes from "./ContactUs.module.css";
import Button from "../common/Button/Button";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyCLyNLY48nlaQSZ18TUZ3A4SHhfkP32oRt2xNQ_ePbMFpbnH8gm7Hv68x_nIGvGVLLAA/exec';
    fetch(scriptURL, { method: 'POST', body: new FormData(e.target) })
      .then(response => {
        if (response.ok) {
          alert("Thank you! Your form is submitted successfully.");
          e.target.reset(); // Reset form fields on successful submission
        } else {
          alert("Oops! Something went wrong. Please try again later.");
        }
      })
      .catch(error => console.error('Error!', error.message));
  };

  return (
    <div className={classes.background}>
      <div className={classes.card}>
        <div className={classes.card2}>
          <h1 className={classes.heading}>Contact Us</h1>
          <form onSubmit={handleSubmit} className={classes.userData}>
            <div className={classes.input_container}>
              <label className={classes.input_label}>
                Name<span className={classes.mandatory}>*</span>
              </label>
              <input
                className={classes.input}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={classes.input_container}>
              <label className={classes.input_label}>
                Email<span className={classes.mandatory}>*</span>
              </label>
              <input
                className={classes.input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={classes.input_container}>
              <label className={classes.input_label}>
                Message<span className={classes.mandatory}>*</span>
              </label>
              <textarea
                className={classes.message}
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className={classes.button}>
              <Button label="Send" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
