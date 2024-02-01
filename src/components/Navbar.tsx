'use client';
import Image from 'next/image';
import '../assets/styles/navbar.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const route = usePathname();

    useEffect(() => {
        const onWindowResize = () => {
            if (window.matchMedia("(min-width: 768px)").matches && isMenuOpen) {
                setIsMenuOpen(false);
            }
        }

        window.addEventListener('resize', onWindowResize);

        return () => {
            window.removeEventListener('resize', onWindowResize);
        };
    }, [isMenuOpen]);

    return (
        <nav className="w-full">
            <div className="flex flex-wrap items-center justify-between mx-auto px-8 py-4 md:py-0 md:px-16">
                <div className='flex gap-4 justify-center items-center'>
                    <Link href='/'>
                        <Image
                            src='/logo-blue.svg'
                            alt=''
                            width={48}
                            height={48}
                            className="cursor-pointer"
                        />
                    </Link>
                    <Link href='https://void.pt' target='_blank'>
                        <Image
                            src='/void-logo.svg'
                            alt=''
                            width={60}
                            height={60}
                        />
                    </Link>
                    <hr className="divider hidden md:block" />
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row rtl:space-x-reverse md:mt-0">
                            <li className={`link-effect${route.includes('/news') ? ' link-effect__selected' : ''}`}>
                                <a href="/news" className="block py-2 px-3 text-white dark:text-white" aria-current="page">News</a>
                            </li>
                            <li className={`link-effect${route === '/matches' || route === '/matches/results' || route.includes('/match-center') ? ' link-effect__selected' : ''}`}>
                                <a href="/matches" className="block py-2 px-3 text-white dark:text-white">Matches</a>
                            </li>
                            <li className={`link-effect${route === '/teams' ? ' link-effect__selected' : ''}`}>
                                <a href="/teams" className="block py-2 px-3 text-white dark:text-white">Team</a>
                            </li>
                            <li className={`link-effect${route === '/stats' ? ' link-effect__selected' : ''}`}>
                                <a href="/stats" className="block py-2 px-3 text-white dark:text-white">Stats</a>
                            </li>
                            <li className={`link-effect${route === '/media' ? ' link-effect__selected' : ''}`}>
                                <a href="/media" className="block py-2 px-3 text-white dark:text-white">Media</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <button onClick={() => setIsMenuOpen((isOpen) => !isOpen)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button> 
            </div>
            {
                isMenuOpen && (
                    <div className='md:hidden absolute w-full bg-black' id="navbar-mobile">
                        <ul className='flex flex-col'>
                            <li className={`link-effect${route.includes('/news') ? ' link-effect__selected' : ''}`}>
                                <a href="/news" className="block py-2 px-3 text-white dark:text-white" aria-current="page">News</a>
                            </li>
                            <li className={`link-effect${route === '/matches' || route === '/matches/results' || route === '/match-center' ? ' link-effect__selected' : ''}`}>
                                <a href="/matches" className="block py-2 px-3 text-white dark:text-white">Matches</a>
                            </li>
                            <li className={`link-effect${route === '/teams' ? ' link-effect__selected' : ''}`}>
                                <a href="/teams" className="block py-2 px-3 text-white dark:text-white">Team</a>
                            </li>
                            <li className={`link-effect${route === '/stats' ? ' link-effect__selected' : ''}`}>
                                <a href="/stats" className="block py-2 px-3 text-white dark:text-white">Stats</a>
                            </li>
                            <li className={`link-effect${route === '/media' ? ' link-effect__selected' : ''}`}>
                                <a href="/media" className="block py-2 px-3 text-white dark:text-white">Media</a>
                            </li>
                        </ul>
                    </div>
                )
            }
        </nav>
    );
};

export default Navbar;
