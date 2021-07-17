import { useState, useEffect} from "react";
import { useHandleApiCall } from "./useHandleApiCall";

export default function EditingMemeCard({meme, handleClick}) {
    let [imageUrl, setImageUrl] = useState(meme.url);
    let [boxTextArr, setBoxTextArr] = useState([]);
    let [loading, setLoading] = useState(false);
    let query_url = `https://api.imgflip.com/caption_image?template_id=${meme.id}&username=itnal26&password=sanket@123`;
    let updateImageUrl = useHandleApiCall(query_url, setImageUrl, setBoxTextArr, setLoading);

    useEffect(() => {
        updateImageUrl(
            (new Array(meme.box_count)).fill(0, 0, meme.box_count).map((item, index) => String(index+1))
        );
        console.log("Here");
    }, [updateImageUrl, meme]);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        updateImageUrl(
            (new Array(meme.box_count)).fill(0, 0, meme.box_count).map((item, index) => document.getElementById(String(index)).value)
        );
    }

    return (
        loading ? 
        <div style={{
            width: "100vw", 
            height: "100vh", 
            backgroundColor: "rgba(0,0,0,.5)", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            color: "white"}
        }>
            <h1> Loading... </h1>
        </div>
        :
        <div className="editing-meme-card">
            <img src={imageUrl} style={{ width: "100%"}} alt={meme.name}/>
            <form onSubmit={(e) => handleSubmit(e)}>
            {boxTextArr.map((item, index) => {
                return (
                    <input type="text"
                    key={"input"+index}
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