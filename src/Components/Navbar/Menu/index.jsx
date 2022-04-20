import React from 'react';
import { Box } from '@chakra-ui/react';
import NavItem from '../NavItem';

const sections = ['HOME', 'DESTINATION', 'CREW', 'TECHNOLOGY'];

const Menu = ({ isOpen }) => {
  return isOpen ? (
    <>
      <Box
        position='absolute'
        justifyContent='flex-end'
        h='100vh'
        w='100vw'
        display='flex'
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
          <Box h='100%' pt={20}>
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
