import { createContext, useReducer } from "react";

export const activeLinkContext = createContext("HOME");

const changeActiveLinkFunction = function(currentState = "HOME", newLink) {
    return newLink;
}

export default function ActiveLinkProvider({children}) {
    const [ activeLink, changeActiveLink ] = useReducer(changeActiveLinkFunction, "HOME");

    return (
        <activeLinkContext.Provider value={{activeLink, changeActiveLink}}>
            {children}
        </activeLinkContext.Provider>
    );
}