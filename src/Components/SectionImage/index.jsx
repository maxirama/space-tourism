import React from 'react';
import { Image, Box } from '@chakra-ui/react';

const SectionImage = ({ url, type }) => {
  if (type === 'planet') {
    return <Image w='50vw' src={url} />;
  }
  if (type === 'crew') {
    return <Image w={'250px'} h={'320px'} src={url} />;
  }
  if (type === 'full') {
    return <Image src={url} w='100vw' h='50vw' />;
  }
};

export default SectionImage;
