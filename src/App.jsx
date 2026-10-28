<<<<<<< HEAD

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import News from './pages/News';


function App() {
  return (
    <>
      <Navbar />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/novedades" element={<News />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
=======
//import { useState } from 'react';
import { Form } from './components/Form';

function App() {
  
  //const [count, setCount] = useState(0);

  return(
    <div className="container py-4">
      {/*<h1 className="mb-4">¡Contactate con nosotros!</h1>*/}
      <Form/>
    </div>
  )
>>>>>>> origin/formulario
}

export default App;
