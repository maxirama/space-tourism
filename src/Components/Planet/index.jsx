import React from 'react';
import { Image } from '@chakra-ui/react';

const Planet = ({ url }) => {
  return <Image w={'50vw'} src={url} />;
};

export default Planet;
