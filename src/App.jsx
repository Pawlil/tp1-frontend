import { useState } from 'react';
import { Form } from './components/Form';

function App() {
  const [count, setCount] = useState(0);

  return(
    <div className="container py-4">
    <h1 className="mb-4">¡Contactate con nosotros!</h1>
    <Form/>
  </div>
  )
}

export default App
