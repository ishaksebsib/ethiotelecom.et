import Cookies from "js-cookie";

const LANGUAGE_COOKIE_NAME = "preferred_language";

export const setPreferredLanguageCookie = (lang: string) => {
  Cookies.set(LANGUAGE_COOKIE_NAME, lang);
};

export const getPreferredLanguageCookie = () => {
  return Cookies.get(LANGUAGE_COOKIE_NAME);
};

export const removePreferredLanguageCookie = () => {
  Cookies.remove(LANGUAGE_COOKIE_NAME);
};
