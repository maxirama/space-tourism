import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import Gallery from '.';

const GalleryButton = ({ type, handleSelect, background, index }) => {
  return (
    <Box
      width={'12px'}
      h={'12px'}
      background={background}
      borderRadius={'50%'}
      onClick={handleSelect}
      _hover='background-color: white'
      index={index}
    />
  );
};

export default GalleryButton;
