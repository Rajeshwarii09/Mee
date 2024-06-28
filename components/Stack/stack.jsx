import React from 'react'
import Tech from './Tech/Tech'
import Language from './Language/Language'
import Style from "./stack.module.css"
import Tools from './Tools/Tools'



const stack = () => {
  return (
	 <div className={Style.main}>
		<Tech/>
		<Language/>
		<Tools/>
		
	 </div>
  )
}

export default stack