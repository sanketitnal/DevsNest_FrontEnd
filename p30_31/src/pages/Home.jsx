import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
import Card from "../components/Card";
import { fetchProducts } from "../store/productSlice";

export default function Home() {
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts(20));
    }, [dispatch])

    return (
        <div className="container">
            {product.items.map((item, index) => (<Card item={item} key={String(Date.now()+index)}/>))}
        </div>
    )
}