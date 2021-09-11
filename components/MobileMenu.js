import { useRouter } from 'next/dist/client/router';
import React from 'react';

const MobileMenu = () => {

const router = useRouter();

const about = () => {
    router.push({
        pathname:"/about",
    });
}
const technologies = () => {
    router.push({
        pathname:"/technologies",
    });
}
const projects = () => {
    router.push({
        pathname:"/projects",
    });
}


    return (
        <div className="flex items-center px-4 md:hidden inline-flex absolute right-0 top-12 bg-Cyan-800 text-white bg-opacity-20 ">
            <ul className="flex flex-col py-4 mx-4 text-2xl font-bold ">
                        <li className="hover:underline hover:text-warmGray-900 hover:cursor-pointer py-2">
                            <a onClick={about}>About</a>
                        </li>
                        <li className="hover:underline hover:text-warmGray-900 hover:cursor-pointer py-2">
                            <a onClick={technologies}>Technologies</a>
                        </li>
                        <li className="hover:underline hover:text-warmGray-900 hover:cursor-pointer py-2">
                            <a onClick={projects}>Projects</a>
                        </li>
            </ul>
        </div>
    )
}

export default MobileMenu;
