import React from 'react';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import ContactCard from './ContactCard';

const ContactList = ({ contacts }) => {
  return (
    <Box p="4">
      <Heading size="lg" mb="4">
        Contacts
      </Heading>
      <SimpleGrid columns={2} spacing={4}>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ContactList;
