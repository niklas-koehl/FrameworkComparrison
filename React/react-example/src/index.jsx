import React, {useState} from "react";
import ReactDOM from 'react-dom';

function App() {
  const [items, setitems] = useState([])
  console.log(items)
  return (
    <React.Fragment>
      {
        items.map((item, i) => <p key={i}>{item}</p>)
      }
      <button onClick={() => setitems([...items, "REACT TEST ITEM"])}>Add</button>
    </React.Fragment>
  );
}

const root = document.getElementById('root');
ReactDOM.render(<App/>,root)
