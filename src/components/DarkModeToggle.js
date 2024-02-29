import React from 'react';
import { useColorMode, Button } from '@chakra-ui/react';

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
    </Button>
  );
};

export default DarkModeToggle;
