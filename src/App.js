import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUser></ExternalUser>

    </div>
  );
}
function ExternalUser() {
  const [users, setUser] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])
  return (
    <div>
      <h2>ExternalUser</h2>
      <p>{users.length}</p>
      {
        users.map(user => <Userview name={user.name} email={user.email}></Userview>)
      }
    </div>
  )
}
function Userview(props) {
  return (
    <div style={{ border: '2px solid orange', backgroundColor: 'red', margin: '20px', borderRadius: '20px', padding: '20px' }}>
      <h2>Name: {props.name}</h2>
      <h3>Email: {props.email}</h3>
    </div>
  )
}





function Counter() {
  const [count, setCount] = useState(100)
  const increaseCount = () => setCount(count + 1)
  const decreaseCount = () => setCount(count - 1)
  // const increaseCount = () => {
  //   const newCount = count + 1
  //   setCount(newCount)
  // }

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increaseCount}>IncreaseData</button>

      <button onClick={decreaseCount}>DecreaseData</button>
    </div>
  )
}


export default App;



//  {/* <Product name="Laptop" price="200000"></Product>
//       <Product name="Phone" price="20000"></Product> */}
//       {
//         products.map(product => <Product name={product.name} price={product.price}></Product>)
//       }

// function Product(props) {
//   return (
//     <div className='product'>
//       <h1>Name: {props.name} </h1>
//       <h2>Price: {props.price}</h2>
//     </div>
//   )
// }

 // const products = [
  //   { name: 'Laptop', price: '200000' },
  //   { name: 'Phone', price: '20000' },
  //   { name: 'Watch', price: '2000' },
  //   { name: 'Tablet', price: '22000' },
  //   { name: 'AirPhone', price: '1000' },
  // ]