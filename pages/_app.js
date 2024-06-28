import React from 'react'
import Stack from "@/components/Stack/stack"
import Title from '@/components/Title/Title'
import Style from '../Styles/app.module.css'
import Pro from "@/components/Pro/Pro"
import Bottom from '@/components/Bottom/Bottom'


const _app = () => {
  return (
    <div className={Style.background}>


      <Title/>
      <Stack/>
      <Pro/>
      <Bottom/>
      
      
      
      </div>
      
  )
}

export default _app