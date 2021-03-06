import React, { useState, useEffect } from 'react';
import Background from '../../Components/Background';
import { Box, Text, useBreakpointValue } from '@chakra-ui/react';
import SectionTitle from '../../Components/SectionTitle';
import data from '../../../data.json';
import Gallery from '../../Components/Gallery';
import Description from '../../Components/Description';
import BackgroundDesktop from '../../assets/crew/background-crew-desktop.jpg';
import BackgroundTablet from '../../assets/crew/background-crew-tablet.jpg';
import BackgroundMobile from '../../assets/crew/background-crew-mobile.jpg';

function getCrew() {
  return Promise.resolve([...data.crew]);
}

const Crew = () => {
  const [data, setData] = useState([]);
  const [crewMember, setCrewMember] = useState({});

  useEffect(() => {
    getCrew().then((response) => {
      setData(response);
      setCrewMember(response[0]);
    });
  }, []);

  const handleSelect = (crewMember) => {
    setCrewMember(crewMember);
  };

  const _displayEnd = {
    mobile: true,
    tablet: false
  };

  const _background = {
    desktop: BackgroundDesktop,
    tablet: BackgroundTablet,
    mobile: BackgroundMobile
  };

  const background = useBreakpointValue({
    base: _background.mobile,
    md: _background.tablet,
    lg: _background.desktop
  });

  const displayEnd = useBreakpointValue({
    base: _displayEnd.mobile,
    md: _displayEnd.tablet
  });

  return (
    <Box overflowX='hidden'>
      <Background url={background} />
      <Box display='flex column' alignItems='flex-end'>
        <SectionTitle
          sectionNumber={'02'}
          title='MEET YOUR CREW'
          pt={{ base: 10, md: 20 }}
          pb={{ base: 5, md: 10 }}
        />
        <Box
          display='flex'
          flexDirection={{ base: 'column', md: 'column-reverse' }}
        >
          {crewMember && (
            <Gallery
              data={data}
              handleSelect={handleSelect}
              currentImage={crewMember?.images?.png}
              style={'buttonGallery'}
            />
          )}
          <Box
            width='100vw'
            display='flex'
            flexDirection='column'
            justifyContent={'flex-end'}
            alignItems={'center'}
          >
            <Text textStyle={'h4'} color='lightgray' opacity='80%'>
              {crewMember?.role?.toUpperCase()}
            </Text>
            <Text textStyle='h3' color='white'>
              {crewMember?.name?.toUpperCase()}
            </Text>
            <Box w='80%'>
              <Description description={crewMember?.bio} textAlign='center' />
            </Box>
          </Box>
        </Box>
        {displayEnd && <Box h='10vh' />}
      </Box>
    </Box>
  );
};

export default Crew;
