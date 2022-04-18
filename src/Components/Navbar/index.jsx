import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';

const Navbar = () => {
  const mobileNavbar = useBreakpointValue({ base: true, md: false });

  const navbarType = mobileNavbar ? <Box> Chau </Box> : <Box> Hola </Box>;

  return mobileNavbar ? (
    <Box position='absolute' mb={3} bg='none'>
      {' '}
      Chau{' '}
    </Box>
  ) : (
    <Box position='absolute' p={3} mt={3} bg='none'>
      {' '}
      Hola{' '}
    </Box>
  );
};

export default Navbar;
