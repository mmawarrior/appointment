import { db, storage } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const saveAppointment = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'appointments'), data);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const uploadImage = async (file) => {
  try {
    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (e) {
    console.error('Error uploading file: ', e);
  }
};

export { saveAppointment, uploadImage };
