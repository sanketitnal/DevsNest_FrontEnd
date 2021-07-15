import { useState, useEffect } from "react"

export default function EditingMemeCard({meme, handleClick}) {
    let [imageUrl, setImageUrl] = useState(meme.url);
    let [boxTextArr, setBoxTextArr] = useState([]);
    let query_url = `https://api.imgflip.com/caption_image?template_id=${meme.id}&username=itnal26&password=sanket@123`;

    useEffect(() => {
        let boxesQuery = '', tempBoxTextArr = [];
        for(let i = 0; i < meme.box_count; ++i) {
            tempBoxTextArr.push(String(i+1));
            boxesQuery += `&boxes[${i}][text]=${i+1}`;
        }
        setBoxTextArr(tempBoxTextArr);
        fetch(query_url + boxesQuery)
            .then(res => res.json())
            .then(res => setImageUrl(res.data.url))
    }, [meme, query_url]);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let tempBoxTextArr = [], boxesQuery = '';
        for(let i = 0; i < meme.box_count; ++i) {
            let text = document.getElementById(String(i)).value;
            tempBoxTextArr.push(text);
            boxesQuery += `&boxes[${i}][text]=${text}`;
        }
        setBoxTextArr(tempBoxTextArr);
        fetch(query_url + boxesQuery)
        .then(res => res.json())
        .then(res => setImageUrl(res.data.url))
    }

    return (
        <div className="editing-meme-card">
            <img src={imageUrl} style={{ width: "100%"}} alt={meme.name}/>
            <form onSubmit={(e) => handleSubmit(e)}>
            {boxTextArr.map((item, index) => {
                return (
                    <input type="text"
                        id={String(index)}
                        className="box-text-input"
                        defaultValue={item}
                        placeholder={"text"+String(index+1)}
                        required/>
                )
            })}
            <input type="submit" className="submit-button" value="Generate"/>
            </form>
            <button onClick={()=>handleClick(null)}>Back To Main Screen</button>
        </div>
    )
}