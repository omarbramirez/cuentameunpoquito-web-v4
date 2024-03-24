import CollaboratorsList from '../assets/data/collaborators.json';
import Abril from '../assets/images/collaborators/abril.png'; 

function Collaborators(){
    return(
        <>
        <div>

        <ul>

<li>
    <img src={Abril} alt="Abril Altamirano" />
</li>
<li>
        <p>Abril Altamirano
        <br/>
        Editora y escritora.
        </p>

</li>
</ul>


{CollaboratorsList.map((collaborator, index)=>(
            <ul key={`collaborator-${index}`}>

                <li>
                    <img src={collaborator.image} alt={collaborator.name} />
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