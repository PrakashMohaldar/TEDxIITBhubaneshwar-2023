import React, {Fragment, useContext, useState, useEffect } from "react";
import { SpeakerContext } from "../context/speaker-context";
import { MenuContext } from "../context/menu-context";
import PopupMenu from './pop-menu'
import SpeakerPopup from "./speaker-popup";
import { Link as ScrollLink } from 'react-scroll';


const Layout = ({PageTitle, children }) => {
    const { speakerTabStatus } = useContext(SpeakerContext);
    const { menuStatus } = useContext(MenuContext);
    const [scrollTop, setScrollTop] = useState(false);

    const handleScrollTop = () => {
        if (window.scrollY > 70) {
          setScrollTop(true);
        } else if (window.scrollY < 70) {
          setScrollTop(false);
        }
      };

    useEffect(()=>{
        window.addEventListener("scroll", handleScrollTop);
        return () => {
          window.removeEventListener("scroll", handleScrollTop);
        };
    },[scrollTop]);

    return(
        <Fragment>
            <div id="wrapper">{children}</div>
            {true === speakerTabStatus ? <SpeakerPopup/>: null}
            {true === menuStatus ? <PopupMenu/> : null}

            {scrollTop === true ? (
                <ScrollLink
                    to="wrapper"
                    smooth={true}
                    duration={500}
                    id="backToTop"
                    className="scroll-to-top showit"
                    >
                    <i className="fa fa-angle-double-up"></i>
                </ScrollLink>
                ) : null}
        </Fragment>
    );
};

export default Layout;
