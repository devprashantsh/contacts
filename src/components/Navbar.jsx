// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Button, Text, Stack, Avatar } from '@chakra-ui/react';
import { useAuth } from '../contexts/auth-context';

function Navbar() {
  const auth = useAuth();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="teal.500"
      width="100%"
      color="white"
    >
      <Link to="/">
        <Text fontSize="xl" fontWeight="bold">
          Contacts
        </Text>
      </Link>
      <Box>
        {auth.isAuthenticated ? (
          <Stack direction='row'>
            <Avatar name={auth.user.displayName} src={auth.user.photoURL}  />
            <Button
              onClick={auth.signout}
              variant="link"
              color="white"
              _hover={{ textDecoration: 'none' }}
            >
              Sign out
            </Button>
          </Stack>
        ) : (
          <Link to="/signin">
            <Button
              variant="outline"
              color="white"
              _hover={{ bg: 'teal.600' }}
            >
              Log in
            </Button>
          </Link>
        )}
      </Box>
    </Flex>
  );
}

export default Navbar;
