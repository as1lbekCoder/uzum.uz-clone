// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    uz: { translation: { welcome: "Salom, Asilbek!" } },
    ru: { translation: { welcome: "Привет, Асилбек!" } },
    en: { translation: { welcome: "Hello, Asilbek!" } },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "uz",
    fallbackLng: "uz",
    interpolation: { escapeValue: false },
});

export default i18n;
