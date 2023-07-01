import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { persistor, store } from "./store";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
