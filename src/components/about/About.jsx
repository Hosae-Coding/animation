import React from 'react';
import './about.css';
import AboutImg from '../../img/about.png';
import ReactIcon from '../../img/react.png';
import Node from '../../img/node.png';
import Mgdb from '../../img/mgdb.png';
import Aws from '../../img/aws.png';

const About = () => {
   return (
      <div className="a">
         <div className="a-left">
            <div className="a-card-bg"></div>
            <div className="a-card">
               <img src={AboutImg} alt="" className="a-img" />
            </div>
         </div>
         <div className="a-right">
            <h1 className="a-title">About Me!</h1>
            <h2 className="a-sub">My Skills</h2>
            <p className="a-desc">
               <img src={ReactIcon} alt="" />
               <img src={Node} alt="" />
               <img src={Mgdb} alt="" />
               <img src={Aws} alt="" />
            </p>
         </div>
      </div>
   );
};

export default About;
