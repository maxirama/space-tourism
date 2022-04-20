import react, { useEffect, useState } from 'react';
import { Box, useBreakpointValue, Text, Button } from '@chakra-ui/react';
import Background from '../../Components/Background';
import Planet from '../../Components/Planet';
import data from '../../../data.json';

const destinations = data.destinations;
let planets = [];

(function () {
  destinations.forEach((destination) => {
    planets = [...planets, destination.name.toUpperCase()];
  });
})();

const DestinationItem = ({ planet, index }) => {
  return (
    <Button
      borderRadius={'0px'}
      key={index}
      pb={1}
      borderBottom={'3px solid white'}
      variant='ghost'
    >
      <Text letterSpacing={2} textStyle={'h5'} color='secondary'>
        {planet}
      </Text>
    </Button>
  );
};

const DestinationsList = ({ planets, handleClick }) => {
  return (
    <Box
      pt={3}
      gap={5}
      display='inline-flex'
      justifyContent={'center'}
      width='100vw'
    >
      {planets.map((planet, index) => {
        return <DestinationItem planet={planet} index={index} />;
      })}
    </Box>
  );
};

const Destination = () => {
  const [currentPlanet, setCurrentPlanet] = useState(destinations[0]);

  const background = {
    desktop: 'src/assets/destination/background-destination-desktop.jpg',
    tablet: 'src/assets/destination/background-destination-tablet.jpg',
    mobile: 'src/assets/destination/background-destination-mobile.jpg'
  };

  const _background = useBreakpointValue({
    base: background.mobile,
    md: background.tablet,
    lg: background.desktop
  });

  return (
    <>
      <Background url={_background} opacity={false} />
      <Box
        pt={20}
        display='inline-flex'
        alignItems={'center'}
        justifyContent={'center'}
        w='100vw'
        h='10vh'
        mt={6}
      >
        <Text
          opacity='40%'
          fontWeight='bold'
          textStyle={'h5'}
          pr={2}
          color='secondary'
        >
          01
        </Text>{' '}
        <Text textStyle={'subHeading2'} color='terciary'>
          PICK YOUR DESTINATION{' '}
        </Text>
      </Box>
      <Box w='100vw' pt={10} display='flex' justifyContent={'center'}>
        <Planet url={destinations[0].images.png} />
      </Box>
      <DestinationsList planets={planets} />
      <Box display='flex' w='100vw' justifyContent={'center'}>
        <Text color='terciary' pt={3} textStyle={'h1'}>
          {currentPlanet.name.toLocaleUpperCase()}
        </Text>
      </Box>
    </>
  );
};

export default Destination;
