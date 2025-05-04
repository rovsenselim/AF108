import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductList from './components/ProductList';
import Wishlist from './pages/Wishlist';
import Basket from './pages/Basket';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/product-details/:id" element={<ProductDetail />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
