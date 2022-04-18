import { useState } from 'react';
import Home from '../src/Pages/Home';
import Navbar from './Components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
