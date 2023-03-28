'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/icons/logo.png';


export function Appbar(props) {

  const [IsMenuOpen, setIsMenuOpen] = useState(false);
    
    return(
        <>
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex-shrink-0 w-96 h-full py-2 px-4">
                          <Image
                              src={logo}
                              alt="Logo Image"
                              width={1536}
                              height={446}
                              className="h-full w-auto"
                              priority="true"
                            />
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-white hover:bg-gray-800">
                                    Inicio
                                </Link>
                                <Link href="/gerencias/list/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-white hover:bg-gray-800">
                                    Gerencia
                                </Link>
                                <Link href="/equipos/list/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-white hover:bg-gray-800">
                                    Equipos
                                </Link>
                                <Link href="/proveedores/list/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-white hover:bg-gray-800">
                                    Proveedores
                                </Link>
                                <Link href="/servicios/list/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-white hover:bg-gray-800">
                                    Servicios
                                </Link>
                                <Link href="/facturas/list/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-white hover:bg-gray-800">
                                    Facturas
                                </Link>
                                <Link href="/contratos/list/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-white hover:bg-gray-800">
                                    Contratos
                                </Link>
                                <Link href="/login/list/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-white hover:bg-gray-800">
                                    Salir
                                </Link>
                            </div>
                        </div>
                        <div className='flex md:hidden'>
                            <button
                                type='button'
                                className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                                aria-controls="mobile-menu"
                                aria-expanded={IsMenuOpen}
                                onClick={() => setIsMenuOpen(!IsMenuOpen)}    
                            >
                                <span className='sr-only'>
                                    Opena Menu
                                </span>
                                <svg
                                    className={`h-6 w-6 ${
                                        IsMenuOpen ? 'hidden' : 'block'
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                <svg
                                    className={`h-6 w-6 ${
                                    IsMenuOpen ? 'block' : 'hidden'
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={`md:hidden ${
                        IsMenuOpen ? 'block' : 'hidden'  
                    }`}
                    id='mobile-menu'
                >
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <Link href="/" className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                            Inicio
                        </Link>
                    </div>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <Link href="/pages/gerencias" className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                            Gerencia
                        </Link>
                    </div>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <Link href="/pages/equipos" className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                            Equipos
                        </Link>
                    </div>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <Link href="/pages/proveedores" className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                            Proveedores
                        </Link>
                    </div>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <Link href="/pages/servicios" className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                            Servicios
                        </Link>
                    </div>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <Link href="/pages/facturas" className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                            Facturas
                        </Link>
                    </div>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <Link href="/pages/contratos" className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                            Contratos
                        </Link>
                    </div>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <Link href="/pages/login" className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                            Salir
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
