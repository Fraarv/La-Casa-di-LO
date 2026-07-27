/*
 * La Casa di LO - Selettore lingua IT | EN
 * Copyright (c) 2026 La Casa di LO. Tutti i diritti riservati.
 */

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { LANGUAGES, LANGUAGE_LABELS, LANGUAGE_NAMES, type Language } from '../i18n/translations';

interface LanguageSwitcherProps {
  /** `light` per la navbar sopra la foto, `dark` per il menu mobile su fondo chiaro. */
  variant?: 'light' | 'dark';
  className?: string;
  onSelect?: (language: Language) => void;
}

const SWITCH_LABEL_KEY = {
  it: 'nav.switchToItalian',
  en: 'nav.switchToEnglish',
} as const;

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'light',
  className = '',
  onSelect,
}) => {
  const { language, setLanguage, t } = useLanguage();

  const containerStyle =
    variant === 'light'
      ? 'border-white/40 text-white'
      : 'border-stone-300 text-gray-600';

  const activeStyle =
    variant === 'light'
      ? 'bg-white text-puglia-sea'
      : 'bg-puglia-sea text-white';

  const inactiveStyle =
    variant === 'light' ? 'hover:bg-white/20' : 'hover:bg-stone-100';

  const handleClick = (next: Language) => {
    setLanguage(next);
    onSelect?.(next);
  };

  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border p-0.5 ${containerStyle} ${className}`}
      role="group"
      aria-label={t('nav.language')}
    >
      {LANGUAGES.map((code) => {
        const isActive = code === language;
        return (
          <button
            key={code}
            type="button"
            onClick={() => handleClick(code)}
            aria-label={t(SWITCH_LABEL_KEY[code])}
            aria-current={isActive ? 'true' : undefined}
            lang={code}
            title={LANGUAGE_NAMES[code]}
            className={`px-2.5 py-1 text-xs font-bold rounded-full transition-colors cursor-pointer ${
              isActive ? activeStyle : inactiveStyle
            }`}
          >
            {LANGUAGE_LABELS[code]}
          </button>
        );
      })}
    </div>
  );
};
