import react from 'react';
import { Text, Box, Button, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavItem = ({ section, number, currentSection, handleMenuClick }) => {
  let path = section === 'HOME' ? '/' : `/${section.toLowerCase()}`;

  const showNumber = useBreakpointValue({
    base: true,
    md: false
  });

  const handleClick = (e) => {
    console.log('probando');
  };

  return (
    <Link to={`${path}`}>
      <Box
        display='inline-flex'
        flexDirection={'row'}
        width='100%'
        pt={{ base: 10, md: 5 }}
        onClick={handleClick}
        bg={currentSection == number ? 'red' : 'initial'}
        borderBottom={currentSection == number ? '3px solid blue' : 'none'}
      >
        <Button
          position={'relative'}
          justifyContent={'start'}
          width='100%'
          variant='ghost'
          _hover='none'
          _focus={'none'}
          _active={'none'}
          borderRadius={'0px'}
          onClick={handleMenuClick}
          value={number}
        >
          {showNumber && (
            <Text pr={2} color='terciary' textStyle={'navItem'} value={number}>
              {`0${number}`}
            </Text>
          )}
          <Text
            color='terciary'
            textStyle={'navItem'}
            fontWeight={'normal'}
            value={number}
          >
            {section}
          </Text>
        </Button>
      </Box>
    </Link>
  );
};

export default NavItem;
