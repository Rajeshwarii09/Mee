import React from 'react';
// import { FaFigma, FaCircuitBoard, FaRemix, FaHardHat, FaPalette, FaEnvelopeOpenText } from 'react-icons/fa';


import Styles from "./Tools.module.css";

const Tools = () => {
  return (
   
        
    <div className={Styles.container}>
     <div>
  <div className={Styles.icon_f}>Figma</div>
  <div className={Styles.icon_v}>Verilog</div>
  <div className={Styles.icon_r}>Remix</div>
  <div className={Styles.icon_h} >Hardhat</div>
  <div className={Styles.icon_c}>Canva</div>
  <div className={Styles.icon_p}>Postman</div>
  <div className={Styles.icon_m}>Matlab</div>
</div>
    </div>
    
  );
};

export default Tools;