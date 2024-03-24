import CollaboratorsList from '../assets/data/collaborators.json';
import Abril from '../assets/images/collaborators/abril.png';
import Sandra from '../assets/images/collaborators/sandra.png'; 
import Diego from '../assets/images/collaborators/diego.png'; 
import Pamela from '../assets/images/collaborators/pamela.png'; 
import Esteban from '../assets/images/collaborators/esteban.png'; 
import Mattias from '../assets/images/collaborators/mattias.png'; 
import Eduardo from '../assets/images/collaborators/eduardo.png';  
import Marcelo from '../assets/images/collaborators/marcelo.png'; 
import Fer from '../assets/images/collaborators/fer.png'; 

function Collaborators(){

    const profiles = [Abril, Sandra, Diego, Pamela, Esteban, Mattias, Eduardo, Marcelo, Fer]
    return(
        <>
        <div>
{CollaboratorsList.map((collaborator, index)=>(
            <ul key={`collaborator-${index}`}>

                <li>
                    <img src={profiles[index]} alt={collaborator.name} />
                </li>
                <li>
                        <p>{collaborator.name} 
                        <br/>
                        {collaborator.info}
                        </p>

                </li>
            </ul>
))
}
        </div>
        </>
    )
}

export default Collaborators;