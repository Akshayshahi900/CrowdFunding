"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useSession, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Username from '@/app/[username]/page';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const { data: session, status } = useSession();
    const router = useRouter();
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
        }
    }, [status, router]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    if (status === 'loading') {
        return null;
    }

    const handleSignOut = async () => {
        try {
            await signOut({ redirect: false });
            router.push('/login');
        } catch (error) {
            console.error('Sign out error:', error);
        }
    };

    const handleNavigation = (path) => {
        router.push(path);
        setShowDropdown(false); // Close dropdown after navigation
    };

    return (
        <nav className='flex justify-between items-center bg-black text-white'>
            <div className='flex gap-2 items-center justify-center py-4'>
                <button onClick={() => router.push('/')} className='flex gap-2 items-center justify-center py-4'>
                    <img className='w-[36px]' src="./rocket-158_128.gif" alt="Logo" />
                    <h1 className='text-xl font-bold'>BoostBank</h1>
                </button>
            </div>
            <div className='flex'>
                {session ? (
                    <div ref={dropdownRef} className="relative">
                        <button
                            id="dropdownDefaultButton"
                            onClick={() => setShowDropdown(!showDropdown)}
                            className="flex items-center justify-between text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2"
                            type="button"
                        >
                            <span className="truncate max-w-[190px]">Welcome, {session.user?.email || 'User'}</span>
                            <svg
                                className="w-4 h-4 ms-2 mx-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>

                        <div
                            id="dropdown"
                            className={`z-10 ${showDropdown ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute right-0 top-[100%] mt-2`}
                        >
                            <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownDefaultButton"
                            >
                                <li>
                                    <button
                                        onClick={() => handleNavigation('/dashboard')}
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left"
                                    >
                                        Dashboard
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleNavigation("/")}
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left"
                                    >
                                        My Page
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => router.push('/login')}
                        type="button"
                        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        Login
                    </button>
                )}
                {session && <button
                    onClick={handleSignOut}
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Sign out
                </button>}
            </div>
        </nav>
    );
};

export default Navbar;
