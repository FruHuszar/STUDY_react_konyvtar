import type { KonyvTipus } from "../adatok/konyvek";
import { useKonyvContext } from "../contexts/KonyvContext";

interface SorPropsType {
    konyv: KonyvTipus;
}

function KonyvSor({ konyv }: SorPropsType) {
    const { torol } = useKonyvContext();

    return (
        <tr className="py-2 my-1">
            <td>{konyv.cim}</td>
            <td>{konyv.szerzo}</td>
            <td>{konyv.ar}</td>
            <td>{konyv.darabszam}</td>
            <td>
                <button 
                    type="button" 
                    className="rounded-full px-2 bg-amber-500 cursor-pointer"
                    onClick={() => torol(konyv.id)}
                >
                    X
                </button>
            </td>
        </tr>   
    );
}

export default KonyvSor;