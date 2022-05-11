import React, { useState } from 'react';
import { Box, useBreakpointValue, Button, Image } from '@chakra-ui/react';
import NavItem from '../NavItem';
import MenuButton from './MenuButton';

const sections = ['HOME', 'DESTINATION', 'CREW', 'TECHNOLOGY'];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const handleMenuClick = (e) => {
    setIsOpen(!isOpen);
    setCurrentSection(parseInt(e.target.attributes.value.value));
  };

  const showMenu = useBreakpointValue({ base: isOpen, md: true });
  const mobileMenu = useBreakpointValue({ base: true, md: false });

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
          {mobileMenu && (
            <MenuButton handleMenuClick={handleMenuClick} isOpen={isOpen} />
          )}
          <Box
            display={{ base: 'initial', md: 'inline-flex' }}
            margin={{ base: 'initial' }}
            justifyContent={'center'}
            alignItems={{ base: 'initial', md: 'center' }}
            pb={{ base: 0, md: 5 }}
            p={5}
            pt={{ base: 20, md: 0 }}
          >
            {sections.map((section, index) => {
              return (
                <Box>
                  <NavItem
                    w='auto'
                    h='100%'
                    section={section}
                    number={index}
                    handleMenuClick={handleMenuClick}
                    currentSection={currentSection}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  ) : (
    <MenuButton handleMenuClick={handleMenuClick} />
  );
};

export default Menu;
