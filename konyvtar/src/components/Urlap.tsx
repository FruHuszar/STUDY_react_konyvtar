import { useState, ChangeEvent, FormEvent } from "react";
import { useKonyvContext } from "../contexts/KonyvContext";

function Urlap() {
  const { konyvHozzaadas } = useKonyvContext();

  const [ujKonyv, setUjKonyv] = useState({
    cim: "",
    szerzo: "",
    ar: 0,
    darabszam: 0,
  });

  function adatValtozas(e: ChangeEvent<HTMLInputElement>) {
    const { name, value, type } = e.target;

    setUjKonyv((elozo) => ({
      ...elozo,
      [name]: type === "number" ? Number(value) : value,
    }));
  }

  function mentes(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!ujKonyv.cim.trim() || !ujKonyv.szerzo.trim()) return;
    if (!Number.isFinite(ujKonyv.ar) || ujKonyv.ar < 0) return;
    if (!Number.isInteger(ujKonyv.darabszam) || ujKonyv.darabszam < 0) return;

    konyvHozzaadas({
      ...ujKonyv,
      cim: ujKonyv.cim.trim(),
      szerzo: ujKonyv.szerzo.trim(),
    });

    setUjKonyv({
      cim: "",
      szerzo: "",
      ar: 0,
      darabszam: 0,
    });
  }

  return (
    <form
      onSubmit={mentes}
      className="flex flex-col gap-1.5 rounded-xl bg-white p-5 text-left shadow-sm ring-1 ring-slate-200 before:text-lg before:font-semibold before:text-slate-900 before:content-['Új_könyv_felvétele'] lg:sticky lg:top-8"
    >
      <label htmlFor="cim" className="mt-3 text-sm font-medium text-slate-700">
        Cím
      </label>
      <input
        type="text"
        name="cim"
        id="cim"
        value={ujKonyv.cim}
        onChange={adatValtozas}
        required
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none"
      ></input>

      <label
        htmlFor="szerzo"
        className="mt-3 text-sm font-medium text-slate-700"
      >
        Szerző
      </label>
      <input
        type="text"
        name="szerzo"
        id="szerzo"
        value={ujKonyv.szerzo}
        onChange={adatValtozas}
        required
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none"
      ></input>

      <label htmlFor="ar" className="mt-3 text-sm font-medium text-slate-700">
        Ár (Ft)
      </label>
      <input
        type="number"
        name="ar"
        id="ar"
        value={ujKonyv.ar}
        min="0"
        max="20000"
        onChange={adatValtozas}
        required
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none"
      ></input>

      <label
        htmlFor="darabszam"
        className="mt-3 text-sm font-medium text-slate-700"
      >
        Darabszám
      </label>
      <input
        type="number"
        name="darabszam"
        id="darabszam"
        value={ujKonyv.darabszam}
        min="0"
        max="300"
        onChange={adatValtozas}
        required
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none"
      ></input>

      <button
        type="submit"
        className="mt-5 w-full cursor-pointer rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Mentés
      </button>
    </form>
  );
}

export default Urlap;
