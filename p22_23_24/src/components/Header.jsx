import { loginState, setLoginState } from "./LoginContext";
import { useContext, useEffect } from "react";

export default function Header() {
    let login = useContext(loginState);
    let setLogin = useContext(setLoginState);

    useEffect(() => {
        let prevYPos = window.pageYOffset;
        window.onscroll =  () => {
            let curYPos = window.pageYOffset;
            if(prevYPos < curYPos) {
                document.getElementById("header").style.top = "-80px";
            } else {
                document.getElementById("header").style.top = "0px";
            }
            prevYPos = curYPos;
        }
    }, [])

    return (
        <header id="header">
            Meme Generator
            {   login ?
                <button 
                    onClick={() => setLogin(false)}
                    style={{
                        display: "block",
                        position: "fixed",
                        right: "20px",
                        top: "20px"
                    }}    
                > 
                Logout </button>
                :
                null
            }
        </header>
    )
}