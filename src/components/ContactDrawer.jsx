import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import ContactForm from "./ContactForm";
import { useAuth } from "../contexts/auth-context";
import { addContact } from "../api/contacts";

const ContactDrawer = ({fetchContacts, ref, isOpen, onClose }) => {
  const { user } = useAuth();

  const toast = useToast()
  const onAddContact = (contact) => {
    const uid = user.uid;
    console.log({ uid, contact });
    addContact(uid, contact);
    fetchContacts();
    onClose()

    toast({
        title: 'Contact created.',
        description: "We've created your contact",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
  };

  return (
    <div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        size="md"
        onClose={onClose}
        finalFocusRef={ref}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create Contact</DrawerHeader>

          <DrawerBody>
            <ContactForm showActions={true} onAddContact={onAddContact} />
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              colorScheme="brand"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            {/* <Button colorScheme="brand">Add</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ContactDrawer;
