import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';

const NavLinks = (props) => {
    const [show, setShow] = useState(false)
    return(
        <li className="relative group" onClick={() => setShow(!show)}>
            <NavLink 
            exact={props.nav.path==='/'} 
            to={props.nav.type === "dropdown" ? "" : props.nav.path} 
            className={(props.nav.type !== "dropdown" ? "flex" : "hidden ")+"transition-all delay-150 flex text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-semibold text-lg tracking-wider"}
            activeClassName="text-black dark:text-white">
                <span>{props.nav.title}</span>
            </NavLink>
            <div className={(props.nav.type === "dropdown" ? "flex" : "hidden ")+" transition-all delay-150  text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-semibold text-lg tracking-wider cursor-pointer"}>
                <span>{props.nav.title}</span>
                <div className={"my-auto"}>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                    </svg>
                </div>
            </div>
            <div className={(props.nav.type !== "dropdown" ? "hidden" : (show ? "flex" : "hidden"))+" absolute justify-center top-12 -left-16 w-32 z-10 dark:bg-gray-900 p-4 rounded-md"}>
                <ul className="flex flex-col space-y-3">
                    <Link className="font-bold dark:text-gray-300 dark:hover:text-gray-200" to={"/game/pairing-kana"}>Pairing Kana</Link>
                    <Link className="font-bold dark:text-gray-300 dark:hover:text-gray-200" to={"/game/type-racing"}>Typeracing</Link>
                </ul>
            </div>
        </li>
    )
}
export default NavLinks;