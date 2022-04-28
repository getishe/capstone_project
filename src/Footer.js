import React from 'react';
import footersvg from './image/logo.svg';
import './Footer.css';
function Footer() {
  return (
    <div className="footer"> 
    {/* d__flex align__items__center justify__content__space__between pz-10" style={{"padding":"10px 20px"}} */}
<img src={footersvg} alt="" className="footer__svg pointer" />
      <span className="copyright">Copyright :&copy 2022 programmer By Getahune Wondemenhu. All Right Reserved. </span>
    </div>
  )
}

export default Footer;