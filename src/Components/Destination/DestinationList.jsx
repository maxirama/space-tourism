import React from 'react';
import { Box } from '@chakra-ui/react';
import DestinationItem from './DestinationItem';
const DestinationsList = ({ planets, handleClick }) => {
  return (
    <Box
      pt={5}
      gap={5}
      display='inline-flex'
      justifyContent={'center'}
      alignContent='center'
      width='100vw'
    >
      {planets.map((planet, index) => {
        return (
          <DestinationItem
            planet={planet.name.toUpperCase()}
            index={index}
            handleClick={handleClick}
          />
        );
      })}
    </Box>
  );
};

export default DestinationsList;
