import SchoolsList from '../assets/data/schools.json';
import Colegio01 from '../assets/images/schools/Colegio01.jpg';
import Colegio02 from '../assets/images/schools/Colegio02.jpg';
import Colegio03 from '../assets/images/schools/Colegio03.jpg';
import Colegio04 from '../assets/images/schools/Colegio04.jpg';
import Colegio05 from '../assets/images/schools/Colegio05.jpg';
import Colegio06 from '../assets/images/schools/Colegio06.jpg';
import Colegio07 from '../assets/images/schools/Colegio07.jpg';
import Colegio08 from '../assets/images/schools/Colegio08.jpg';

function Schools(){
    const schoolsimgs =[[Colegio01,Colegio02],[Colegio03,Colegio04],[Colegio05,Colegio06],[Colegio07,Colegio08]]
    return(
        <>
        <div>
{SchoolsList.map((school, index)=>(
            <ul key={`school-${index}`} className={`schoolLists`}>
                <li>
                        <h3 className={`schoolName`}>{school.name} 
                        </h3>
                </li>
                {schoolsimgs[index].map((image)=>(
                    <li key={`gallery-${school.name}`}>
                    <img src={image} alt={school.name} className={`schoolImg`}/>
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