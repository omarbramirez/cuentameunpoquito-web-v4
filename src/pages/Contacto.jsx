import FacebookIcon from '../assets/visual-components/FacebookIcon'
import InstagramIcon from '../assets/visual-components/InstagramIcon'
import Form from '../bases/Form'
import Bird from '../assets/images/Bird.png'

function Contacto() {
    return (
        <>
        <div id={`contact`}>

            <div>
        <h2>CONTACTO</h2>
                <img src={Bird} alt="bird" />
                <h3>
                    Contáctanos
                </h3>
                <p style={{ fontSize: '1rem', margin: '0', padding: '0'}}>
                    consultascuentameunpoquito@gmail.com
                </p>
                <h3>Síguenos</h3>
                <ul id={`socialMediaForm`}>
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

                                </div>
        </>
    )
}

export default Contacto;