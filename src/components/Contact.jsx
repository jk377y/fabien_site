import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import cartoon from '../images/cartoonme.png';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7ojuod9', 'template_phfyjtk', form.current, '6Aalk2cnYct2LfguC')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>

    <div id="contact-w-photo-div">
      <h2 id="contact-title">Contact Me</h2>
      <p id="whisper">Send me a message</p>
      <img id="cartoonme" src={ cartoon } alt="Cartoon of Fabien" />
      <form id="contact-form-container" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input required id="input" type="text" name="user_name" />
        <label>Email</label>
        <input required id="input"  type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input id="send-btn" type="submit" value="Send" />
      </form>
    </div>

    </div>
  );
};


export default Contact