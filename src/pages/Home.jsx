import {
  Box,
  Button,
  Heading,
  Stack,
  Tag,
  useDisclosure,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import Contacts from "../components/Contacts";
import { getContacts } from "../api/contacts";
import ContactDrawer from "../components/ContactDrawer";
import { AddIcon, InfoIcon, PlusSquareIcon } from "@chakra-ui/icons";

const Home = () => {
  const [contacts, setContacts] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    const contacts = await getContacts();
    setContacts(contacts);
  }

  return (
    <Box p="4">
      <Stack direction="row">
        <Heading size="lg" mb="4">
          Contacts
        </Heading>

        <Button
          ref={btnRef}
          colorScheme="brand"
          onClick={onOpen}
          leftIcon={<AddIcon color="white" />}
        >
Add
          </Button>
      </Stack>
      <Tag p={3}>
        <InfoIcon fontSize={20} marginRight={2} />I will update the user
        specific contacts later on
      </Tag>
      <Contacts contacts={contacts} />
      <ContactDrawer
        fetchContacts={fetchContacts}
        ref={btnRef}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};

export default Home;
