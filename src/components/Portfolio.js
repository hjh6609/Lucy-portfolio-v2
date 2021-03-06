import React from 'react'
//import ImageOne from '../images/weather-app.jpg';
import ImageTwo from '../images/gallery.jpg';
//import ImageThree from '../images/quiz-app.jpg';
import ImageFour from '../images/star2.jpg';
import ImageFive from '../images/star1.jpg';
import ImageSix from '../images/adminapp.jpg';
//import ImageSeven from '../images/portImg.jpg';
import '../App.css';

export const Portfolio = () => {
    
    return (
        <>
        <div className="portpadding">
        <span className="porttitle">Portfolio</span>    
        </div>
        <div className="portfolio" > 
            <img src={ImageSix} alt="" className="h-full rounded
            mb-20 shadow" />
            <div className="center-content font-bold">
                <h2 className="text-2xl mb-2">
                    Admin App
                </h2>
                <p className="mb-2">
                    React &nbsp; HTML &nbsp; CSS &nbsp; Material
                </p>
                <span className="pro-button">
                    <div onClick={() => window.open('https://keen-austin-519956.netlify.app/', '_blank')}><strong>View Site</strong></div>
                </span>
                <span className="pro-button">
                    <div onClick={() => window.open('https://github.com/hjh6609/admin-app', '_blank')}><strong>View Github</strong></div>
                </span>
            </div>
        </div>     

        <div className='height22'></div>
        
        <div className="portfolio"> {/*  bg-green-100 */ }
            <img src={ImageFive} alt="" className="h-full rounded 
            mb-20 shadow" />
            <div className="center-content font-bold">
                <h2 className="text-2xl mb-2">
                    Starbucks Site 1
                </h2>
                <p className="mb-2">
                    React &nbsp; HTML &nbsp; CSS 
                </p>
                <span className="pro-button">
                    <div onClick={() => window.open('https://modest-einstein-7d5d43.netlify.app/', '_blank')}><strong>View Site</strong></div>
                </span>
                <span className="pro-button">
                    <div onClick={() => window.open('https://github.com/hjh6609/starbucks2', '_blank')}><strong>View Github</strong></div>
                </span>
            </div>
        </div>

        <div className='height22'></div>

        <div className="portfolio"> {/*  bg-green-100 */ }
            <img src={ImageFour} alt="" className="h-full rounded 
            mb-20 shadow" />
            <div className="center-content font-bold">
                <h2 className="text-2xl mb-2">
                    Starbucks Site 2
                </h2>
                <p className="mb-2">
                    React &nbsp; HTML &nbsp; CSS &nbsp; Styled Components
                </p>
                <span className="pro-button">
                    <div onClick={() => window.open('https://compassionate-sinoussi-564d78.netlify.app/', '_blank')}><strong>View Site</strong></div>
                </span>
                <span className="pro-button">
                    <div onClick={() => window.open('https://github.com/hjh6609/starbucks', '_blank')}><strong>View Github</strong></div>
                </span>
            </div> 
        </div>

        <div className='height22'></div>

        <div className="portfolio"> 
            <img src={ImageTwo} alt="" className="h-full rounded 
            mb-20 shadow" />
            <div className="center-content font-bold">
                <h2 className="text-2xl mb-2">
                    Gallery-App
                </h2>
                <p className="mb-2">
                    React &nbsp; HTML &nbsp; Tailwind.CSS 
                </p>
                <span className="pro-button">
                    <div onClick={() => window.open('https://practical-goldwasser-933117.netlify.app/', '_blank')}><strong>View Site</strong></div>
                </span>
                <span className="pro-button">
                    <div onClick={() => window.open('https://github.com/hjh6609/portfoliov1.git', '_blank')}><strong>View Github</strong></div>
                </span>
            </div>
        </div>

       

        <div className="h-screen">&nbsp;</div>
        </>
    )
}
