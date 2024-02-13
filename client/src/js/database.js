import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');

  // Create connection to database
  const jate = await openDB('jate', 1);

  // Create new transaction to database, readwrite allows changing data
  const tx = jate.transaction('jate', 'readwrite');

  // Open jate object store
  const store = tx.objectStore('jate');

  // PUT method to update content
  const request = store.put({ jate: content });

  // Confirm request
  const result = await request;
  console.log('Data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all from the database');

  // Create connection to database
  const jateDb = await openDB('jate', 1);

  // Create new transaction to database, readonly for just viewing data
  const tx = jateDb.transaction('jate', 'readonly');

  // Open jate object store
  const store = tx.objectStore('jate');

  // GET method to get all content
  const request = store.getAll();

  // Confirm request
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
