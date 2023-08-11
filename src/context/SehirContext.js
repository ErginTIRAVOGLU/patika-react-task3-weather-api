import { createContext, useContext, useEffect, useState } from "react";

const SehirContext = createContext();

export const SehirProvider = ({ children }) => {
  const [sehir, setSehir] = useState(localStorage.getItem("sehir") || "Ankara");

  useEffect(() => {
    localStorage.setItem("sehir", sehir);
  }, [sehir]);

  const values = { sehir, setSehir };

  return (
    <SehirContext.Provider value={values}>{children}</SehirContext.Provider>
  );
};

export const useSehir = () => useContext(SehirContext);
