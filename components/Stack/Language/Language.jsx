import React from 'react';
import Style from './Language.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJs,
  faHtml5,
  faCss3,
  faReact,
  faNodeJs,
  faPython,
  faJava,
  faCsharp,
  faCuttlefish,
  faCode
} from '@fortawesome/free-brands-svg-icons';


const Language = () => {
  return (
    <div className={Style.tech_container}>
		
      <div className={Style.heading}>Languages</div>
      <div className={Style.tech_item}>
        <FontAwesomeIcon icon={faJava} className={Style.tech_icon_j} />
        <span>Java</span>
      </div>
      <div className={Style.tech_item}>
        <FontAwesomeIcon icon={faPython} className={Style.tech_icon_p} />
        <span>Python</span>
      </div>
      <div className={Style.tech_item}>
        <FontAwesomeIcon icon={faCsharp} className={Style.tech_icon_ch} />
        <span>C#</span>
      </div>
      <div className={Style.tech_item}>
        <FontAwesomeIcon icon={faCuttlefish} className={Style.tech_icon_cp} />
        <span>C++</span>
      </div>
      <div className={Style.tech_item}>
        <FontAwesomeIcon icon={faCuttlefish} className={Style.tech_icon_c} />
        <span>C</span>
      </div>
      <div className={Style.tech_item}>
        <FontAwesomeIcon icon={faJs} className={Style.tech_icon_js} />
        <span>JavaScript</span>
      </div>
      <div className={Style.tech_item}>
        <FontAwesomeIcon icon={faHtml5} className={Style.tech_icon_h} />
        <span>HTML</span>
      </div>
      <div className={Style.tech_item}>
        <FontAwesomeIcon icon={faCss3} className={Style.tech_icon_c} />
        <span>CSS</span>
      </div>
		<div className={Style.tech_item}>
        <FontAwesomeIcon icon={faCode} className={Style.tech_icon_s} />
        <span>Solidity</span>
      </div>
      
      
    </div>
  );
};

export default Language;