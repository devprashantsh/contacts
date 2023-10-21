// import { collection, addDoc, query, getDocs } from "firebase/firestore";

import { dbNames } from "../config";
import firebase from "../config/firebase";

export const addContact = async (uid, contact) => {
  try {
    const data = {...contact, uid}
    console.log({data})
    const res = await firebase.addDataToDb(data,dbNames.CONTACTS)
    return res;
  } catch (error) {
    console.error("Error adding contact: ", error);
  }
};

export const getContacts = async (uid) => {
  try {
   const contacts = await firebase.getDataFromDb(dbNames.CONTACTS);
   console.log(contacts)
   return contacts;
  } catch (error) {
    console.error("Error fetching contacts: ", error);
    return [];
  }
};

// export const updateContact = async (
//   currentUserUid,
//   contactId,
//   updatedContact
// ) => {
//   try {
//     const contactRef = doc(db, "users", currentUserUid, "contacts", contactId);
//     await updateDoc(contactRef, updatedContact);
//     console.log("Contact updated with ID: ", contactId);
//   } catch (error) {
//     console.error("Error updating contact: ", error);
//   }
// };

// export const deleteContact = async (currentUserUid, contactId) => {
//   try {
//     const contactRef = doc(db, "users", currentUserUid, "contacts", contactId);
//     await deleteDoc(contactRef);
//     console.log("Contact deleted with ID: ", contactId);
//   } catch (error) {
//     console.error("Error deleting contact: ", error);
//   }
// };
