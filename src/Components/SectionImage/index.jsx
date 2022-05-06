import React from 'react';
import { Image, Box } from '@chakra-ui/react';

const SectionImage = ({ url, type }) => {
  if (type === 'planet') {
    return <Image w={{ base: '50vw', md: '300px' }} src={url} />;
  }
  if (type === 'crew') {
    return (
      <Image
        w={{ base: '250px', md: '55vw' }}
        h={{ base: '320px', md: '60vw' }}
        position={{ base: 'inherit' }}
        bottom={{ base: null, md: '0px' }}
        src={url}
        mt={{ base: null, md: 20 }}
      />
    );
  }
  if (type === 'full') {
    return <Image src={url} w='100vw' h='50vw' />;
  }
};

export default SectionImage;
