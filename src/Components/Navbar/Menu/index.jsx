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
        position='absolute'
        justifyContent='flex-end'
        h={{ base: '100vh', md: '15vh' }}
        w='100vw'
        zIndex='2'
        overflow={'hidden'}
      >
        <Box
          display='flex'
          flexDirection={'row'}
          bg='rgb(100,100,100,0.4)'
          h='100%'
          width='60vw'
        >
          <Box
            h='100%'
            pt={{ base: 20, md: 5 }}
            display={{ base: 'initial', md: 'inline-flex' }}
            margin={{ base: 'initial', md: 'auto' }}
            alignSelf={{ base: 'initial', md: 'center' }}
          >
            {sections.map((section, index) => {
              return <NavItem section={section} number={index} />;
            })}
          </Box>
        </Box>
      </Box>
    </>
  ) : null;
};

export default Menu;
