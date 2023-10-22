import React from "react";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import ContactCard from "./ContactCard";
import { getContacts } from "../api/contacts";
import TableComp from "./TableComp";
const Contacts = ({ contacts }) => {
  if (!Array.isArray(contacts) || !contacts.length){
    return <Box>No Contacts found</Box>
  }
  const data = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Alice', age: 25, city: 'Los Angeles' },
    { name: 'Bob', age: 35, city: 'Chicago' },
  ];
  
  const columns = [
    {
      header: 'Name',
      cell: (row) => row.name,
    },
    {
      header: 'Email',
      cell: (row) => row.email,
    },
    {
      header: 'City',
      cell: (row) => row.phone,
    },
  ];
  return (
    <Box p="4">
      <Heading size="lg" mb="4">
        Contacts
      </Heading>
        {/* <SimpleGrid columns={2} spacing={4}>
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </SimpleGrid> */}
        <TableComp
          columns={columns}
          data={contacts}
          caption="Contacts"
        />
    </Box>
  );
};

export default Contacts;
