const fs = require("fs").promises;
const path = require("path");

const pathFile = path.join("db", "contacts.json");




/*
 * Розкоментуй і запиши значення
 * const contactsPath = ;
 */

// TODO: задокументувати кожну функцію
const listContacts = async () => {
    try {
        const pathResult = await fs.readFile(pathFile);
        const fileResult = JSON.parse(pathResult);
      } catch (err) {
        console.log(err);
      }
    // ...твій код. Повертає масив контактів.
  }
  
  function getContactById(contactId) {
    // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  }
  
  function removeContact(contactId) {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  }
  
  function addContact(name, email, phone) {
    // ...твій код. Повертає об'єкт доданого контакту. 
  }

