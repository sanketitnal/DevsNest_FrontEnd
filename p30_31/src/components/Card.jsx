import { useRef } from "react"
import { Link } from "react-router-dom";
import "./Card.css"

export default function Card({item}) {
    let favoriteIcon = useRef(null);

    return (
        <div className="card-container">
        {/* Icon for adding/removing item from wishlist */}
        <div className="card-favorite-icon" onClick={() => favoriteIcon.current.classList.toggle("card-favorite-icon-active")}>
            <svg ref={favoriteIcon} xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 24 24" width="100%" fill="#AAB8C2"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </div>

        <Link to={`/product-display/${item.id}`} className="card">
            {/* Product image */}
            <div className="card-image" style={{
                backgroundImage: `url(${item.image})`,
            }} />

            {/* Product title */}
            <div className="card-heading">
                {item.title}
            </div>

            {/* Product description */}
            <div className="card-description">
                {item.description}
            </div>

            {/* Product price */}
            <div className="card-price">
                Price: ${item.price} 
            </div>
        </Link>
        </div>
    )
}