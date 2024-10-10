import React from 'react';

const ContactUs = () => (
  <section className="contactUs" id="contactUs">
    <div className="container">
      <div className="contactCard">
        <h2 className="sectionHeader">Contact Us</h2>
        <form className="form">
          <div className="rows">
            <div className="row">
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            </div>
            <div className="row">
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
            </div>
          </div>
          <div className="rows">
            <div className="row">
              <label htmlFor="mail">Mail</label>
              <input type="text" id="mail" name="mail" placeholder="Your mail.." />
            </div>
            <div className="row">
              <label htmlFor="mobile">Mobile No.</label>
              <input type="text" id="mobile" name="mobile" placeholder="Your mobile no.." />
            </div>
          </div>
          <div className="rows">
            <div className="row">
              <label htmlFor="message">Message Box</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <div className="rows">
            <div className="row">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default ContactUs;
