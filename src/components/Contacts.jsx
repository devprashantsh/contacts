import React from 'react';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import ContactCard from './ContactCard';
import { getContacts } from '../api/contacts';
const Contacts = ({contacts}) => {
  

  return (
    <Box p="4">
      <Heading size="lg" mb="4">
        Contacts
      </Heading>
      <SimpleGrid columns={2} spacing={4}>
        {Array.isArray(contacts) ? contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))
        : (
          <Box>No Contacts found</Box>
        )
      
      }
      </SimpleGrid>
    </Box>
  );
};

export default Contacts;
