import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const GalleryButton = ({ type, handleSelect, background, index }) => {
  if (type === 'circle') {
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
  }

  if (type === 'number') {
    return (
      <Box
        width={'12px'}
        h={'12px'}
        background={background}
        borderRadius={'50%'}
        onClick={handleSelect}
        _hover='background-color: white'
        index={index}
      >
        <Text>{index}</Text>
      </Box>
    );
  }
};

export default GalleryButton;
