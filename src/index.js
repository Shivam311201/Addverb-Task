import React from "react";
import ReactDOM from "react-dom";
import { CountryProvider } from "./ContextFolder/countryContext";
import { LoadingProvider } from "./ContextFolder/loadingContext";
import { DataProvider } from "./ContextFolder/dataContext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
  <LoadingProvider>
    <DataProvider>
      <CountryProvider>
        <App/>
      </CountryProvider>
    </DataProvider>
  </LoadingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
