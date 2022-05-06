import React, { useState, useEffect } from 'react';
import Background from '../../Components/Background';
import { Box, Text, useBreakpointValue } from '@chakra-ui/react';
import SectionTitle from '../../Components/SectionTitle';
import data from '../../../data.json';
import Gallery from '../../Components/Gallery';
import { Button } from '@chakra-ui/react';
import Description from '../../Components/Description';

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
    desktop: 'src/assets/crew/background-crew-desktop.jpg',
    tablet: 'src/assets/crew/background-crew-tablet.jpg',
    mobile: 'src/assets/crew/background-crew-mobile.jpg'
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
        <SectionTitle sectionNumber={'02'} title='MEET YOUR CREW' />
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
            <Description description={crewMember?.bio} textAlign='center' />
          </Box>
        </Box>
        {displayEnd && <Box h='10vh' />}
      </Box>
    </Box>
  );
};

export default Crew;
