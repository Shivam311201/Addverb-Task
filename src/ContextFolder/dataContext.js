import React, { createContext, useState } from 'react';

export const dataContext = createContext();

export function DataProvider({ children }) {

  const [data, setData] = useState([]);

  return (
    <dataContext.Provider value={[data, setData]}>
      {children}
    </dataContext.Provider>
  );
};