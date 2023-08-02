import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, get, set, remove } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

export async function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      return error.code;
    });
}

export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      return error.code;
    });
}

export function logout() {
  signOut(auth)
    .then(() => {
      console.log('logout');
    })
    .catch((error) => {
      console.log(error.message);
    });
}

export function userStateChange(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}

export async function getShowList() {
  return get(ref(database, 'shows')).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function buyTicket(ticketId, uid, show, seat) {
  return set(ref(database, `userTicket/${uid}/${ticketId}`), {
    ticketId: ticketId,
    showId: show.id,
    title: show.title,
    date: show.date,
    row: seat[0],
    col: seat[1],
  });
}

export async function buySoldSeats(ticketId, show, seat) {
  return set(ref(database, `soldSeats/${show.id}/${ticketId}`), {
    row: seat[0],
    col: seat[1],
  });
}

export async function getSoldSeats(show) {
  return get(ref(database, `soldSeats/${show}`)).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function getMyTicket(uid) {
  return get(ref(database, `userTicket/${uid}`)).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function removeTicket(uid, ticketId) {
  return remove(ref(database, `userTicket/${uid}/${ticketId}`));
}

export async function removeSoldSeats(show, ticketId) {
  return remove(ref(database, `soldSeats/${show}/${ticketId}`));
}
