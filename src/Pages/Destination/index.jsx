import react, { useEffect, useState } from 'react';
import { Box, useBreakpointValue, Text, Button } from '@chakra-ui/react';
import Background from '../../Components/Background';
import Planet from '../../Components/Planet';
import data from '../../../data.json';

const destinations = data.destinations;

const DestinationItem = ({ planet, index, handleClick }) => {
  return (
    <Button
      borderRadius={'0px'}
      key={index}
      p={1}
      pb={3}
      borderBottom={'3px solid white'}
      variant='ghost'
      onClick={handleClick}
      index={index}
      value={index}
    >
      <Text
        letterSpacing={2}
        fontWeight='light'
        textStyle={'subHeading2'}
        color='secondary'
      >
        {planet}
      </Text>
    </Button>
  );
};

const DestinationsList = ({ planets, handleClick }) => {
  return (
    <Box
      pt={5}
      gap={5}
      display='inline-flex'
      justifyContent={'center'}
      alignContent='center'
      width='100vw'
    >
      {planets.map((planet, index) => {
        return (
          <DestinationItem
            planet={planet.name.toUpperCase()}
            index={index}
            handleClick={handleClick}
          />
        );
      })}
    </Box>
  );
};

const Destination = () => {
  const [currentPlanet, setCurrentPlanet] = useState(destinations[0]);
  const [planets, setPlanets] = useState([]);

  const handleClick = (e) => {
    destinations[e.target.value]
      ? setCurrentPlanet(destinations[e.target.value])
      : null;
  };

  useEffect(() => {
    destinations.forEach((destination) => {
      console.log(destination);
      setPlanets([...planets, destination.name.toUpperCase()]);
    });
  }, []);

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

  console.log(planets);
  console.log(JSON.stringify(currentPlanet));
  console.log(JSON.stringify(destinations));

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
      <DestinationsList planets={destinations} handleClick={handleClick} />
      <Box display='flex' w='100vw' justifyContent={'center'}>
        <Text color='terciary' pt={3} textStyle={'h2'}>
          {currentPlanet.name.toLocaleUpperCase()}
        </Text>
      </Box>
      <Box pr={6} pl={6}>
        <Text textAlign={'center'} color='secondary' w='100w'>
          {currentPlanet.description}
        </Text>
      </Box>
      <Box pt={8}>
        <Text textStyle={'subHeading2'} color='secondary' textAlign={'center'}>
          AVG. DISTANCE
        </Text>
        <Text textStyle='h4' color='terciary' textAlign={'center'}>
          {currentPlanet.distance.toLocaleUpperCase()}
        </Text>
      </Box>
      <Box pt={8}>
        <Text textStyle={'subHeading2'} color='secondary' textAlign={'center'}>
          EST. TRAVEL TIME
        </Text>
        <Text textStyle='h4' color='terciary' textAlign={'center'}>
          {currentPlanet.travel.toLocaleUpperCase()}
        </Text>
      </Box>
    </>
  );
};

export default Destination;
