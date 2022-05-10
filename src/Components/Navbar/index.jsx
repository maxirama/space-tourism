import { React, useState } from 'react';
import { Box, useBreakpointValue, Image, Button, Text } from '@chakra-ui/react';
import Menu from './Menu';

const Navbar = () => {
  const hamburgerMenu = useBreakpointValue({ base: true, md: false });

  const handleClick = (e) => {
    console.log('ola');
  };

  return (
    <Box w='100vw'>
      <Menu />
      <Box
        display='inline-flex'
        justifyContent={'space-between'}
        alignItems={'center'}
        position={{ base: 'absolute', md: 'absolute' }}
        mt={3}
        width='80vw'
      >
        <Image p={3} ml={2} src='src/assets/shared/logo.svg' />
      </Box>
    </Box>
  );
};
export default Navbar;
