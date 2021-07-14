import './App.css';
import { useRef, useState } from 'react';

function App() {
  let [list, setList] = useState([]);
  let itemName = useRef(), calorie = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setList([...list, {name: itemName.current.value, energy: calorie.current.value, edit: false}]);
    itemName.current.value = "";
    calorie.current.value = "";
  }

  return (
    <div className="App">
      <header> CALORIE TRACKER </header>
      <div className="food-input">
        <form onSubmit={handleSubmit}>
          <input ref={itemName} type="text" placeholder="ITEM NAME" required />
          <input ref={calorie} type="number" placeholder="ENERGY (in CALORIE)" required />
          <input type="submit" value="ADD ITEM" />
        </form>
      </div>

      {list.map((item, index) => {
        return (
          <div className="food-input list-item">
            <div style={{fontFamily: "'Zen Tokyo Zoo', cursive",
                        fontSize: "2.5em"}}> {item.name} </div>
            <div style={{fontSize: "1.2em"}}> You have consumed {item.energy} Calories. </div>
            <div className="buttons">
              <button style={{backgroundColor: "green"}}> Edit </button>
              <button style={{backgroundColor: "red"}}
                      onClick={(event) => {
                        setList(list.filter((element, i) => i !== index))
                      }}
              > Delete </button>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;