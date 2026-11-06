import KonyvSor from "./KonyvSor";
import { useKonyvContext } from "../contexts/KonyvContext";

function KonyvTabla() {
    const { konyvlista } = useKonyvContext();

    return (
        <table className="w-full table-auto text-left">
            <thead>
                <tr>
                    <th>Cím</th>
                    <th>Szerző</th>
                    <th>Ár Ft</th>
                    <th>Darab</th>
                    <th>Törlés</th>
                </tr>
            </thead>
            <tbody>
                {konyvlista.map((konyv) => (
                    <KonyvSor konyv={konyv} key={konyv.id} />
                ))}
                <tr></tr>
            </tbody>
        </table>
    );
}

export default KonyvTabla;