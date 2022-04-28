import React from 'react';
import './Contact.css';
import  Contactimg from "./image/alexander-kaunas-xEaAoizNFV8-unsplash.jpg"
function Contact() {
  return (
    <div className="Contact component__space" id="Contact">
        <div className="row">
            <div className="col__2">
                <div className="contact__box">
                    <div className="contact__meta">
                        <h1 className="hire__text white">
                            Booking Now
                        </h1>
                        <p className="hire__text white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, dolores.</p>
                        <p className="hire__text white"><strong>+251923452723</strong> or email <strong>admin@Xpress</strong> </p>
                    </div>
                    <div className="input_box">
                        <input type="text" className="contact name" placeholder="Your name *" />
                        <input type="text" className="contact email" placeholder="Your Email *" />
                        <input type="text" className="contact subject" placeholder="write a subject" />   
                         <textarea name="message" id="message"  placeholder="message here"></textarea>
                         <button className="btn contact pointer" type="submit">Contact</button>
                    </div>
                </div>
            </div>
            <div className="col__2">
                <img src={Contactimg} alt="" className="contact__img" />
            </div>
        </div>
    </div>
  )
}

export default Contact;