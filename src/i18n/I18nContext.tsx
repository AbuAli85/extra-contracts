import { createContext, useContext, useState } from 'react';

export type Lang = 'en' | 'ar';

interface I18nContextValue {
  lang: Lang;
  toggleLang: () => void;
}

const I18nContext = createContext<I18nContextValue>({
  lang: 'en',
  toggleLang: () => {},
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  return (
    <I18nContext.Provider value={{ lang, toggleLang: () => setLang(lang === 'en' ? 'ar' : 'en') }}>
      <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>{children}</div>
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
