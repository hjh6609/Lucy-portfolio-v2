import React from 'react'


export default function Contact() {
    return (
        <>   
        <div className="contactContainer">
            <div>
                    <h2 className="contactTop2">
                        Contact me
                    </h2>
                    <h2 className="contactTop">
                        Lucy 😊
                    </h2>
                    <p className="mb-2 text-center">
                        hjh6609@gmail.com 
                    </p>
                    <span className="pro-button2">
                        <div onClick={() => window.open('https://github.com/hjh6609/', '_blank')}><strong>Github</strong></div>
                    </span>

                    <span className="pro-button2">
                        <div onClick={() => window.open('https://www.linkedin.com/in/lucy-h-a12b77109/', '_blank')}><strong>Linked In</strong></div>
                    </span>
                    
                </div>
            </div>
        <div className="h-full">&nbsp;</div>
        </>
    )
}
