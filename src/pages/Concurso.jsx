import Mural01 from '../assets/images/Mural01.png'; 
import Mural02 from '../assets/images/Mural02.png';

import Table from '../components/Table'

function Concurso(){
    return(
        <>

        <div>
            <p>
            Más de 1000 participantes fueron parte de la primera edición del concurso de microcuentos de #CuéntameUnPoQuito entre los meses de enero y marzo de 2024. El concurso tuvo 8 categorías de participación: 3 por edad (infantil, juvenil y adultos) y 5 por temáticas (fortaleza femenina, nuevas masculinidades, comunidad LGBTQ+, grupos diversos y capacidades diferentes). El certamen estuvo dirigido a personas nacidas en Quito residentes en cualquier parte del territorio nacional o personas no nacidas en Quito, pero residentes de la ciudad. <br />
            </p>
            <b>
            Los múltiples participantes recogieron la diversidad de voces y miradas sobre el Quito de hoy. Aquí puedes consultar tanto la convocatoria como las listas de ganadores y menciones por categorías. 
            </b>
            <div id={`mural`}>
            <img src={Mural01} alt="flower" className={`img`}/>
            <img src={Mural02} alt="flower" className={`img`}/>
            </div>
            <h2>GANADORES</h2>
            <Table/>
        </div>
        </>
    )
}

export default Concurso;