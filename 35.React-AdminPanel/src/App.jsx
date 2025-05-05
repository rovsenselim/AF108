import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductList from './components/ProductList';
import Basket from './pages/Basket';
import ProductDetail from './components/ProductDetail';
import AdminPanel from './pages/AdminPanel';
import AddProduct from './components/AddProduct';
import EditProduct from './pages/EditProduct';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/product-details/:id" element={<ProductDetail />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/admin/add-product" element={<AddProduct />} />
                <Route path="/admin/edit-product/:id" element={<EditProduct />} />
            </Routes>
            <ToastContainer />
        </Router>
    );
}

export default App;
