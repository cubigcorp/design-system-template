import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Lang = "ko" | "en";

const LanguageContext = createContext<Lang>("ko");

function detectDocumentLang(): Lang {
  if (typeof document === "undefined") return "ko";
  const docLang = document.documentElement.lang?.toLowerCase();
  return docLang === "en" ? "en" : "ko";
}

export function LanguageProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value?: Lang;
}) {
  const [lang, setLang] = useState<Lang>(value ?? detectDocumentLang());

  useEffect(() => {
    if (value) setLang(value);
    else setLang(detectDocumentLang());
  }, [value]);

  const memoized = useMemo(() => lang, [lang]);
  return (
    <LanguageContext.Provider value={memoized}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): Lang {
  return useContext(LanguageContext);
}

export function useEffectiveLang(propLang?: Lang): Lang {
  const contextLang = useLanguage();
  return propLang ?? contextLang ?? detectDocumentLang();
}
