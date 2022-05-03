import React from 'react';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import NavItem from '../NavItem';

const sections = ['HOME', 'DESTINATION', 'CREW', 'TECHNOLOGY'];

const Menu = ({ isOpen }) => {
  const showMenu = useBreakpointValue({ base: isOpen, md: true });
  return showMenu ? (
    <>
      <Box
        display='flex'
        position={{ base: 'fixed', md: 'absolute' }}
        justifyContent='flex-end'
        h={{ base: '100vh', md: '10vh' }}
        w='100vw'
        zIndex='2'
        overflow={'hidden'}
      >
        <Box
          display='flex'
          flexDirection={'row'}
          bg='rgb(100,100,100,0.4)'
          h='100%'
          width='60%'
        >
          <Box
            display={{ base: 'initial', md: 'inline-flex' }}
            margin={{ base: 'initial' }}
            justifyContent={'center'}
            alignItems={{ base: 'initial', md: 'center' }}
            pb={{ base: 0, md: 5 }}
            p={6}
            pt={20}
          >
            {sections.map((section, index) => {
              return (
                <NavItem w='auto' h='100%' section={section} number={index} />
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  ) : null;
};

export default Menu;
