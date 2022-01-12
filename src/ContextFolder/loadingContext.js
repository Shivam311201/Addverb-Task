import React, { createContext, useState } from 'react';

export const LoadingContext = createContext();

export function LoadingProvider({ children }) {

  const [loading, setloading] = useState(true);

  return (
    <LoadingContext.Provider value={[loading, setloading]}>
      {children}
    </LoadingContext.Provider>
  );
};