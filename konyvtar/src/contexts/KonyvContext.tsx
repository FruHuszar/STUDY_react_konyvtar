import { createContext, type ReactNode, useContext, useState } from "react";
import {
  konyvlista as eredetiLista,
  type KonyvTipus,
  type UjKonyvTipus,
} from "../adatok/konyvek";

interface KonyvekContextValue {
  konyvlista: KonyvTipus[];
  torol: (id: number) => void;
  konyvHozzaadas: (konyv: UjKonyvTipus) => void;
}

export const KonyvContext = createContext<KonyvekContextValue | undefined>(
  undefined,
);

interface KonyvProviderProps {
  children: ReactNode;
}

export function KonyvProvider({ children }: KonyvProviderProps) {
  const [konyvlista, setKonyvlista] = useState<KonyvTipus[]>(eredetiLista);

  function torol(id: number) {
    setKonyvlista(konyvlista.filter((konyv) => konyv.id !== id));
  }

  function konyvHozzaadas(konyv: UjKonyvTipus) {
    setKonyvlista((elozoLista) => {
      const ujId = Math.max(0, ...elozoLista.map((k) => k.id)) + 1;
      return [...elozoLista, { ...konyv, id: ujId }];
    });
  }

  return (
    <KonyvContext.Provider value={{ konyvlista, torol, konyvHozzaadas }}>
      {children}
    </KonyvContext.Provider>
  );
}

/* Hook */
export function useKonyvContext() {
  const context = useContext(KonyvContext);
  if (context === undefined) {
    throw new Error("Az app csak provideren belül használható");
  }
  return context;
}
