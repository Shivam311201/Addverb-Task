import React, { createContext, useState } from 'react';

export const countryContext = createContext();

export function CountryProvider({ children }) {

  const [country, setCountry] = useState({});

  return (
    <countryContext.Provider value={[country, setCountry]}>
      {children}
    </countryContext.Provider>
  );
};