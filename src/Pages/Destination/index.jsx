import react, { useEffect, useState } from 'react';
import { Box, useBreakpointValue, Text, Button } from '@chakra-ui/react';
import DestinationsList from '../../Components/Destination/DestinationList';
import DestinationData from '../../Components/Destination/DestinationData';
import Background from '../../Components/Background';
import SectionImage from '../../Components/SectionImage';
import SectionTitle from '../../Components/SectionTitle';
import data from '../../../data.json';
import End from '../../Components/End';
import BackgroundMobile from '../../assets/destination/background-destination-mobile.jpg';
import BackgroundTablet from '../../assets/destination/background-destination-tablet.jpg';
import BackgroundDesktop from '../../assets/destination/background-destination-desktop.jpg';

function getDestinations() {
  return Promise.resolve([...data.destinations]);
}

const Destination = () => {
  const [currentPlanet, setCurrentPlanet] = useState();
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getDestinations().then((destinations) => {
      setDestinations(destinations);
      setCurrentPlanet(destinations[0]);
    });
  }, []);

  const background = {
    mobile: BackgroundMobile,
    tablet: BackgroundTablet,
    desktop: BackgroundDesktop
  };

  const _background = useBreakpointValue({
    base: background.mobile,
    md: background.tablet,
    lg: background.desktop
  });

  const handleSelect = (destination) => {
    setCurrentPlanet(destination);
  };

  return (
    <>
      <Box overflowX='hidden'>
        <Background url={_background} opacity={false} />
        <SectionTitle
          sectionNumber={'01'}
          title={'PICK YOUR DESTINATION'}
          pt={{ base: 10, md: 20 }}
        />

        {currentPlanet && (
          <>
            <Box w='100vw' pt={5} display='flex' justifyContent={'center'}>
              <SectionImage type='planet' url={currentPlanet.images.png} />
            </Box>
            <DestinationsList
              destinations={destinations}
              handleSelect={handleSelect}
            />
            <DestinationData
              planetDescription={currentPlanet.description}
              planetName={currentPlanet.name.toLocaleUpperCase()}
              planetTravel={currentPlanet.travel.toLocaleUpperCase()}
              planetDistance={currentPlanet.distance.toLocaleUpperCase()}
            />
          </>
        )}
      </Box>
      <End />
    </>
  );
};

export default Destination;
