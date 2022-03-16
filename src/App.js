import './App.css';

function App() {
  const products = [
    { name: 'Laptop', price: '200000' },
    { name: 'Phone', price: '20000' },
    { name: 'Watch', price: '2000' },
    { name: 'Tablet', price: '22000' },
    { name: 'AirPhone', price: '1000' },
  ]
  return (
    <div className="App">
      {/* <Product name="Laptop" price="200000"></Product>
      <Product name="Phone" price="20000"></Product> */}
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }

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
