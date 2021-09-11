import { useRouter } from 'next/dist/client/router';
import React from 'react'

const ListMenu = () => {

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
        <div className=" flex justify-center items-center px-4 ">
            <ul className="flex flex-col sm:flex-row gap-12 lg:gap-16 absolute right-10 lg:right-auto text-xl font-bold">
                <li className="hover:text-warmGray-900">
                    <a onClick={about}>About</a>
                </li>
                <li className="hover:text-warmGray-900">
                    <a onClick={technologies}>Technologies</a>
                </li>
                <li className="hover:text-warmGray-900">
                    <a onClick={projects}>Projects</a>
                </li>
            </ul>
        </div>
    )
}

export default ListMenu;
