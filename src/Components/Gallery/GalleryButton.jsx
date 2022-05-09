import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const GalleryButton = ({
  type,
  handleSelect,
  background,
  index,
  border,
  color
}) => {
  if (type === 'circle') {
    return (
      <Box
        width={{ base: '12px', md: '20px' }}
        h={{ base: '12px', md: '20px' }}
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
        display='flex'
        width={{ base: '60px', md: '80px' }}
        justifyContent='center'
        h={{ base: '60px', md: '80px' }}
        background={background}
        borderRadius={'50%'}
        onClick={handleSelect}
        _hover='background-color: white'
        index={index}
        p={1}
        border={border}
        color={color}
      >
        <Text textStyle={'h4'} textAlign='center' alignSelf={'center'}>{`${
          index + 1
        }`}</Text>
      </Box>
    );
  }
};

export default GalleryButton;
