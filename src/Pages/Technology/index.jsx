import React, { useState, useEffect } from 'react';
import Background from '../../Components/Background';
import { useBreakpointValue, Text, Box } from '@chakra-ui/react';
import getData from '../../Services';
import SectionTitle from '../../Components/SectionTitle';
import Gallery from '../../Components/Gallery';
import End from '../../Components/End';

const Technology = () => {
  const [data, setData] = useState([]);
  const [technology, setTechnology] = useState({});

  const handleSelect = (technology) => {
    setTechnology(technology);
  };

  useEffect(() => {
    getData('technology').then((response) => {
      setData(response);
      setTechnology(response[0]);
      console.log(JSON.stringify(response));
    });
  }, []);

  const _background = {
    mobile: 'src/assets/technology/background-technology-mobile.jpg',
    tablet: 'src/assets/technology/background-technology-tablet.jpg',
    desktop: 'src/assets/technology/background-technology-desktop.jpg'
  };

  const background = useBreakpointValue({
    base: _background.mobile,
    md: _background.tablet,
    lg: _background.desktop
  });

  return (
    <Box overflowX={'hidden'}>
      <Background url={background} />
      <SectionTitle
        sectionNumber={'03'}
        title='SPACE LAUNCH 101'
        pt={{ base: 10, md: 20 }}
      />
      {data && (
        <>
          <Gallery
            currentImage={technology?.images?.landscape}
            handleSelect={handleSelect}
            data={data}
            style='numberGallery'
          />
          <Box
            display='flex'
            width='100vw'
            flexDirection={'column'}
            justifyContent='center'
            alignItems={'center'}
          >
            <Text textStyle={'h5'} pt={3} color='secondary'>
              THE TERMINOLOGY...
            </Text>
            <Text textStyle={'h3'} color='white' alignSelf={'center'}>
              {technology?.name?.toLocaleUpperCase()}
            </Text>
            <Text
              p={5}
              color='secondary'
              textAlign={'center'}
              lineHeight={'30px'}
            >
              {' '}
              {technology?.description}
            </Text>
          </Box>
        </>
      )}
      <End />
    </Box>
  );
};

export default Technology;
