import React, { useState, useEffect } from 'react';
import Background from '../../Components/Background';
import { Box, Text, useBreakpointValue } from '@chakra-ui/react';
import SectionTitle from '../../Components/SectionTitle';
import data from '../../../data.json';
import Gallery from '../../Components/Gallery';
import { Button } from '@chakra-ui/react';

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

  return (
    <>
      <Background url={background} />;
      <SectionTitle sectionNumber={'02'} title='MEET YOUR CREW' />
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
        <Text
          p={6}
          pl={8}
          pr={8}
          lineHeight='30px'
          textAlign={'center'}
          color='secondary'
        >
          {crewMember?.bio}
        </Text>
      </Box>
      <Box h='10vh' />
    </>
  );
};

export default Crew;
