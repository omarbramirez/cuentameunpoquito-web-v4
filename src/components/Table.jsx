import Ganadores from '../assets/data/winners.json';
function Table (){
    return(
        <>
                {
                    Ganadores.map((winnerpercategory, index)=>(
                        <div  key={`table-${index}`} id={`table`}>
                            <h3>{winnerpercategory.CATEGORIA}</h3>

                            {winnerpercategory.CUENTOS.map((winnerperplace, index)=>(
                                    <table key={`place-${index}`}>
                                <thead>
                                <tr>
                                <th>{winnerperplace.POSICION}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                    {winnerperplace.CUENTO}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    {winnerperplace.NOMBRE}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                            ))
                        }
            </div>
                    ))
                }
        </>
    )
}
export default Table;