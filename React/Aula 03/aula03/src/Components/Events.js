const Events = () => {
    const myEvent = () => {
        console.log('Opa foi clicado')
    }

    return (
        <>
            <p>Clique para disparar um evento</p>
            <button onClick={() => myEvent}>Ativar!</button>
        </>
    )
}

export default Events;
