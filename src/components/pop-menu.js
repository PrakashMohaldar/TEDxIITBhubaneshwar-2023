import React, { useContext, useRef } from "react";
import { Link as LinkR} from "react-router-dom";
import { Link as LinkS} from "react-scroll"
import { MenuContext } from '../context/menu-context';
import { LogoImage, NavLinks } from "../data/index";


const PopupMenu = () => {
    const { menuStatus, updateMenuStatus} = useContext(MenuContext)
    const menuEl = useRef(null)
    const handleMenuClick = (e) => {
        e.preventDefault();
        updateMenuStatus(!menuStatus);
      };

      return (
        <div className="show-overlay-nav">
        <div className="popup popup__menu">
          <a
            href="/#"
            id="close-popup"
            onClick={handleMenuClick}
            className="close-popup"
          ></a>
          <div className="container mobileContainer">
            <div className="row">
              <div className="col-lg-12 text-left">
                <div className="logo2">
                  <LinkR to="/">
                    
                      <img src={LogoImage.light} alt="" />
                    
                  </LinkR>
                  
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="popup-inner">
                  <nav
                    className="popup-menu dl-menu__wrap text-center"
                    ref={menuEl}
                  >
                    <ul>  
                       <li key="0" className="">
                          <LinkS to={NavLinks[0].url} spy={true} smooth={true} offset={0} duration={500} onClick={handleMenuClick}>
                            {NavLinks[0].name}
                          </LinkS>
                       </li>
                       <li key="1" className="">
                          <LinkS to={NavLinks[1].url} spy={true} smooth={true} offset={-20} duration={500} onClick={handleMenuClick}>
                            {NavLinks[1].name}
                          </LinkS>
                       </li>
                       <li key="2" className="">
                          <LinkS to={NavLinks[2].url} spy={true} smooth={true} offset={0} duration={500} onClick={handleMenuClick}>
                            {NavLinks[2].name}
                          </LinkS>
                       </li>
                       <li key="3" className="">
                          <LinkS to={NavLinks[3].url} spy={true} smooth={true} offset={-120} duration={500} onClick={handleMenuClick}>
                            {NavLinks[3].name}
                          </LinkS>
                       </li>
                       <li key="4" className="">
                          <LinkR to={NavLinks[4].url}>
                            {NavLinks[4].name}
                          </LinkR>
                       </li>
                       <li key="5" className="">
                          <LinkS to={NavLinks[5].url} spy={true} smooth={true} offset={-120} duration={500} onClick={handleMenuClick}>
                            {NavLinks[5].name}
                          </LinkS>
                       </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
}
export default PopupMenu