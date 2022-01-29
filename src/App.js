import React from 'react';
import './App.css'
const App = () => {
  const arr = [
    {
      productName: "a",
      id: 1,
      qty: 2
    },
    {
      productName: "b",
      id: 2,
      qty: 5
    },
    {
      productName: "c",
      id: 3,
      qty: 6
    }
  ];
  const [qty, setQty] = React.useState();

  const incrementFunc = (i) => {
    arr.map((curitem) => {
      if (curitem.id === i) {
        setQty(curitem.qty + 1);
      }
    })

  }

  const decrementFunc = (i) => {
    arr.map((curritem) => {
      if (curritem.id === i) {       
        setQty(curritem.qty - 1);
      }
    })

  }

  return (
    <div className="main_container">
      <div className="sub_container">
        {
          arr.map((item) => (
            <>
              <h3>{item.productName}{item.qty}</h3>
              <button onClick={() => incrementFunc(item.id)}>increment</button>
              <button onClick={() => decrementFunc(item.id)}>decrement</button>
            </>
          ))
        }

      </div>
    </div>
  );
}

export default App;
