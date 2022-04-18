import React from 'react';
import Image from '@chakra-ui/react';

const Background = ({ images }) => {



  console.log(images);
  return (
    <Image
      src={{ base: images.mobile, md: images.tablet, lg: images.desktop }}
    />
  );
};

export default Background;
