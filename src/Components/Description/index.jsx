import React from 'react';
import { Text } from '@chakra-ui/react';

const Description = ({ description, fontWeight, textAlign, lineHeight }) => {
  return (
    <Text
      fontWeight={fontWeight || 'inherit'}
      textAlign={textAlign || 'inherit'}
      lineHeight={lineHeight || '40px'}
      fontSize={{ base: '18px' }}
    >
      {description}
    </Text>
  );
};

export default Description;
