import './App.css';

function App() {
  return (
    <div className="App">
      <Product name="Laptop" price="200000"></Product>
      <Product name="Phone" price="20000"></Product>

    </div>
  );
}
function Product(props) {
  return (
    <div className='product'>
      <h1>Name: {props.name} </h1>
      <h2>Price: {props.price}</h2>
    </div>
  )
}

export default App;
