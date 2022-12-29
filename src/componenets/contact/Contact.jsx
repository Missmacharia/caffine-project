import React, { useState } from "react";
import "./Contact.css";

const DEFAULT_CONTACT_US={
  subject: "",
  email: "",
  message: ""
}

const Contact = () => {

  const [formContact, setFormContact]= useState(DEFAULT_CONTACT_US)

  const [contact, setContact]= useState()

  const handlerChange= (e)=>{
    setFormContact((prev)=>({...prev, [e.target.name]: e.target.value}))
  }

  const handlerSubmit=(e)=>{
    e.preventDefault()
    setContact()
  }

  return (
    <div className="contact_container">
      <form className="contacts">
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={formContact.subject}
          placeholder="message's subject"
          onChange={handlerChange}
          />
        <label>Email Address</label>
        <input
          type="text"
          name="email"
          value={formContact.email}
          placeholder="youremailexample.com"
          onChange={handlerChange}
          />
        <label>Message</label>
        <textarea className="message"
        name="message"
        value={formContact.message}
        placeholder="message"
        onChange={handlerChange}
        ></textarea>
      </form>
      <button onClick={handlerSubmit} className="submit_btn">Submit</button>
    </div>
  );
};

export default Contact;
