import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Description from '../Description';

const DestinationData = ({
  planetName,
  planetDescription,
  planetDistance,
  planetTravel
}) => {
  return (
    <>
      <Box display='flex' w='100vw' justifyContent={'center'}>
        <Text color='terciary' pt={3} textStyle={'h2'}>
          {planetName}
        </Text>
      </Box>
      <Box display='flex' w='100%' justifyContent={'center'}>
        <Box
          w='80%'
          borderBottom='1px solid rgba(192, 192, 192, 0.3)'
          color='secondary'
          pb={5}
        >
          <Description textAlign={'center'} description={planetDescription} />

        </Box>
      </Box>
      <Box
        display={{ base: 'initial', md: 'inline-flex' }}
        gap={{ base: 0, md: 20 }}
        width='100%'
        justifyContent={'center'}
      >
        <Box pt={8}>
          <Text
            textStyle={'subHeading2'}
            color='secondary'
            textAlign={'center'}
          >
            AVG. DISTANCE
          </Text>
          <Text textStyle='h4' color='terciary' textAlign={'center'}>
            {planetDistance}
          </Text>
        </Box>
        <Box pt={8}>
          <Text
            textStyle={'subHeading2'}
            color='secondary'
            textAlign={'center'}
          >
            EST. TRAVEL TIME
          </Text>
          <Text textStyle='h4' color='terciary' textAlign={'center'} pb={7}>
            {planetTravel}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default DestinationData;
