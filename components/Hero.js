import React from 'react';
import ReactTooltip from 'react-tooltip';
import { useRouter } from 'next/dist/client/router';

const Hero = () => {
          
const router = useRouter();

const about = () => {
    router.push({
        pathname:"/about",
    });
}
    return (
        <div className="flex justify-center bg-Cyan-800 flex-grow">

            <div className=" flex flex-col flex-grow items-center justify-center ">
                <div className="relative flex inline-block">
                    <h1 
                        data-tip 
                        data-for="happyface" 
                        className="font-mono text-7xl font-bold hover:text-white 
                        hover:cursor-pointer md:text-8xl">
                        Hello World!
                    </h1>
                    <ReactTooltip  effect="solid" id="happyface">
                        <span className="text-2xl font-bold ">My first programm like everyone 🙃</span>
                    </ReactTooltip>
                </div>
                
                <h2 className="font-mono text-5xl md:text-6xl font-bold py-6">
                    I am Mohit Rawat.
                </h2>
                
                <h3 className="font-mono text-3xl md:text-4xl font-bold ">
                    I am a Frontend Devloper.
                </h3>

                <div className="py-6">
                    <button 
                        className="font-mono text-2xl bg-warmGray-800 rounded-full px-3 py-2 hover:shadow-md"
                        onClick={about}
                    >
                        Learn More
                    </button>
                </div>
            </div>

            
            <div className="flex flex-col px-1 inline-flex lg:hidden  absolute left-0 top-16 sm:left-3">               
                <div className="mx-auto " >
                    <a href="https://github.com/MohitRaw" target="_blank">
                        <img
                            src="./images/github.png" 
                            alt="github Logo" 
                            className="hover:bg-Cyan-600 h-10 cursor-pointer object-contain
                            rounded-contain "/>
                    </a>
                </div>
                    
                <div className="mx-auto py-4">
                    <a href="https://www.linkedin.com/in/mohit-rawat-b78b19120/" target="_blank">
                        <img 
                            src="./images/linkedin.png" 
                            alt="LinkedIn Logo"  
                            className="hover:bg-Cyan-600 h-10 cursor-pointer rounded 
                            object-contain "/>
                        </a>                    
                </div>

                <div className="mx-auto">
                    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                        <img
                            src="./images/gmail.png" 
                            alt="Gmail Icon"
                            className=" hover:bg-Cyan-600 h-9 cursor-pointer rounded-full
                            object-contain"/>
                    </a>
                </div>
            </div>
    
        </div>
    )
}

export default Hero;
