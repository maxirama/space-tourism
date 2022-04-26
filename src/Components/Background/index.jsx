import React from 'react';
import { Box } from '@chakra-ui/react';

const Background = ({ url, opacity }) => {
  return (
    <Box
      h='100vh'
      w='100vw'
      position='absolute'
      bgImage={url}
      bgSize='cover'
      bgRepeat={'repeat-y'}
      zIndex={-999}
    >
      {opacity ? (
        <Box
          h='100%'
          w='100vw'
          position='absolute'
          bg={'black'}
          opacity={'40%'}
          zIndex={-998}
        />
      ) : null}
    </Box>
  );
};

export default Background;
