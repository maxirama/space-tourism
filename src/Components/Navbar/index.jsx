import { React, useState } from 'react';
import { Box, useBreakpointValue, Image, Button, Text } from '@chakra-ui/react';
import Menu from './Menu';

const Navbar = ({ mobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (e) => {
    setIsOpen(!isOpen);
  };

  // const mobileNavbar = useBreakpointValue({ base: true, md: false });
  if (!mobile) {
    <Box display='inline-flex' justifyContent={'flex-end'} width='100vw' gap={5}>
      
    </Box>;
  }

  if (mobile) {
    return (
      <Box>
        <Menu isOpen={isOpen} handleClick={handleMenuClick} />
        <Box
          display='inline-flex'
          justifyContent={'space-between'}
          alignItems={'center'}
          position='absolute'
          mt={3}
          width='100vw'
        >
          <Image p={3} ml={2} src='src/assets/shared/logo.svg' />
          <Button
            position='relative'
            display={'flex-end'}
            variant='ghost'
            _hover='none'
            _focus={'none'}
            _active={'none'}
            _focusVisible={'none'}
            onClick={handleMenuClick}
            zIndex={isOpen ? '999' : 0}
          >
            <Image
              p={2}
              src={
                isOpen
                  ? 'src/assets/shared/icon-close.svg'
                  : 'src/assets/shared/icon-hamburger.svg'
              }
            />
          </Button>
        </Box>
      </Box>
    );
  }
};

export default Navbar;
