import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';
import { addContact } from '../api/contacts';
import { useAuth } from '../contexts/auth-context';

const ContactForm = ({ onAddContact }) => {
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });
  const {user} = useAuth()
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const uid = user.uid
    addContact(uid,contact)
    setContact({name: '', email: '', phone: ''})
    onAddContact(contact);
  };

  return (
    <Box borderWidth="1px" borderRadius="md" p="4" boxShadow="md">
      <form onSubmit={handleFormSubmit}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Phone</FormLabel>
          <Input
            type="text"
            name="phone"
            value={contact.phone}
            onChange={handleInputChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" mt="4" >
          Add Contact
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
