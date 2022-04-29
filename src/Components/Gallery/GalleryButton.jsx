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
        display='flex'
        width={'60px'}
        justifyContent='center'
        h={'60px'}
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
