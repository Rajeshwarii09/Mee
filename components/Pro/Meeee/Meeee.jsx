import React from 'react'
import Style from "./Meeee.module.css"
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';

const Meeee = () => {
  return (
    <div className={Style.container_main}>
      <div className={Style.picmebox}>
        <img src="/img/pic.jpg" alt={"myimg"} className={Style.picme}/>
      </div>
		<div className={Style.icons}>
		<a href="" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon linkedin" />
					 </a>
					 
					 <a href="" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="social-icon discord" />
            </a>
				<a href="" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon instagram" />
            </a>


		</div>
      <span className={Style.about_me}>
        Hello, I'm Rajeshwari, a pre-final year student at IIT Guwahati. 
        I'm curious and enjoy learning new things. Recently, I've been
        interested in Web3 and blockchain technology. As a front-end 
        developer, I'm now exploring backend development. In my free time
       , I also enjoy creating face-arts. I'm looking forward to meeting 
        others who share my interests and exploring new opportunities.
      </span>
    </div>
  )
}

export default Meeee;