import react from 'react';
import { Text, Box, Button } from '@chakra-ui/react';

const NavItem = ({ section, number }) => {
  return (
    <Box
      display='inline-flex'
      flexDirection={'row'}
      width='100%'
      pt={6}
      ml={10}
    >
      <Button
        justifyContent={'start'}
        width='100%'
        variant='ghost'
        _hover='border-left:1px solid black'
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
