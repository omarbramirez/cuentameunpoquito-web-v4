import Winners01 from '../assets/images/ganadores/Ganador01.jpg';
import Winners02 from '../assets/images/ganadores/Ganador02.jpg';
import Winners03 from '../assets/images/ganadores/Ganador03.jpg';
import Winners04 from '../assets/images/ganadores/Ganador04.jpg';
import Winners05 from '../assets/images/ganadores/Ganador05.jpg';
import Winners06 from '../assets/images/ganadores/Ganador06.jpg';
import Winners07 from '../assets/images/ganadores/Ganador07.jpg';
import Winners08 from '../assets/images/ganadores/Ganador08.jpg';


function Winners({footerImg}){
    const winners =[Winners01,Winners02,Winners03,Winners04,Winners05,Winners06,Winners07,Winners08]
    return(
        <>
        <div>
{winners.map((winner, index)=>(
    <div key={`winnerslist-${index}`} style={{'margin': '5% 0%'}}>
            <img  src={winner} alt="winnerslist" />
            <img src={footerImg} alt="footer" />
    </div>
))
}
        </div>
        </>
    )
}

export default Winners;