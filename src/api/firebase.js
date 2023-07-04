import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);

export function register(email, password) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
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
      }
      return error.message;
    });
}

export function login(email, password) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
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
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log('logout');
    })
    .catch((error) => {
      console.log(error.message);
    });
}
