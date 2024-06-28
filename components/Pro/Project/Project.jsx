import React from 'react'
import Style from "./Project.module.css"

const Project = () => {
  return (
	 <div className={Style.container_main}>
		<div className={Style.container}>
			
			<div className={Style.heading}>
				Projects
			</div>
			<div className={Style.pro}>
				<div className={Style.crypto_bot}>
					<span>Crypto Bot</span>
				</div>
				<div className={Style.Ecommerce}>
					<span>E-commerce</span>
				</div>
				<div className={Style.ZealMarket}>
					<span>Zeal Market</span>
				</div>
				<div className={Style.ShortUrl}>
					<span>Short URL</span>
				</div>
				<div className={Style.StudentPortal}>
					<span>Student Portal</span>
				</div>
			</div>

		
		</div>
		
		</div>
	 

  )
}

export default Project;