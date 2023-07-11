import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, get, set } from 'firebase/database';
import { v4 as uuid } from 'uuid';

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
      switch (error.code) {
        case 'auth/weak-password':
          console.log('비밀번호를 6자리 이상으로 설정해주세요.');
          break;
        case 'auth/invalid-email':
          console.log('잘못된 이메일 주소입니다.');
          break;
        case 'auth/email-already-in-use':
          console.log('이미 가입되어 있는 이메일입니다.');
          break;
        default:
          console.log('이메일과 비밀번호를 다시 입력해주세요.');
      }
      return error.message;
    });
}

export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      return user;
    })
    .catch((error) => {
      return error.message;
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

export async function buyTicket(uid, show, seat) {
  const id = uuid();

  set(ref(database, `soldSeats/${show.id}/${id}`), {
    row: seat[0],
    col: seat[1],
  });

  return set(ref(database, `userTicket/${uid}/${id}`), {
    title: show.title,
    date: show.date,
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
