import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./translations/en/common_en.json";
import common_uk from "./translations/uk/common_uk.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en",
  resources: {
    en: {
      common: common_en,
    },
    uk: {
      common: common_uk,
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
