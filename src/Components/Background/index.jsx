import React from 'react';
import { Box } from '@chakra-ui/react';

const Background = ({ url }) => {
  return (
    <>
      <Box
        h='100vh'
        w='100vw'
        position='absolute'
        bgImage={url}
        bgSize='cover'
        zIndex={-999}
      >
        <Box
          h='100vh'
          w='100vw'
          position='absolute'
          bg={'black'}
          opacity={'40%'}
          zIndex={-998}
        ></Box>
      </Box>
    </>
  );
};

export default Background;
