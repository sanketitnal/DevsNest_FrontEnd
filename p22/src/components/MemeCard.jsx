
export default function MemeCard({meme, handleClick}) {
    return (
        <div className="meme-card" 
            style={{backgroundImage: `url(${meme.url})`}}
            onClick={()=>handleClick(meme)}
        >
            <div className="meme-card-text">
                {meme.name}
            </div>
        </div>
    );
}