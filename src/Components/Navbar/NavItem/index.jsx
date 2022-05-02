import react from 'react';
import { Text, Box, Button, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavItem = ({ section, number, mobile }) => {
  let path = section === 'HOME' ? '/' : `/${section.toLowerCase()}`;

  const showNumber = useBreakpointValue({
    base: true,
    md: false
  });

  if (true) {
    return (
      <Link to={`${path}`}>
        <Box
          display='inline-flex'
          flexDirection={'row'}
          width='100%'
          pt={{ base: 10, md: 5 }}
        >
          <Button
            justifyContent={'start'}
            width='100%'
            variant='ghost'
            _hover='none'
            _focus={'none'}
            _active={'none'}
            borderRadius={'0px'}
          >
            {showNumber && (
              <Text pr={2} color='terciary' textStyle={'navItem'}>
                {`0${number}`}
              </Text>
            )}
            <Text color='terciary' textStyle={'navItem'} fontWeight={'normal'}>
              {section}
            </Text>
          </Button>
        </Box>
      </Link>
    );
  }
};

export default NavItem;
