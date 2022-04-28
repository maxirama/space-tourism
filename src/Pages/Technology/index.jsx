import React, { useState, useEffect } from 'react';
import Background from '../../Components/Background';
import { useBreakpointValue } from '@chakra-ui/react';
import getData from '../../Services';
import SectionTitle from '../../Components/SectionTitle';
import Gallery from '../../Components/Gallery';

const Technology = () => {
  const [data, setData] = useState({});
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

  console.log(technology?.images?.portrait);
  return (
    <>
      <Background url={background} />
      <SectionTitle sectionNumber={'03'} title='SPACE LAUNCH 101' p={6} />
      <Gallery
        currentImage={technology?.images?.portrait}
        handleSelect={handleSelect}
        style='numberGallery'
      />
    </>
  );
};

export default Technology;
