import { React, useState } from 'react';
import { Box, useBreakpointValue, Image, Button } from '@chakra-ui/react';
import Icon from '../Icon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (e) => {
    setIsOpen(!isOpen);
  };
  const mobileNavbar = useBreakpointValue({ base: true, md: false });

  const navbarType = mobileNavbar ? <Box> Chau </Box> : <Box> Hola </Box>;

  return mobileNavbar ? (
    <Box
      display='inline-flex'
      justifyContent={'space-between'}
      alignItems={'center'}
      position='absolute'
      mt={3}
      width='100vw'
    >
      <Image p={3} ml={2} src='src\assets\shared\logo.svg' />
      <Button
        display={'flex-end'}
        variant='ghost'
        _hover='none'
        _focus={'box-shadow: none, background-color: none'}
      >
        <Image p={2} src='src\assets\shared\icon-hamburger.svg' />
      </Button>
    </Box>
  ) : (
    <Box position='absolute' p={3} mt={3} bg='none'>
      {' '}
      Hola{' '}
    </Box>
  );
};

export default Navbar;
