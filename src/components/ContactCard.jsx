import React from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  Button,
  Stack,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const ContactCard = ({ contact }) => {
  const { name, email, phone, profilePicture } = contact;

  return (
    <Box borderWidth="1px" borderRadius="md" p="4" boxShadow="md">
      <Image src={profilePicture} alt={name} boxSize="100px" rounded="full" />
      <Text mt="2" fontWeight="semibold" fontSize="lg">
        {name}
      </Text>
      <Text fontSize="sm" color="gray.600">
        {email}
      </Text>
      <Text fontSize="sm" color="gray.600">
        {phone}
      </Text>
      <Flex mt="4">
        <Spacer />
        <Stack direction="row">
          <IconButton
            aria-label="Edit Contact"
            icon={<EditIcon />}
            size="sm"
            colorScheme="teal"
          />
          <IconButton
            aria-label="Delete Contact"
            icon={<DeleteIcon />}
            size="sm"
            colorScheme="red"
          />
        </Stack>
      </Flex>
    </Box>
  );
};

export default ContactCard;
