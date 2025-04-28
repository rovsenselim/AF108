import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import Products from './pages/Products';
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner, Modal, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const baseUrl = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getProducts = async () => {
    try {
      const res = await axios.get(baseUrl);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const addProduct = () => {
    let newProduct = {
      id: uuidv4(),
      title: prompt("Enter New title"),
      price: prompt("Enter New Price")
    }

    setProducts([...products, newProduct]);
    toast.success("Product added successfully!");
  }

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
    toast.success("Product deleted successfully!");
  }

  const editProduct = () => {
    const updatedProduct = {
      ...selectedProduct,
      title: prompt("Enter New title", selectedProduct.title),
      price: prompt("Enter New Price", selectedProduct.price)
    }

    setProducts(products.map(product =>
      product.id === selectedProduct.id ? updatedProduct : product
    ));
    setShowModal(false);
    toast.success("Product updated successfully!");
  }

  const resetProducts = () => {
    setProducts([]);
    toast.success("All products reset!");
  }

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner animation="border" variant="danger" />
      ) : (
        <>
          <button
            style={{ backgroundColor: "red", color: "white", fontWeight: "bold", borderRadius: "10px" }}
            onClick={() => addProduct()}
          >
            Create
          </button>
          <button
            style={{ backgroundColor: "blue", color: "white", fontWeight: "bold", borderRadius: "10px", marginLeft: '10px' }}
            onClick={resetProducts}
          >
            Reset
          </button>
          <Products
            data={products}
            deleteProduct={deleteProduct}
            handleShow={handleShow}
          />
        </>
      )}

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="primary" onClick={editProduct}>Save Changes</Button>
        </Modal.Body>
      </Modal>

      <ToastContainer />
    </>
  );
}

export default App; 