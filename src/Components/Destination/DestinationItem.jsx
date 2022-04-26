import React from 'react';
import { Button, Text } from '@chakra-ui/react';

const DestinationItem = ({ planet, index, handleClick }) => {
  return (
    <Button
      borderRadius={'0px'}
      key={index}
      p={1}
      pb={3}
      borderBottom={'3px solid white'}
      variant='ghost'
      onClick={handleClick}
      index={index}
      value={index}
    >
      <Text
        letterSpacing={2}
        fontWeight='light'
        textStyle={'subHeading2'}
        color='secondary'
      >
        {planet}
      </Text>
    </Button>
  );
};

export default DestinationItem;
