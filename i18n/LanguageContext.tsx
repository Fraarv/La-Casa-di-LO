/*
 * La Casa di LO - Contesto lingua (IT / EN)
 * Copyright (c) 2026 La Casa di LO. Tutti i diritti riservati.
 *
 * Ordine di priorità nella scelta della lingua iniziale:
 *   1. preferenza salvata in localStorage (scelta esplicita dell'utente);
 *   2. lingua del browser (navigator.languages / navigator.language);
 *   3. italiano come fallback.
 *
 * Il contesto tiene inoltre sincronizzati l'attributo `lang` di <html>
 * e il titolo della pagina con la lingua attiva.
 */

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  DATE_LOCALES,
  isLanguage,
  translations,
  type Language,
  type TranslationKey,
} from './translations';

const STORAGE_KEY = 'preferred-language';
const DEFAULT_LANGUAGE: Language = 'it';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  /** Traduce una chiave, con sostituzione opzionale di segnaposto `{nome}`. */
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
  /** Formatta una data ISO (YYYY-MM-DD) nel locale della lingua attiva. */
  formatDate: (isoDate: string, options?: Intl.DateTimeFormatOptions) => string;
  /** Locale BCP-47 corrispondente alla lingua attiva (it-IT / en-GB). */
  locale: string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const readStoredLanguage = (): Language | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isLanguage(stored) ? stored : null;
  } catch {
    // localStorage non disponibile (es. navigazione privata / cookie bloccati).
    return null;
  }
};

const detectBrowserLanguage = (): Language | null => {
  if (typeof navigator === 'undefined') return null;

  const candidates: string[] = [
    ...(navigator.languages ?? []),
    navigator.language,
  ].filter(Boolean);

  for (const candidate of candidates) {
    // "en-GB" -> "en", "it-CH" -> "it"
    const base = candidate.toLowerCase().split('-')[0];
    if (isLanguage(base)) return base;
  }
  return null;
};

/** Lingua iniziale: preferenza salvata > lingua browser > italiano. */
export const resolveInitialLanguage = (): Language =>
  readStoredLanguage() ?? detectBrowserLanguage() ?? DEFAULT_LANGUAGE;

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(resolveInitialLanguage);

  // Persiste la scelta e allinea <html lang> e il titolo della pagina.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Se lo storage non è scrivibile la lingua resta valida per la sessione.
    }

    document.documentElement.lang = translations[language]['meta.htmlLang'];
    document.title = translations[language]['meta.title'];
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
  }, []);

  const t = useCallback(
    (key: TranslationKey, params?: Record<string, string | number>) => {
      const template = translations[language][key] ?? translations[DEFAULT_LANGUAGE][key] ?? key;
      if (!params) return template;
      return Object.entries(params).reduce(
        (acc, [name, value]) => acc.replaceAll(`{${name}}`, String(value)),
        template,
      );
    },
    [language],
  );

  const formatDate = useCallback(
    (isoDate: string, options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' }) => {
      if (!isoDate) return '';
      const date = new Date(isoDate);
      if (Number.isNaN(date.getTime())) return '';
      return date.toLocaleDateString(DATE_LOCALES[language], options);
    },
    [language],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, t, formatDate, locale: DATE_LOCALES[language] }),
    [language, setLanguage, t, formatDate],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve essere usato dentro un <LanguageProvider>');
  }
  return context;
};
