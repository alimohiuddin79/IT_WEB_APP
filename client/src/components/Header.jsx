import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

import NavLink from "./NavLink";

const Header = () => {
    const [showNavItems, setShowNavItems] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768) {
                setShowNavItems(false);
            }
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleShowItems = () => {
        setShowNavItems(!showNavItems);
    };

    return (
        <header className="bg-transparent fixed top-0 w-full z-50">
            <div className={`relative flex flex-row flex-wrap justify-between xl:px-32 lg:px-26 px-12 py-6 transition-all duration-300 ${showNavItems && 'flex-col justify-center align-middle'}`}>
                <Link to={'/'} className="text-2xl text-violet-500 hover:text-slate-600 font-bold">Design Sorcerer</Link>
                <ul 
                    className={`justify-center items-center ${showNavItems ? 'flex-col mt-3' : 'hidden md:flex'}`}>
                        <NavLink showNavItems={showNavItems} to={'/'} title='Home'/>
                        <NavLink showNavItems={showNavItems} to={'/aboutus'} title='About Us'/>
                        <NavLink showNavItems={showNavItems} to={'/services'} title='Services'/>
                        <NavLink showNavItems={showNavItems} to={'/pricing'} title='pricing'/>
                        <NavLink showNavItems={showNavItems} to={'/contact'} title='Contact'/>
                </ul>
                <div>
                    <FaBars className="hidden absolute right-12 top-6 max-md:block" onClick={handleShowItems}/>
                </div>
            </div>
        </header>
    );
};

export default Header;
