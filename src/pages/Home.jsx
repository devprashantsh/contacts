import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Contacts from "../components/Contacts";
import ContactForm from "../components/ContactForm";
import { getContacts } from "../api/contacts";

const Home = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    const contacts = await getContacts();
    setContacts(contacts);
  }
  
  const addContact = (newContact) => {
    fetchContacts()
  };
  return (
    <Box p="4">
      <Contacts contacts={contacts} />
      <ContactForm onAddContact={addContact} />
    </Box>
  );
};

export default Home;
