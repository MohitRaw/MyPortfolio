import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Header from '../components/Header';


const about = () => {

const router = useRouter();

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-grow items-center justify-center bg-Cyan-800">
                <p className="text-8xl font-bold">I am about page!</p>
            </div> 
        </div>
    )
}

export default about;
