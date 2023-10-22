import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';

function SignupPage() {
    const auth = useAuth()
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const onSuccessSignup = () => {
    navigate("/signin")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    auth.signup(formData,onSuccessSignup)
  };

  return (
      <Box
        maxW="sm"
        mx="auto"
        mt="8"
        p="4"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
      >
        <Heading as="h2" size="lg" textAlign="center" mb="4">
          Sign Up
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing="4">
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </FormControl>
            <Button type="submit" colorScheme="brand">
              Sign Up
            </Button>
          </Stack>
        </form>
        <Text mt="4" textAlign="center">
          Already have an account?{' '}
          <Link to="/signin">
            Log in
          </Link>
        </Text>
      </Box>
  );
}

export default SignupPage;
