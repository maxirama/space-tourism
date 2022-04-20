import React from 'react';
import { Box, Text, useBreakpointValue, Center } from '@chakra-ui/react';
import Background from '../../Components/Background';
import data from '../../../data.json';

export const Home = () => {
  const background = {
    mobile: 'src/assets/Images/Home/mobile.jpg',
    tablet: 'src/assets/Images/Home/background-home-tablet.jpg',
    desktop: 'src/assets/Images/Home/background-home-desktop.jpg'
  };

  const logoTest = 'src/assets/shared/logo.svg';

  const _background = useBreakpointValue({
    base: background.mobile,
    md: background.tablet,
    lg: background.desktop
  });

  return (
    <Box>
      <Background url={_background} opacity={true} />
      <Box h='15vh' />
      <Box
        h='80vh'
        p={3}
        alignItems={'center'}
        display='flex'
        flexDirection={'column'}
      >
        <Box textStyle='h5' color='secondary'>
          SO, YOU WANT TO TRAVEL TO
        </Box>

        <Box textStyle='h1' color='white'>
          SPACE
        </Box>
        <Box p={3} color='secondary'>
          <Text fontWeight={'light'} textAlign={'center'} lineHeight={'3.5vh'}>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a trully out of this
            world experience!
          </Text>
        </Box>
        <Box
          display='flex'
          borderRadius={'90%'}
          bg={'terciary'}
          w='150px'
          h='150px'
          mt='auto'
          p={3}
        >
          <Text
            letterSpacing={'2px'}
            fontSize='20px'
            fontFamily='Bellefair'
            alignSelf='center'
            margin='0 auto'
          >
            EXPLORE
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
