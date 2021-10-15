import './intro.css';
import React from 'react';
import Me from '../../img/me.png';

const Intro = () => {
   return (
      <div className="i">
         <div className="i-left">
            <div className="i-left-wrapper">
               <h2 className="i-intro">Hello! My Name Is</h2>
               <h1 className="i-name">Hogseok Kim(김홍석)</h1>
               <div className="i-title">
                  <div className="i-title-wrapper">
                     <div className="i-title-item">Web Developer</div>
                     <div className="i-title-item">UI/UX Designer</div>
                     <div className="i-title-item">Creator</div>
                     <div className="i-title-item">Traveler</div>
                  </div>
               </div>
               <p className="i-desc">I'm Dreaming a Web Developer</p>
            </div>
         </div>
         <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img" />
         </div>
      </div>
   );
};

export default Intro;
