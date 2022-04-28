import React from 'react';
import { Box, Text } from '@chakra-ui/react';

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
      <Box pr={6} pl={6}>
        <Text textAlign={'center'} color='secondary' w='100w'>
          {planetDescription}
        </Text>
      </Box>
      <Box pt={8}>
        <Text textStyle={'subHeading2'} color='secondary' textAlign={'center'}>
          AVG. DISTANCE
        </Text>
        <Text textStyle='h4' color='terciary' textAlign={'center'}>
          {planetDistance}
        </Text>
      </Box>
      <Box pt={8}>
        <Text textStyle={'subHeading2'} color='secondary' textAlign={'center'}>
          EST. TRAVEL TIME
        </Text>
        <Text textStyle='h4' color='terciary' textAlign={'center'} pb={7}>
          {planetTravel}
        </Text>
      </Box>
    </>
  );
};

export default DestinationData;
