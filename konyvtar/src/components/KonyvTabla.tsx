import KonyvSor from "./KonyvSor";
import { useKonyvContext } from "../contexts/KonyvContext";

function KonyvTabla() {
  const { konyvlista } = useKonyvContext();

  return (
    <table className="block w-full text-left text-sm md:table md:table-auto md:border-separate md:border-spacing-0 md:overflow-hidden md:rounded-xl md:bg-white md:shadow-sm md:ring-1 md:ring-slate-200">
      <thead className="hidden bg-slate-50 md:table-header-group">
        <tr>
          <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-200">Cím</th>
          <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-200">Szerző</th>
          <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-200 text-right">Ár Ft</th>
          <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-200 text-right">Darab</th>
          <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-200 text-center">Törlés</th>
        </tr>
      </thead>
      <tbody className="flex flex-col gap-3 md:table-row-group">
        {konyvlista.map((konyv) => (
          <KonyvSor konyv={konyv} key={konyv.id} />
        ))}
      </tbody>
    </table>
  );
}

export default KonyvTabla;
