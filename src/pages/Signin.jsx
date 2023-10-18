import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

function Signin() {
  const auth = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.signin(formData);
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();

    auth.loginWithGoogle();
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
        Log In
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
          <Button type="submit" colorScheme="teal">
            Log In
          </Button>
        </Stack>
      </form>
      <Text></Text>
      <Button
        width="full"
        marginTop={5}
        type="button"
        colorScheme="teal"
        variant="outline"
        onClick={handleGoogleLogin}
      >
        Sign in with Google
      </Button>
      <Text mt="4" textAlign="center">
        Don't have an account?{" "}
        <Link color="teal.500" to="/signup">
          Sign up
        </Link>
      </Text>
    </Box>
  );
}

export default Signin;
