import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const handleUser = (user) => setUser(user);
  return (
    <AuthContext.Provider value={{ user, handleUser }}>
      {children}
    </AuthContext.Provider>
  );
}
