import FacebookIcon from '../assets/visual-components/FacebookIcon'
import InstagramIcon from '../assets/visual-components/InstagramIcon'
import Form from '../bases/Form'
import Bird from '../assets/images/Bird.png'

function Contacto() {
    return (
        <>
        <h2>CONTACTO</h2>
            <div>
                <img src={Bird} alt="bird" />
                <p>
                    Contáctanos
                </p>
                <p style={{ fontSize: '1rem', margin: '0', padding: '0'}}>
                    consultascuentameunpoquito@gmail.com
                </p>
                <p>Síguenos</p>
                <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <li>
                        <a
                            href="https://www.facebook.com/profile.php?id=61552905026731"
                            target="_blank"
                            rel="noreferrer"
                        >

                            <FacebookIcon
                                fill={`#3c3c3b`}
                                width={`2.5rem`}
                                height={`2.5rem`} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/cuentame.un.poquito?igsh=MW16dXpic2FjM2xoeQ=="
                            target="_blank"
                            rel="noreferrer"
                        >

                            <InstagramIcon
                                fill={`#3c3c3b`}
                                width={`2.5rem`}
                                height={`2.5rem`} />
                        </a>
                    </li>
                </ul>
            </div>

            <Form />

        </>
    )
}

export default Contacto;