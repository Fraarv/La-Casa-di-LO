/*
 * La Casa di LO - Lightbox galleria a schermo intero
 * Copyright (c) 2026 La Casa di LO. Tutti i diritti riservati.
 *
 * Navigazione: frecce a schermo, tasti ← / → e chiusura con Esc
 * o cliccando sullo sfondo. Lo scroll della pagina resta bloccato
 * mentre la lightbox è aperta.
 */

import React, { useCallback, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ images, index, onIndexChange, onClose }) => {
  const { t } = useLanguage();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const total = images.length;

  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + total) % total);
  }, [index, total, onIndexChange]);

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % total);
  }, [index, total, onIndexChange]);

  // Tastiera: Esc chiude, frecce navigano.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        goNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goPrev, goNext, onClose]);

  // Blocca lo scroll del body e porta il focus sul pulsante di chiusura.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const image = images[index];
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={t('gallery.lightbox.label')}
      onClick={onClose}
    >
      {/* Contatore */}
      <p className="absolute top-5 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium tracking-wide select-none">
        {t('gallery.lightbox.counter', { current: index + 1, total })}
      </p>

      {/* Chiudi */}
      <button
        ref={closeButtonRef}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label={t('gallery.lightbox.close')}
        className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <X size={24} />
      </button>

      {/* Precedente */}
      {total > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label={t('gallery.lightbox.prev')}
          className="absolute left-2 sm:left-6 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Immagine */}
      {/* L'alt resta per screen reader e accessibilità, ma non viene mostrato come didascalia */}
      <img
        src={image.src}
        alt={image.alt}
        onClick={(e) => e.stopPropagation()}
        className="max-w-[92vw] max-h-[82vh] object-contain rounded-lg shadow-2xl"
      />

      {/* Successiva */}
      {total > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label={t('gallery.lightbox.next')}
          className="absolute right-2 sm:right-6 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <ChevronRight size={28} />
        </button>
      )}
    </div>
  );
};
