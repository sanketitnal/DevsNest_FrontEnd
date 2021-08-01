import { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { activeLinkContext } from "./Context/ActiveLink";

export default function Header() {
    const openMenu = (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>);
    const closeMenu = (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>);
    const changeMenuState = () => {
        setMenuState(!menuState);
        secMenu.current.classList.toggle("show");
    }
    let [menuState, setMenuState] = useState(false);
    let secMenu = useRef(null);

    return (
        <header className="p-5 bg-headerColor">
            <div className="flex flex-row justify-between border-box h-10 md:h-24">
                <div className="flex flex-row max-h-full items-center">
                    <img src="/images/iaflogo.jpeg" className="max-h-full" alt="IAF Logo"/>
                    <div className="text-white p-4 font-heading text-xl md:text-4xl"> Indian Airforce </div>
                </div>

                <div className="text-white hidden md:flex flex-row max-h-full items-center">
                    <CustomLink name="HOME" src="/" />
                    <CustomLink name="HISTORY" src="/history" />
                    <CustomLink name="AIRCRAFTS" src="/aircrafts" />
                </div>

                <div className="flex items-center rounded-full md:hidden hover:bg-black px-2" id="menu-btn"
                    onClick={changeMenuState}
                >
                    {menuState ? closeMenu: openMenu}
                </div>
            </div>

            <div ref={secMenu} className="text-white pt-2 border-box hidden" id="secondary-menu">
                <hr />
                <CustomLink name="HOME" src="/" secondary = {true} changeMenuState={changeMenuState}/>
                <CustomLink name="HISTORY" src="/history" secondary = {true} changeMenuState={changeMenuState}/>
                <CustomLink name="AIRCRAFTS" src="/aircrafts" secondary = {true} changeMenuState={changeMenuState}/>
            </div>
        </header>
    );
}

function CustomLink({name, src, secondary = false, changeMenuState}) {
    let {activeLink, changeActiveLink} = useContext(activeLinkContext);
    let active = activeLink === name;

    return (
        <Link to={src} className={`text-${active ? "yellow-400": "white"} block ${secondary ? "p-2" : "p-5"} hover:bg-black`}
            onClick={() => { 
                changeActiveLink(name) 
                if(secondary === true)
                    changeMenuState();
            }}>
            {name}
        </Link>
    )
}