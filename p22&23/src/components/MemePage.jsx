import { useState, useEffect } from 'react';
import MemeCard from './MemeCard';
import EditingMemeCard from './EditingMemeCard';

export default function MemePage() {
    let [ memeList, setMemeList ] = useState([]);
    let [ editingMeme, setEditingMeme ] = useState(null);

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(res => setMemeList(res.data.memes))
    }, []);

    return (
        <div className="meme-page">
            {
                editingMeme === null ?
                memeList.map((item, index) => {
                    return (
                        <MemeCard meme={item} key={index} handleClick={setEditingMeme}/>
                    )
                }):
                <EditingMemeCard meme={editingMeme} handleClick={setEditingMeme}/>
            }
        </div>
    );
}