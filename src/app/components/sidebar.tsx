import React from 'react'
import Image from 'next/image';

function Sidebar() {
    return (
        <div className="h-screen w-32 bg-zinc-950 ml-[15vw]">
            <button type="button" className="text-black border border-stone-50 hover:bg-stone-50 hover:text-white focus:ring-4 focus:outline-none focus:ring-stone-400 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-stone-50 dark:text-blue-500 dark:hover:text-white dark:focus:ring-stone-50 dark:hover:bg-stone-800">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
            <path d="M150"></path>
            </svg>
            <span className="sr-only">Homepage Icon</span>
            </button>
        </div>
    );
}

export default Sidebar