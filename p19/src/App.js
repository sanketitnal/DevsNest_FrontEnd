import './App.css';
import FoodCard from './components/FoodCard';

const foodList = [{
  id: 1,
  food: "Farm House Pizza (medium)",
  image: "pizza",
  price: "399"
}, {
  id: 2,
  food: "Quarter Pounder with Bacon",
  image: "burger",
  price: "299"
}, {
  id: 3,
  food: "Hot Chilli Chicken Noodles",
  image: "noodles",
  price: "499"
}, {
  id: 4,
  food: "Tangy Cheesy Tomato Lasagna",
  image: "lasagna",
  price: "259"
}]

function App() {
  return (
    <div className="App">
      {foodList.map(item => <FoodCard food={item.food} image={item.image} price={item.price} />)}
    </div>
  );
}

export default App;
