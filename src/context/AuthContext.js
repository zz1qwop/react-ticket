import { createContext, useContext, useEffect, useState } from 'react';
import { userStateChange } from '../api/firebase';

export const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const handleUser = (user) => setUser(user);

  useEffect(() => {
    userStateChange((user) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, handleUser, uid: user && user.uid }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
