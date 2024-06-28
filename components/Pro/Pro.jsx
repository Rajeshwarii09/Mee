import React from 'react'
import Meeee from './Meeee/Meeee'
import Project from './Project/Project'
import Style from "./Pro.module.css"

const prome = () => {
  return (
	 <div className={Style.a}>
		<Project/>
		<Meeee/>
	 </div>
  )
}

export default prome;