import { React, useState } from 'react';
import { Box, useBreakpointValue, Image, Button, Text } from '@chakra-ui/react';
import Menu from './Menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (e) => {
    setIsOpen(!isOpen);
  };

  const hamburgerMenu = useBreakpointValue({ base: true, md: false });

  return (
    <Box w='100vw'>
      <Menu isOpen={isOpen} handleClick={handleMenuClick} />
      <Box
        display='inline-flex'
        justifyContent={'space-between'}
        alignItems={'center'}
        position={{ base: 'absolute', md: 'absolute' }}
        mt={3}
        width='100vw'
      >
        <Image p={3} ml={2} src='src/assets/shared/logo.svg' />

        {hamburgerMenu && (
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
        )}
      </Box>
    </Box>
  );
};
export default Navbar;
