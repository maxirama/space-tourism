import { useState, useEffect } from 'react';
import Home from '../src/Pages/Home';
import Destination from './Pages/Destination';
import Crew from './Pages/Crew';
import Technology from './Pages/Technology';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Flex, Spinner, Box, Center, Heading } from '@chakra-ui/react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <Center h='100vh' bg='primary' gap={4}>
        <Spinner size='xl' color='blue.500' alignSelf={'center'} />
      </Center>
    );
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/crew' element={<Crew />} />
        <Route exact path='/technology' element={<Technology />} />
        <Route exact path='/destination' element={<Destination />} />
      </Routes>
    </>
  );
}

export default App;
