import { createContext, type ReactNode, useContext, useState } from "react";
import { konyvlista as eredetiLista, type KonyvTipus } from "../adatok/konyvek";

interface KonyvekContextValue {
    konyvlista: KonyvTipus[];
    torol: (id: number) => void;
}

export const KonyvContext = createContext<KonyvekContextValue | undefined>(undefined);

interface KonyvProviderProps {
    children: ReactNode;
}

export function KonyvProvider({ children }: KonyvProviderProps) {
    const [konyvlista, setKonyvlista] = useState<KonyvTipus[]>(eredetiLista);

    function torol(id: number) {
        setKonyvlista(konyvlista.filter(konyv => konyv.id !== id));
    }

    return (
        <KonyvContext.Provider value={{ konyvlista, torol }}>
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