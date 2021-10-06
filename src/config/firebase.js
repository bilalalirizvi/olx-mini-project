import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAUNTN0NaNk13dYdalc6DPQnNBAFeMfKO4",
  authDomain: "olxminiproject.firebaseapp.com",
  projectId: "olxminiproject",
  storageBucket: "olxminiproject.appspot.com",
  messagingSenderId: "939429978356",
  appId: "1:939429978356:web:4c8d0837c2ba5bd99b3ea1",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
// const storage = firebase.storage()

// signup with firebase authentication with extra fields stored in database
const register = async ({ userName, phone, email, password }) => {
  const credential = await auth.createUserWithEmailAndPassword(email, password);
  const res = await db.collection("Users").add({
    userName,
    email,
    userId: credential.user.uid,
    phone,
  });
  return res;
};

// login user
function login(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

// post images and get url
async function storeImage(fileList) {
  const allFiles = [];
  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i];
    const storageRef = storage.ref(`images/posts/${file.name}`);
    await storageRef.put(file);
    const url = await storageRef.getDownloadURL();
    allFiles.push(url);
  }
  return allFiles;
}
// Dashboard post set in database
const postItem = async (postObj) => {
  const res = await db.collection("allPosts").add(postObj);
  return res;
};

// get all post from database
function getAllPosts() {
  return db.collection("allPosts").get();
}

// get all post from database
function getSinglePost(id) {
  return db.collection("allPosts").doc(id).get();
}

// get current user profile data
const currentUserData = (uid) => {
  const res = db.collection("Users").where("userId", "==", uid).get();
  return res;
};
export {
  postItem,
  getAllPosts,
  register,
  login,
  currentUserData,
  storeImage,
  getSinglePost,
};
