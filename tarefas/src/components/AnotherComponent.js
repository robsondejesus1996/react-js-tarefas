const AnotherComponent = () =>{

    const handleClick = () =>{
        console.log('Clicou no botao')
    }
    return(
        <div>
            <p>Segundo Componente</p>
            <button onClick={handleClick}>Evento de Click</button>
            <hr/>
            <button onClick={() => console.log("Evento no elemento")}>Evento no Elemento</button>
        </div>
    )
}


export default AnotherComponent;