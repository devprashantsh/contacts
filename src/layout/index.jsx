import React from 'react';
import { Outlet } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

function Layout() {
  return (
      <Flex direction="column" align="center" minHeight="100vh">
        <Navbar /> {/* Include the Navbar component */}
        <Box width="80%" mt={4}>
          <Outlet />
        </Box>
      </Flex>
  );
}

export default Layout;
