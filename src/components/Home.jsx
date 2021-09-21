import "./Home.css";
import React, { useRef } from "react";
import ScrollToTop from "../ScrollToTop/Index_";
import Contact from "./Contact";
import { Portfolio } from "./Portfolio";
import About from "./About";
import Content from "./Content";
import Footer from "./Footer";

export default function Home() {

    const commentSection = useRef(null);

    const gotoCommentTop = () =>
        window.scrollTo({
            top: commentSection.current.offsetTop,
            behavior: "smooth"
        });
    
    // const scrollToBottom = () =>
    //     window.scrollTo({
    //         top: document.documentElement.scrollHeight,
    //         behavior: "smooth"
    //     });

     const scrollToAbout = () =>
        window.scrollTo({ top: 500, behavior: "smooth" });
    
    const toAbout = useRef(null);
    const toPortfolio = useRef(null);
    const toPortContact = useRef(null);
    
    const goToPort = (id) => {
        console.log("port",id);
        toPortfolio.current.scrollIntoView(
            { behavior: "smooth", block: "start" }
        );
    };

    const goToAbout = (id) => {
        toAbout.current.scrollIntoView(
            { behavior: "smooth", block: "start" }
        );
    };
    
    const goToContact = () => {
        toPortContact.current.scrollIntoView(
            { behavior: "smooth", block: "start" }
        );
        // window.scrollTo({
        //     top: document.documentElement.scrollHeight,
        //     behavior: "smooth"
        // });
    };


    return (
        <>
        <ScrollToTop />
        
        <div className="flex justify-between items-center 
            h-16 bg-white text-black relative shadow-sm text-2xl">
            <div className="topbarWrapper">
                    <span class="logo">Lucy</span>
                <div className="topRight">
                    <div className="topbarTitleContainer"
                        onClick={ gotoCommentTop }>
                        <span>HOME</span>
                    </div>
                    <div className="topbarTitleContainer"
                        onClick={ gotoCommentTop }> 
                        <span>ABOUT</span>
                    </div>    
                        <div className="topbarTitleContainer" onClick={goToPort}>
                        <span>PORTFOLIO</span>
                    </div>
                        <div id="contact" className="topbarTitleContainer"
                            onClick={ goToContact }>
                        <span>CONTACT</span>
                    </div>    
                </div>
            </div>
        </div>
        
          

            <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <div className="content-css"
                        ref={commentSection}>
                        <Content />
                    </div>
                    <div> {/*  ref={ commentSection } */ }
                        <About />
                    </div>
                    <div className="thumbnail-wrappper" ref={toPortfolio} >
                        <Portfolio />
                    </div>
                    <div ref={ toPortContact } >
                        <Contact />
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
       
        </>
    )
}
