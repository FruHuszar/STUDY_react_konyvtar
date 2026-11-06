function Urlap() {
    //const { ment } = useKonyvContext();

    return (
        <form className="py-2 my-1">
            <td><input type="text" name="cim" id="cim"></input></td> 
            <td><input type="text" name="serzo" id="szerzo"></input></td>
            <td><input type="number" name="ar" id="ar"></input></td>
            <td><input type="number" name="darabszam" id="darabszam"></input></td>
            <td>
                <button 
                    type="button" 
                    className="rounded-full px-2 bg-amber-500 cursor-pointer"
                    
                >
                    X
                </button>
            </td>
        </form>   
    );
}

export default Urlap;