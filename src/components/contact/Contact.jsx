import React, { useRef, useState } from 'react';
import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Adress from '../../img/address.png';
import emailjs from 'emailjs-com';

const Contact = () => {
   const formRef = useRef();
   const [done, setDone] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
         .sendForm(
            'service_9t6qh4n',
            'template_ufw771p',
            formRef.current,
            'user_Mq00OpVE9ONQbNHQMQeLQ'
         )
         .then(
            (result) => {
               console.log(result.text);
               setDone(true);
            },
            (error) => {
               console.log(error.text);
            }
         );
   };

   return (
      <div className="c">
         <div className="c-bg">
            <div className="c-wrapper">
               <h1 className="c-title">contact</h1>
               <div className="c-left"></div>
               <div className="c-info">
                  <div className="c-info-item">
                     <img src={Phone} alt="" className="c-icon" />
                     123-456-789
                  </div>
                  <div className="c-info-item">
                     <img src={Email} alt="" className="c-icon" />
                     EXAMPLE@gmail.com
                  </div>
                  <div className="c-info-item">
                     <img src={Adress} alt="" className="c-icon" />
                     Canada
                  </div>
               </div>
            </div>
         </div>
         <div className="c-right">
            <div className="c-desc">
               <h1>Share your opinions</h1>
               <form ref={formRef} onSubmit={handleSubmit}>
                  <input type="text" placeholder="Name" name="user_name" />
                  <input
                     type="text"
                     placeholder="Subject"
                     name="user_subject"
                  />
                  <input type="Email" placeholder="E-mail" name="user_Email" />
                  <textarea
                     name="message"
                     placeholder="Message"
                     cols="30"
                     rows="5"
                  />
                  <button className="button">Submit</button>
                  {done && alert('thank you')}
               </form>
            </div>
         </div>
      </div>
   );
};

export default Contact;
