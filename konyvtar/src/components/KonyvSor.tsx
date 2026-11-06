import type { KonyvTipus } from "../adatok/konyvek";
import { useKonyvContext } from "../contexts/KonyvContext";

interface SorPropsType {
    konyv: KonyvTipus;
}

function KonyvSor({ konyv }: SorPropsType) {
    const { torol } = useKonyvContext();

    return (
        <tr className="grid grid-cols-2 gap-x-4 gap-y-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition-colors md:table-row md:rounded-none md:p-0 md:shadow-none md:ring-0 md:hover:bg-slate-50 md:last:[&>td]:border-b-0">
            <td className="flex flex-col gap-0.5 md:table-cell md:border-b md:border-slate-100 md:px-4 md:py-3 md:align-middle col-span-2 text-base font-semibold text-slate-900 md:text-sm before:content-['Cím'] before:text-xs before:font-medium before:uppercase before:tracking-wide before:text-slate-400 md:before:content-none">{konyv.cim}</td>
            <td className="flex flex-col gap-0.5 md:table-cell md:border-b md:border-slate-100 md:px-4 md:py-3 md:align-middle col-span-2 text-slate-600 before:content-['Szerző'] before:text-xs before:font-medium before:uppercase before:tracking-wide before:text-slate-400 md:before:content-none">{konyv.szerzo}</td>
            <td className="flex flex-col gap-0.5 md:table-cell md:border-b md:border-slate-100 md:px-4 md:py-3 md:align-middle font-medium text-slate-900 tabular-nums md:text-right before:content-['Ár_(Ft)'] before:text-xs before:font-medium before:uppercase before:tracking-wide before:text-slate-400 md:before:content-none">{konyv.ar}</td>
            <td className="flex flex-col gap-0.5 md:table-cell md:border-b md:border-slate-100 md:px-4 md:py-3 md:align-middle text-slate-900 tabular-nums md:text-right before:content-['Darab'] before:text-xs before:font-medium before:uppercase before:tracking-wide before:text-slate-400 md:before:content-none">{konyv.darabszam}</td>
            <td className="col-span-2 flex justify-end border-t border-slate-100 pt-3 md:table-cell md:border-t-0 md:border-b md:px-4 md:py-3 md:text-center md:align-middle">
                <button 
                    type="button" 
                    className="cursor-pointer rounded-lg bg-red-50 px-3 py-1.5 text-sm font-semibold text-red-600 ring-1 ring-red-200 ring-inset transition-colors hover:bg-red-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    onClick={() => torol(konyv.id)}
                >
                    X
                </button>
            </td>
        </tr>   
    );
}

export default KonyvSor;