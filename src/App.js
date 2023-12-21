import logo from './logo.svg';
import './App.css';
import Navbar from './Componenets/Navbar'
import ProductCard from './Componenets/ProductCard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartPage } from './Componenets/CartPage';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
