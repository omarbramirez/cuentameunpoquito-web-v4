function Form (){
    return(
<div id={`form`}>
    <h3>Escríbenos</h3>
            <form>
                <label htmlFor="nombre">Nombre:</label><br />
                <input type="text" id="nombre" name="nombre" required /><br />
                
                <label htmlFor="email">Correo electrónico:</label><br />
                <input type="email" id="email" name="email" required /><br />
                
                <label htmlFor="mensaje">Mensaje:</label><br />
                <textarea id="mensaje" name="mensaje" rows="4" required /><br />
                
                <input type="submit" value="Enviar" className={`buttom`}/>
            </form>
        </div>
    )
}
export default Form