import React, { useState } from 'react';
import { XCircleIcon, ViewListIcon } from "@heroicons/react/outline"; 
import ListMenu from './ListMenu';
import MobileMenu from './MobileMenu';
import { useRouter } from 'next/dist/client/router';

const Header = () => {

    const[showMenu, setShowMenu] =  useState(false);

    const router = useRouter();


    return (
        <header className="sticky top-0 items-center shadow-md grid grid-cols-3 bg-Cyan-800 
        text-white px-10 py-2" >
            <div onClick={() => router.push("/")} className="flex pl-0 sm:pl-0 md:pl-5 lg:pl-20 ">
                <h1 className="text-white text-3xl font-bold hover:cursor-pointer ">PORTFOLIO</h1>
            </div>
            
            <div className="flex items-center justify-center ">
                
                <div className="flex items-center justify-center hidden md:inline-flex"> 
                    <ListMenu />    
                </div>

                <div className="grid  items-center justify-center">
                    {showMenu ? <XCircleIcon 
                        className=" h-8 w-8 text-white hover:cursor-pointer md:justify-end
                        md:hidden absolute right-6" onClick={() => setShowMenu(!showMenu)} /> :

                        <ViewListIcon 
                        className="h-8 w-8 text-white hover:cursor-pointer md:justify-end
                        md:hidden absolute right-6" onClick={() => setShowMenu(!showMenu)} />
                        
                    }

                    {showMenu && <MobileMenu />}
                </div>
            </div>

            <div className="relative flex items-center justify-center hidden lg:inline-flex pl-32">               
                <div className="my-auto" >
                    <a href="https://github.com/MohitRaw" target="_blank">
                        <img
                            src="./images/github.png" 
                            alt="github Logo" 
                            className="hover:bg-Cyan-600 h-10 cursor-pointer object-contain
                            rounded-full"/>
                    </a>
                </div>
                
                <div className="px-10 my-auto ">
                    <a href="https://www.linkedin.com/in/mohit-rawat-b78b19120/" target="_blank">
                        <img 
                            src="./images/linkedin.png" 
                            alt="LinkedIn Logo"  
                            className="hover:bg-Cyan-600 h-10 cursor-pointer rounded 
                            object-contain "/>
                    </a>                    
                </div>

                <div className="my-auto">
                    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                        <img
                            src="./images/gmail.png" 
                            alt="Gmail Icon"
                            className=" hover:bg-Cyan-600 h-8 cursor-pointer rounded-full
                            object-contain"/>
                    </a>
                </div> 
            </div>
        </header>
    );
}

export default Header;
