import React from 'react';
import { Text, Box } from '@chakra-ui/react';

const SectionTitle = ({ sectionNumber, title }) => {
  return (
    <>
      <Box
        display='inline-flex'
        alignItems={'center'}
        justifyContent={'center'}
        w='100vw'
        h='10vh'
        mt={6}
      >
        <Text
          opacity='40%'
          fontWeight='bold'
          textStyle={'h5'}
          pr={2}
          color='secondary'
        >
          {sectionNumber}
        </Text>
        <Text textStyle={'subHeading2'} color='terciary'>
          {title}
        </Text>
      </Box>
    </>
  );
};

export default SectionTitle;
