import React from 'react'
import ImageOne from '../images/turtles.jpg';

export default function Content() {
    return (
        <>
        <div className="menu-card">
            <img src={ImageOne} alt="" className="h-full rounded 
            mb-20 shadow" />
            <div className="center-content font-bold">
                <h2 className="text-2xl mb-2">
                    Hi! I'm Lucy 😊
                </h2>
                <p className="mb-2">
                    I'm a Jr.Front-End Developer.
                </p>
                <span className="text-center"><u>My skills are : </u> &nbsp;
                    <strong>
                    My skills are : JavaScript, React.js , PHP,HTML,CSS, C#,.NET, Visual Studio, MySQL. <br/>
                    I have a 2 years of Web Development experience, where I used C#, .NET,PHP, MySQL, <br/>
                    I also created an Online-Shopping Mall using. <br/>
                    .NET and C# and different Online-Sales Solution with the PHP Framework CodeIgniter. <br/>
                    I also took part in creating Groupware via .NET and C#. I'm also interested in script languages like Python, PHP and JavaScript. <br/>
                    Because of that interest,I've been studying JavaScript lately to help with Front-End Development.<br/>
                    </strong>
                    </span>
            </div>
        </div>
        <div className="h-screen"></div>
        </>
    )
}
