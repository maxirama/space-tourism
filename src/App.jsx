import { useState } from 'react';
import Home from '../src/Pages/Home';
import Destination from './Pages/Destination';
import Crew from './Pages/Crew';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Crew />
      {/* <Home /> */}
      {/* <Destination /> */}
    </>
  );
}

export default App;
