import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const DestinationsList = ({ destinations, handleSelect }) => {
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
            borderBottom={'3px solid white'}
            variant='ghost'
            onClick={() => {
              handleSelect(destination);
            }}
            index={index}
            value={index}
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
