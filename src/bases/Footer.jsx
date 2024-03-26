function Footer (){
    return (
        <>
        <footer>
        <ul id={`footer-list`}>
            <li className="footer-link">
              <a
                href="https://quitocultura.com/"
                target="_blank"
                rel="noreferrer"
              >
                Secretaría de Cultura de Quito
              </a>
            </li>
            <li className="footer-link">
              <a
                href="https://www.instagram.com/animal_sin_plumas_editores"
                target="_blank"
                rel="noreferrer"
              >
                Animal sin Plumas Editores
              </a>
            </li>
            <li className="footer-link">
              <a
                href="https://www.facebook.com/profile.php?id=61552905026731"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="footer-link">
              <a
                href="https://www.instagram.com/cuentame.un.poquito?igsh=MW16dXpic2FjM2xoeQ=="
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
           <ul id={`credits`}>
            <li>
              <p>

            @ 2024 CUENTAME-UN-POQUITO.COM</p>
            </li>
            <li id={`separator`}>
              <p> | </p>
            </li>
            <li>
            <a
                href="https://omarbramirez.github.io/omar-b-ramirez/"
                target="_blank"
                rel="noreferrer"
              >
                Omar Ramírez
              </a>
            </li>
           </ul>
        </footer>
        </>
    )
}

export default Footer;