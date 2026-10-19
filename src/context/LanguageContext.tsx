'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = string;

interface LanguageContextType {
  language: Language;
  countryCode: string;
  setCountry: (countryCode: string, langCode: string) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<string, string>> = {
  EN: {
    'Services': 'Services',
    'Industries': 'Industries',
    'AI Platforms & Solutions': 'AI Platforms & Solutions',
    'AI Hub': 'AI Hub',
    'Insights': 'Insights',
    'Ecosystem': 'Ecosystem',
    'About': 'About',
    'Careers': 'Careers',
    'Contact': 'Contact'
  },
  FR: {
    'Services': 'Services',
    'Industries': 'Industries',
    'AI Platforms & Solutions': 'Plates-formes et solutions d\'IA',
    'AI Hub': 'Hub IA',
    'Insights': 'Aperçus',
    'Ecosystem': 'Écosystème',
    'About': 'À propos',
    'Careers': 'Carrières',
    'Contact': 'Contact'
  },
  DE: {
    'Services': 'Dienstleistungen',
    'Industries': 'Branchen',
    'AI Platforms & Solutions': 'KI-Plattformen & Lösungen',
    'AI Hub': 'KI-Hub',
    'Insights': 'Einblicke',
    'Ecosystem': 'Ökosystem',
    'About': 'Über uns',
    'Careers': 'Karriere',
    'Contact': 'Kontakt'
  },
  ES: {
    'Services': 'Servicios',
    'Industries': 'Industrias',
    'AI Platforms & Solutions': 'Plataformas y soluciones de IA',
    'AI Hub': 'Centro de IA',
    'Insights': 'Perspectivas',
    'Ecosystem': 'Ecosistema',
    'About': 'Acerca de',
    'Careers': 'Carreras',
    'Contact': 'Contacto'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN');
  const [countryCode, setCountryCode] = useState<string>('US');

  const setCountry = (cCode: string, lCode: string) => {
    setCountryCode(cCode);
    setLanguage(lCode);
  };

  const t = (key: string) => {
    const langDict = translations[language] || translations['EN'];
    return langDict[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, countryCode, setCountry, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
