import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/common.json";
import ka from "./locales/ka/common.json";

const resources = {
  en: {
    common: en,
  },
  ka: {
    common: ka,
  },
};

// Check localStorage for a saved language, otherwise default to 'ka'
const savedLanguage = localStorage.getItem("language") || "ka";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage, // Default language
  fallbackLng: "ka",
  ns: ["common"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

// Update localStorage whenever the language changes
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

export default i18n;
