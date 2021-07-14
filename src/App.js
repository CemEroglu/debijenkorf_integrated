import * as LocalApi from './services/localApi'
import Search from './components/Search';
import './App.css'
import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState();
  useEffect(() => {
    let promise = LocalApi.getProducts();
    Promise.resolve(promise).then(products => {
      setProducts(products)
    })
  }, [])
  return (
    <div className="MainPage">
      <Search lookUpData={products} maxElement={4}></Search>
    </div>
  );
}

export default App;