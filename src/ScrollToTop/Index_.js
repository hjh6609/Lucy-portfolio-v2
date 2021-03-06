import React, { useState , useEffect } from 'react'
import { useWindowScroll } from "react-use"

const ScrollToTop = () => {

    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVsible] = useState(false);

    useEffect(() => {
        if (pageYOffset > 400) {
            setVsible(true);
        } else {
            setVsible(false);
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({top : 0, behavior: "smooth"})

    if (!visible) {
        return false;
    }

    return (
        <div className="scroll-to-top cursor-pointer"
            onClick={scrollToTop}>
            <i className="icon fas fa-chevron-up"></i>
        </div>
    )
}

export default ScrollToTop;
