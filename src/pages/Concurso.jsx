import Rules01 from '../assets/images/Rules01.png'; 
import Rules02 from '../assets/images/Rules02.png';
import FooterImg from '../assets/images/footerimg.png';

import Winners from '../components/Winners'

function Concurso(){
    return(
        <>

        <div >
            <div id={`contest`}>
                <div>


            <p>
            Más de 1000 participantes fueron parte de la primera edición del concurso de microcuentos de #CuéntameUnPoQuito entre los meses de enero y marzo de 2024. El concurso tuvo 8 categorías de participación: 3 por edad (infantil, juvenil y adultos) y 5 por temáticas (fortaleza femenina, nuevas masculinidades, comunidad LGBTQ+, grupos diversos y capacidades diferentes). El certamen estuvo dirigido a personas nacidas en Quito residentes en cualquier parte del territorio nacional o personas no nacidas en Quito, pero residentes de la ciudad. <br />
            </p>
            <b>
            Los múltiples participantes recogieron la diversidad de voces y miradas sobre el Quito de hoy. Aquí puedes consultar tanto la convocatoria como las listas de ganadores y menciones por categorías. 
            </b>
            </div>
            <a href="https://drive.google.com/file/d/1wZfbWsFPd6QATWW6pqzxa9Y3kwijNeXk/view"
                                    target="_blank"
                                    rel="noreferrer">
            <div id={`rules`}>
            <img src={Rules01} alt="rules" className={`img`}/>
            <img src={Rules02} alt="rules" className={`img`}/>
            <img src={FooterImg} alt="footerRules" />
            </div>
            </a>
                                        </div>
            <h2>GANADORES</h2>
            <Winners footerImg={FooterImg}/>
        </div>
        </>
    )
}

export default Concurso;