import React from 'react'
import Image from 'next/image';
import Link from "next/link";

function Sidebar() {
    return (
        <div className="flex">
        <div className="w-72 bg-zinc-950 h-screen p-5 border-r border-gray-200 content-center">
            <nav className="space-y-36">
                <a href="/home" className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
                    <div className="ml-5 text-lg">Página Inicial</div>
                </a>
                <a href="/notificacoes" className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                    <path d="M12 22c1.104 0 2-.896 2-2h-4c0 1.104.896 2 2 2zm6-6V9c0-3.308-2.692-6-6-6S6 5.692 6 9v7H4v2h16v-2h-2zM16 17H8v-8c0-2.206 1.794-4 4-4s4 1.794 4 4v8z"/>
                </svg>
                <div className="ml-5 text-lg">Notificações</div>
                </a>
                <a href="/perfil" className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                    <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.333 0-10 1.667-10 5v3h20v-3c0-3.333-6.667-5-10-5z"/>
                </svg>
                    <div className="ml-5 text-lg">Perfil</div>
                </a>
            </nav>
            <div className="relative w-full max-w-m flex items-center mt-36">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                </span>
            <input 
                type="text" 
                placeholder="Buscar" 
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-zinc-700"
            />
            </div>
        </div>
        
    </div>

    
    );
}

export default Sidebar