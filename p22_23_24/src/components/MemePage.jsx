import { useState, useEffect, useContext } from 'react';
import MemeCard from './MemeCard';
import EditingMemeCard from './EditingMemeCard';
import { loginState, setLoginState } from "./LoginContext";

export default function MemePage() {
    let [ memeList, setMemeList ] = useState([]);
    let [ editingMeme, setEditingMeme ] = useState(null);
    let login = useContext(loginState);
    let setLogin = useContext(setLoginState);

    useEffect(() => {
        console.log(login, setLogin);
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(res => setMemeList(res.data.memes))
    }, [login, setLogin]);

    return (
        <div className="meme-page">
            {login ?
                (
                    editingMeme === null ?
                    memeList.map((item, index) => {
                        return (
                            <MemeCard meme={item} key={index} handleClick={setEditingMeme}/>
                        )
                    })
                    :
                    <EditingMemeCard meme={editingMeme} handleClick={setEditingMeme}/>
                    
                )
                :
                (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: "white",
                        flexDirection: "column"
                    }}>
                        <h1>Login to see theMemes</h1>
                        <button onClick={() => setLogin(true)}> Login </button>
                    </div>
                )
            }
        </div>
    );
}