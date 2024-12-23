import "./Contact.scss";
import Map from "./Map";
import React, { useState } from "react";
import { FaComment, FaEnvelope, FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";

function Contact() {
  const [showForm, setShowForm] = useState(true);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="contact-container">
      <div className="cardContact">
        <div className={`cardContact-innerContact ${showForm ? '' : 'flipped'}`}>
          <div className="cardContact-frontContact">
            <div className="buttonsContactt">
              <button className="messagebtn" onClick={toggleForm}> <span>Message</span></button>
              <button className="messagebtn" onClick={toggleForm}> <span>Information</span> </button>
            </div>
            {showForm ? (
              <div className="contact-form">
                <h2 className=" sendmessage titleHotel font-primary  ">Send Message</h2>
                <form>
                <div className="input-box">
                  
  <label className="namecontact" htmlFor="name"><FaUser className="iconromm" /> Name:</label>
  <input className="inputname" type="text" id="name" name="name" />
</div>
  <div className="input-box">
    <label className="namecontact" htmlFor="email"><FaEnvelope className="iconromm" /> Email:</label>
    <input className="inputname" type="email" id="email" name="email" />
  </div>
  <div className="input-box">
    <label className="namecontact" htmlFor="message"><FaComment className="iconromm" /> Message:</label>
    <textarea className="textcontact" id="message" name="message" />
  </div>
  <button className="btncontact" type="submit">Send</button>
</form>
              </div>
            ) : (
              <div className="contactContact-infoContact">
                <h2 >Contact Information</h2>
                <p> Address: Tunis, Monastir</p>
                <p>Phone: +21654812998</p>
                <p>Email: dkhilisafadev@gmail.com</p>
              </div>
            )}
          </div>
          <div className="cardContact-backContact">
            <div className="buttonsContactt">
              <button className="messagebtn" onClick={toggleForm}><span>Message</span></button>
              <button  className="messagebtn" onClick={toggleForm}> <span>Information</span></button>
            </div>
            <div className="contactContact-infoContact">
              <h2 className="  titleHotel font-primary  ">Contact Information</h2>
              <div className="contactinformation">
  <div className="infoitem">
    <p><FaMapMarkerAlt className="iconromm" /> Address: <span className="spaninformation">Tunis, Monastir</span></p>
  </div>
  <div className="infoitem">
    <p><FaPhone className="iconromm" /> Phone: <span className="spaninformation">+21654812998</span></p>
  </div>
  <div className="infoitem">
    <p><FaEnvelope className="iconromm" /> Email: <span className="spaninformation">bellavista@gmail.com</span></p>
  </div>
</div>

           
            </div>
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
}

export default Contact;
