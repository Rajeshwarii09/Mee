import React from 'react'
import Style from "./Title.module.css" 
import images from "../../public/img"
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { SiMicrosoftoutlook } from 'react-icons/si';


const Title = () => {
	return (
		<div className={Style.me}>
		<div className={Style.profile1}>
		
			 <div className={Style.profile_account}>
				  <h1>RAJESHWARI</h1>
			 </div>
			 <div className={Style.des}>
				<h4>COURAGE TO BE...   </h4>
			 </div>
			 </div>
			 <div className={Style.profile2}>
				<h3>Let's connect</h3>
				<div className={Style.icon}>
            <a href="" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon instagram" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon linkedin" />
					 </a>
			</div>
			<div className={Style.icon}>
          
            <a href="" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="social-icon discord" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane className="social-icon telegram" />
            </a></div>
				<div className={Style.icon}>
            <a href="" target="_blank" rel="noopener noreferrer">
                <SiGmail className="social-icon gmail" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
                <SiMicrosoftoutlook className="social-icon microsoftoutlook" />
            </a>

				
				
        </div>
		 
		  </div>
		
		</div>
		
  );
}

export default Title;