
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Nesw from './pages/news';


function App() {
  return (
    <>
      <Navbar />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/novedades" element={<Nesw />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/contacto" element={<Contact />} />
          <Route
            path="*"
            element={
              <h2 className="text-center mt-5">
                404 - Página no encontrada
              </h2>
            }
          />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
