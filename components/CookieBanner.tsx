/*
 * La Casa di LO - Banner consenso cookie (GDPR)
 * Copyright (c) 2026 La Casa di LO. Tutti i diritti riservati.
 *
 * Google Analytics viene caricato SOLO dopo il consenso esplicito
 * dell'utente (opt-in), come richiesto dal Garante italiano.
 */

import React, { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const CONSENT_KEY = 'cookie-consent';
const GA_ID = 'G-SZS9ZJKXSW';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const loadGoogleAnalytics = () => {
  // Evita doppio caricamento
  if (document.getElementById('ga-script')) return;

  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  const dataLayer = (window.dataLayer = window.dataLayer || []);
  window.gtag = (...args: unknown[]) => {
    dataLayer.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
};

const getStoredConsent = (): string | null => {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
};

const storeConsent = (value: string) => {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Storage non disponibile (es. navigazione privata): il banner ricomparirà.
  }
};

export const CookieBanner: React.FC = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getStoredConsent();
    if (consent === 'accepted') {
      loadGoogleAnalytics();
    } else if (consent !== 'rejected') {
      setVisible(true);
    }
  }, []);

  const handleChoice = (accepted: boolean) => {
    storeConsent(accepted ? 'accepted' : 'rejected');
    if (accepted) {
      loadGoogleAnalytics();
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[60] p-4"
      role="dialog"
      aria-live="polite"
      aria-label={t('cookie.label')}
    >
      <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur rounded-xl shadow-2xl border border-stone-200 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie className="text-puglia-sea shrink-0 mt-1" size={22} aria-hidden="true" />
          <p className="text-sm text-gray-600 leading-relaxed">
            {t('cookie.text.before')}
            <strong className="text-gray-800">{t('cookie.text.strong')}</strong>
            {t('cookie.text.after')}
          </p>
        </div>
        <div className="flex gap-2 shrink-0 self-end sm:self-center">
          <button
            type="button"
            onClick={() => handleChoice(false)}
            className="px-4 py-2 rounded-lg border border-stone-300 text-gray-600 font-semibold text-sm hover:bg-stone-100 transition-colors"
          >
            {t('cookie.reject')}
          </button>
          <button
            type="button"
            onClick={() => handleChoice(true)}
            className="px-5 py-2 rounded-lg bg-puglia-sea text-white font-bold text-sm hover:bg-[#00557a] transition-colors shadow-md"
          >
            {t('cookie.accept')}
          </button>
        </div>
      </div>
    </div>
  );
};
