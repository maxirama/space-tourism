import React from 'react';
import { Box, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import data from '../../../data.json';
import Navbar from '../../Components/Navbar';

export const Home = () => {
  const images = {
    mobile: 'src/assets/Images/Home/mobile.jpg',
    tablet: 'src/assets/Images/Home/background-home-tablet.jpg',
    desktop: 'src/assets/Images/Home/background-home-desktop.jpg'
  };

  const logoTest = 'src/assets/shared/logo.svg';

  const image = useBreakpointValue({
    base: images.mobile,
    md: images.tablet,
    lg: images.desktop
  });

  console.log(image);
  return (
    <>
      <Box
        bgImage={`url(${image})`}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        height='100vh'
        width='100vw'
      >
        <Box bg={'rgb(0,0,0)'} opacity={'40%'} h='100vh' w='100vw'>
          <Text>{data.destinations[0].name}</Text>
        </Box>
      </Box>
    </>
  );
};

export default Home;
