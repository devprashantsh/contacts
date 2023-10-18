import { collection, addDoc, query, getDocs } from "firebase/firestore";

export const addContact = async (contact) => {
  try {
    const docRef = await addDoc(
      collection(db, "contacts"),
      contact
    );
    console.log("Contact added with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding contact: ", error);
  }
};

export const getContacts = async (currentUserUid) => {
  try {
    const q = query(collection(db, "users", currentUserUid, "contacts"));
    const querySnapshot = await getDocs(q);

    const contacts = [];
    querySnapshot.forEach((doc) => {
      contacts.push({ id: doc.id, ...doc.data() });
    });

    return contacts;
  } catch (error) {
    console.error("Error fetching contacts: ", error);
    return [];
  }
};

export const updateContact = async (
  currentUserUid,
  contactId,
  updatedContact
) => {
  try {
    const contactRef = doc(db, "users", currentUserUid, "contacts", contactId);
    await updateDoc(contactRef, updatedContact);
    console.log("Contact updated with ID: ", contactId);
  } catch (error) {
    console.error("Error updating contact: ", error);
  }
};

export const deleteContact = async (currentUserUid, contactId) => {
  try {
    const contactRef = doc(db, "users", currentUserUid, "contacts", contactId);
    await deleteDoc(contactRef);
    console.log("Contact deleted with ID: ", contactId);
  } catch (error) {
    console.error("Error deleting contact: ", error);
  }
};
