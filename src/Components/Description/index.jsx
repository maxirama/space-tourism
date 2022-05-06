import React from 'react';
import { Text, Box } from '@chakra-ui/react';

const Description = ({ description, fontWeight, textAlign, lineHeight }) => {
  return (
    <Text
      fontWeight={fontWeight || 'light'}
      textAlign={textAlign || 'center'}
      lineHeight={lineHeight || '25px'}
      fontSize={{ base: '16px', md: '18px' }}
      color='secondary'
      p={4}
    >
      {description}
    </Text>
  );
};

export default Description;
