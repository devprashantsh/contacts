import { Box } from '@chakra-ui/react';
import React, {useState} from 'react'
import ContactList from '../components/contactList';
import ContactForm from '../components/ContactForm';

const contactsDummy = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    profilePicture: 'https://via.placeholder.com/100',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '987-654-3210',
    profilePicture: 'https://via.placeholder.com/100',
  },
];

const Home = () => {
  const [contacts, setContacts] = useState(contactsDummy);
  const addContact = (newContact) => {
    // Add the new contact to your list of contacts
    setContacts([...contacts, newContact]);
  };
  return (
    <Box p="4">
        <ContactList contacts={contacts} />
        <ContactForm onAddContact={addContact} />
      </Box>
  )
}

export default Home