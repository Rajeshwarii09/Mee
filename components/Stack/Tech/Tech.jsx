import React from 'react';
import Style from "./Tech.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMdb } from '@fortawesome/free-brands-svg-icons';
import { 
  faReact, 
  faNodeJs, 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faBootstrap, 
  faFontAwesome,
  faNode,
  faDatabase,
  faServer,
  faWind,
  
} from '@fortawesome/free-brands-svg-icons';

const Tech = () => {
  return (

    <div className={Style.tech_container}>
		<div className={Style.heading}>
			Development
		</div>
      <div className={Style.tech_item}>
        <FontAwesomeIcon icon={faReact} className={Style.tech_icon_r}  />
        <span>ReactJS</span>
      </div>
      <div className={Style.tech_item}>
        <FontAwesomeIcon icon={faNodeJs} className={Style.tech_icon_n} />
        <span>Node.js</span>
      </div>
      <div className={Style.tech_item}>
        <FontAwesomeIcon icon={faMdb} className={Style.tech_icon_m} />
        <span>MongoDB</span>
      </div>
      
      <div className={Style.tech_item}>
        <FontAwesomeIcon icon={faServer} className={Style.tech_icon_e}/>
        <span>Express.js</span>
      </div>
      <div className={Style.tech_item}>
        <FontAwesomeIcon icon={faBootstrap} className={Style.tech_icon_b} />
        <span>Bootstrap</span>
      </div>
      <div className={Style.tech_item}>
        <FontAwesomeIcon icon={faHtml5} className={Style.tech_icon_h} />
        <span>HTML</span>
      </div>
      <div className={Style.tech_item}>
        <FontAwesomeIcon icon={faCss3Alt} className={Style.tech_icon_c} />
        <span>CSS</span>
      </div>
      <div className={Style.tech_item}>
        <FontAwesomeIcon icon={faJs} className={Style.tech_icon_j} />
        <span>JavaScript</span>
      </div>
      <div className={Style.tech_item}>
        <FontAwesomeIcon icon={faWind} className={Style.tech_icon_t} />
        <span>Tailwind CSS</span>
      </div>
      <div className={Style.tech_item}>
        <FontAwesomeIcon icon={faFontAwesome} className={Style.tech_icon} />
        <span>Font Awesome</span>
      </div>
    </div>


  );
};

export default Tech;