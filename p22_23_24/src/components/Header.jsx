import { loginState, setLoginState } from "./LoginContext";
import { useContext } from "react";

export default function Header() {
    let login = useContext(loginState);
    let setLogin = useContext(setLoginState);

    return (
        <header>
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