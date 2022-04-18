import { React, useState } from 'react';
import { Box, useBreakpointValue, Image, Button } from '@chakra-ui/react';
import Icon from '../Icon';

const Menu = () => {
  return (
    <Box
      position='absolute'
      filter='auto'
      blur='5px'
      bg='white'
      w='60vw'
      vh='100vh'
    ></Box>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (e) => {
    setIsOpen(!isOpen);
  };

  // const mobileNavbar = useBreakpointValue({ base: true, md: false });

  return (
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
        onClick={handleMenuClick}
      >
        <Image p={2} src='src\assets\shared\icon-hamburger.svg' />
      </Button>
      {isOpen ? <Menu /> : null}
    </Box>
  );
};

export default Navbar;
