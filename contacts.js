const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const pathContacts = path.join("db", "contacts.json");

async function listContacts() {
  try {
    const contacts = await fs.readFile(pathContacts);
    return JSON.parse(contacts);
  } catch (err) {
    console.log(`Something went very very wrong.. ${err.message}`);
  }
}

async function getContactById(id) {
  try {
    const contactId = String(id);
    const contacts = await listContacts();
    const result = contacts.find((contact) => contact.id === contactId);
    return result || null;
  } catch (err) {
    console.log(`Something went very very wrong.. ${err.message}`);
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: nanoid(),
      name,
      email,
      phone,
    };
    contacts.push(newContact);
    await fs.writeFile(pathContacts, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (err) {
    console.log(`Something went very very wrong.. ${err.message}`);
  }
}

async function removeContact(id) {
  try {
    const contactId = String(id);
    const contacts = await listContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
      return null;
    }
    const result = contacts.splice(index, 1);
    await fs.writeFile(pathContacts, JSON.stringify(contacts, null, 2));
    return result;
  } catch (err) {
    console.log(`Something went very very wrong.. ${err.message}`);
  }
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
