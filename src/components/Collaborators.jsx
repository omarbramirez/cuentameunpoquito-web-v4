import CollaboratorsList from '../assets/data/collaborators.json';

function Collaborators(){
    return(
        <>
        <div>
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