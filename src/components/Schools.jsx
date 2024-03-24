import SchoolsList from '../assets/data/schools.json';

function Schools(){
    return(
        <>
        <div>
{SchoolsList.map((school, index)=>(
            <ul key={`school-${index}`}>
                <li>
                        <h3>{school.name} 
                        </h3>
                </li>
                {school.images.map((image, index)=>(
                    <li key={`gallery-${index}`}>
                    <img src={image} alt={school.name} />
                </li>
                    ))}
            </ul>
))
}
        </div>
        </>
    )
}

export default Schools;