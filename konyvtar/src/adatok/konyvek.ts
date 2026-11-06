export interface KonyvTipus {
  id: number;
  cim: string;
  szerzo: string;
  ar: number;
  darabszam: number;
}

export const konyvlista: KonyvTipus[] = [
  {
    id: 1,
    cim: "Chainsaw Man",
    szerzo: "Tatsuki Fujimoto",
    ar: 3490,
    darabszam: 5,
  },
  {
    id: 2,
    cim: "Oyasumi Punpun",
    szerzo: "Inio Asano",
    ar: 4200,
    darabszam: 2,
  },
  {
    id: 3,
    cim: "The Climber",
    szerzo: "Shin'ichi Sakamoto",
    ar: 4500,
    darabszam: 0,
  },
  {
    id: 4,
    cim: "Bleach",
    szerzo: "Tite Kubo",
    ar: 2990,
    darabszam: 8,
  },
  {
    id: 5,
    cim: "Goodbye, Eri",
    szerzo: "Tatsuki Fujimoto",
    ar: 3990,
    darabszam: 4,
  },
];