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
        <Text>{data.destinations[0].name}</Text>
        {/* <Image
        // src={{ base: images.mobile, md: images.tablet, lg: images.desktop }}
        src={image}
        height={'100vh'}
        width={'100vw'}
        position={'absolute'}
        zIndex={-999}
      /> */}
      </Box>
    </>
  );
};

export default Home;
