import React from 'react';
import { Text, Box } from '@chakra-ui/react';

const SectionTitle = ({ sectionNumber, title, color, fontSize, pt, home }) => {
  return (
    <>
      <Box
        display='inline-flex'
        alignItems={'center'}
        justifyContent={{ base: 'center', md: home ? 'center' : 'flex-start' }}
        w='100vw'
        h='10vh'
        ml={{ base: 'none', md: home ? 0 : 10 }}
        mt={{ base: 10, md: home ? 0 : 20 }}
        pt={pt || null}
        gap={2}
      >
        <Text
          opacity='40%'
          fontWeight='bold'
          textStyle={'h5'}
          color='secondary'
        >
          {sectionNumber}
        </Text>
        <Text textStyle={'subHeading2'} color={color || 'terciary'}>
          {title}
        </Text>
      </Box>
    </>
  );
};

export default SectionTitle;
