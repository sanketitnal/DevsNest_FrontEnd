import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import getItem from "../helpers/getItem";
import "./ProductDisplay.css";

export default function ProductDisplay() {
    const quantityDisplay = useRef(null);
    const [quantity, setQuantity] = useState(1);
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getItem(id)
        .then(response => setItem(response))
    }, [id]);

    const updateQuantity = (toAdd) => {
        let newQuantity = quantity + toAdd;
        if(newQuantity > 0 && newQuantity <= 10) {
            setQuantity(newQuantity);
        }
    }

    return (
        item === null ? null :
        <div className="pd-container">
            <div className="pd-image" style={{
                backgroundImage: `url(${item.image})`,
            }}/>

            <div className="pd-info">
                <div className="pd-title">
                    {item.title}
                </div>
                
                <div className="pd-description">
                    {item.description}
                </div>
                
                <div className="pd-price">
                    Price: ${item.price}
                </div>
                
                <div className="pd-item-selector">
                    <div className="pd-qt-btn center" onClick={() => updateQuantity(-1)}>-</div>
                    <div className="pd-qt-dsp center" ref={quantityDisplay}> {quantity} </div>
                    <div className="pd-qt-btn center" onClick={() => updateQuantity(+1)}>+</div>
                </div>

                <div className="pd-add-to-cart-btn">
                    <button className="add-to-cart-btn">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}