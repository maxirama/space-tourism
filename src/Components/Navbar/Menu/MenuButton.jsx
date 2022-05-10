import React from 'react';
import { Button, Image } from '@chakra-ui/react';

const MenuButton = ({ handleMenuClick, isOpen }) => {
  return (
    <Button
      position='absolute'
      right={0}
      mt={6}
      display={'flex-end'}
      variant='ghost'
      _hover='none'
      _focus={'none'}
      _active={'none'}
      _focusVisible={'none'}
      onClick={handleMenuClick}
      zIndex={'999'}
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
  );
};

export default MenuButton;
