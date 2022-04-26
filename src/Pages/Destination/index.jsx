import react, { useEffect, useState } from 'react';
import { Box, useBreakpointValue, Text, Button } from '@chakra-ui/react';
import DestinationsList from '../../Components/Destination/DestinationList';
import DestinationData from '../../Components/Destination/DestinationData';
import Background from '../../Components/Background';
import Planet from '../../Components/Planet';
import data from '../../../data.json';

const Destination = () => {
  const destinations = data.destinations;

  const [currentPlanet, setCurrentPlanet] = useState(destinations[0]);
  const [planets, setPlanets] = useState([]);

  const handleClick = (e) => {
    destinations[e.target.value]
      ? setCurrentPlanet(destinations[e.target.value])
      : console.log(currentPlanet);
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
        <Planet url={currentPlanet.images.png} />
      </Box>
      <DestinationsList planets={destinations} handleClick={handleClick} />
      <DestinationData
        planetDescription={currentPlanet.description}
        planetName={currentPlanet.name.toLocaleUpperCase()}
        planetTravel={currentPlanet.travel.toLocaleUpperCase()}
        planetDistance={currentPlanet.distance.toLocaleUpperCase()}
      />
    </>
  );
};

export default Destination;
