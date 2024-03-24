import Book from '../assets/images/Libro02.jpg';
import BookPDF from '../assets/Lectura.pdf';

function Libro() {
    return (
        <>
            <div id={`book`} >
                <img src={Book} alt="bookImage" />
                <div>

                    <a href={BookPDF} className={`booklink`}
                        download="Lectura.pdf">
                        <h3>
                            Empieza a leerlo
                        </h3>
                    </a>
                    <p>Si eres una organización, institución educativa o proyecto cultural, solicita tus ejemplares de Cuéntame un poQuito a través de este <a href=" https://docs.google.com/forms/d/18Og7yZwIzlYDenlbZhSa_ZxliytJZbcfsfPRBDanaTg/viewform?edit_requested=true" className={`bookform`} target="_blank"
                        rel="noreferrer">formulario</a>.</p>




                </div>
            </div>

        </>
    )
}

export default Libro;