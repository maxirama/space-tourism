import react from 'react';
import { Text, Box, Button } from '@chakra-ui/react';

const NavItem = ({ section, number }) => {
  return (
    <Box
      display='inline-flex'
      flexDirection={'row'}
      width='100%'
      pt={10}
      ml={10}
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
        <Text pr={2} color='terciary' textStyle={'navItem'}>
          {`0${number}`}
        </Text>
        <Text color='terciary' textStyle={'navItem'} fontWeight={'normal'}>
          {section}
        </Text>
      </Button>
    </Box>
  );
};

export default NavItem;
