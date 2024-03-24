import Murals from '../assets/data/murals.json';
import Mural01 from '../assets/images/murals/Mural01.jpg';
import Mural02 from '../assets/images/murals/Mural02.jpg';
import Mural03 from '../assets/images/murals/Mural03.jpg';
import Mural04 from '../assets/images/murals/Mural04.jpg';
import Mural05 from '../assets/images/murals/Mural05.jpg';
import Mural06 from '../assets/images/murals/Mural06.jpg';
import Mural07 from '../assets/images/murals/Mural07.jpg';
import Mural08 from '../assets/images/murals/Mural08.jpg';
import Mural09 from '../assets/images/murals/Mural09.jpg';
import Mural10 from '../assets/images/murals/Mural10.jpg';
import Mural11 from '../assets/images/murals/Mural11.jpg';
import Mural12 from '../assets/images/murals/Mural12.jpg';


function Murales() {
    const muralimgs = [[Mural02],[Mural03],[Mural04],[Mural05],[Mural06,Mural07],[Mural09],[Mural10],[Mural11],[Mural12]]
    return (
        <>
            <h2>MURALES</h2>
            <div>
                {

                    Murals.map((mural, index) => (


                        <ul key={`mural-${index}`} className={`muralList`}>
                            <li>
                                <p>
                                    {`"${mural.text}".`}
                                </p>
                            </li>
                            <li>
                                <b>{mural.info[0]}</b>
                                <em>{mural.info[1]}</em>
                                <p>{mural.info[2]}</p>
                            </li>
                            <li>
                                <b>{mural.location}</b>
                            </li>
                            {
                               muralimgs[index].map((image, index) => (
                                    <li key={`image-${index}`}>
                                        <img src={image} alt=" " />
                                    </li>
                                ))
                            }

                        </ul>
                    ))
                }
            </div>
        </>
    )
}

export default Murales;