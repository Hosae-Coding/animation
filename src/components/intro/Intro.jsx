import './intro.css';
import React from 'react';

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
                     <div className="i-title-item">Maker</div>
                     <div className="i-title-item">Creator</div>
                  </div>
               </div>
               <div className="i-desc">this is decription section</div>
            </div>
         </div>
         <div className="i-right"> <img src="" alt="" /></div>
      </div>
   );
};

export default Intro;
