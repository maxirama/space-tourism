import React from 'react';
import { Box, Text, useBreakpointValue, Center } from '@chakra-ui/react';
import Background from '../../Components/Background';
import SectionTitle from '../../Components/SectionTitle';
import Description from '../../Components/Description';
import data from '../../../data.json';

export const Home = () => {
  const background = {
    mobile: 'src/assets/Images/Home/mobile.jpg',
    tablet: 'src/assets/Images/Home/background-home-tablet.jpg',
    desktop: 'src/assets/Images/Home/background-home-desktop.jpg'
  };

  const homeDescription = `Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a trully out of this
            world experience!`;

  const _background = useBreakpointValue({
    base: background.mobile,
    md: background.tablet,
    lg: background.desktop
  });

  return (
    <Box>
      <Background url={_background} opacity={true} />
      <Box h={{ base: '10vh', md: '15vh' }} />
      <Box
        h='90vh'
        p={4}
        alignItems={'center'}
        display='flex'
        flexDirection={'column'}
      >
        <SectionTitle
          textStyle='h5'
          fontSize={'24px'}
          title='SO, YOU WANT TO TRAVEL TO'
          color='secondary'
          home={true}
        />

        <Box textStyle='h1' color='white'>
          SPACE
        </Box>
        <Box w={{ base: 'inherit', md: '70%' }}>
          <Description textAlign={'center'} description={homeDescription} />
        </Box>

        <Box height='100%' display='flex' flexDirection={'column-reverse'}>
          <Box
            justifySelf={'flex-end'}
            borderRadius='50%'
            border='55px solid transparent'
            _hover={{
              border: '55px solid rgba(300,300,300,0.2)'
            }}
            mb={6}
          >
            <Box
              display='flex'
              borderRadius={'90%'}
              bg={'terciary'}
              w={{ base: '150px', md: '242px' }}
              h={{ base: '150px', md: '242px' }}
              p={3}
              alignItems='flex-end'
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
      </Box>
    </Box>
  );
};

export default Home;
