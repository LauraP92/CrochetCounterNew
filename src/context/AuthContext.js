import React, {createContext, useState} from 'react';

const AuthContext = createContext();

const {Provider, Consumer: AuthConsumr} = AuthContext;

export const AuthProvider = ({children}) => {
  const [userId, setUserId] = useState(null);

  return (
    <Provider
      value={{
        userId,
        setUserId,
      }}>
      {children}
    </Provider>
  );
};

export default AuthContext;
