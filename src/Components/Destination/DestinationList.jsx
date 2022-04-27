import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

const DestinationsList = ({ destinations, handleSelect }) => {
  const [selected, setSelected] = useState(0);

  function _handleSelect(destination, index) {
    handleSelect(destination);
    setSelected(index);
  }

  return (
    <Box
      pt={5}
      gap={5}
      display='inline-flex'
      justifyContent={'center'}
      alignContent='center'
      width='100vw'
    >
      {destinations?.map((destination, index) => {
        console.log(destination);
        return (
          <Button
            borderRadius={'0px'}
            key={index}
            p={1}
            pb={3}
            variant='ghost'
            onClick={() => {
              _handleSelect(destination, index);
            }}
            _hover='none'
            index={index}
            value={index}
            borderBottom={index === selected ? `3px solid white` : null}
          >
            <Text
              letterSpacing={2}
              fontWeight='light'
              textStyle={'subHeading2'}
              color='secondary'
            >
              {destination.name.toUpperCase()}
            </Text>
          </Button>
        );
      })}
    </Box>
  );
};

export default DestinationsList;
