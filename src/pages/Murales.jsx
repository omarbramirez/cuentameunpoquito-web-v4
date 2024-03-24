import Murals from '../assets/data/murals.json';

function Murales() {
    return (
        <>
            <h2>MURALES</h2>
            <div>
                {

                    Murals.map((mural, index) => (


                        <ul key={`mural-${index}`}>
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
                                mural.images.map((image, index) => (
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