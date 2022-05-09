import React from 'react';
import { Image, Box } from '@chakra-ui/react';

const SectionImage = ({ url, type }) => {
  if (type === 'planet') {
    return <Image w={{ base: '50vw', md: '300px' }} src={url} />;
  }
  if (type === 'crew') {
    return (
      <Box>
        <Image
          // w={{ base: '250px', md: '100%' }}
          // h={{ base: '320px', md: 'inherit' }}
          position={{ base: 'inherit' }}
          bottom={{ base: null, md: '0px' }}
          src={url}
          mt={{ base: null, md: 20 }}
        />
      </Box>
    );
  }
  if (type === 'full') {
    return <Image W='100%' src={url} />;
  }
};

export default SectionImage;
