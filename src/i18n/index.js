// თარგმნის კონფიგურაცია i18next-ისთვის

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

// ნაგულისხმევი ენის დაყენება (ინგლისურისთვის "en", ქართულისთვის "ka")
const savedLanguage = localStorage.getItem("language") || "ka";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage, // ნაგულისხმევი ენა
  fallbackLng: "ka",
  ns: ["common"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

export default i18n;
