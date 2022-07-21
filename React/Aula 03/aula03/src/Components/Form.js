export const Form = () => {
  const addUser = (e) => {
    e.preventDefault()
   }

  return (
    <div>
      <h1>Meu cadastro</h1>
      <form onSubmit={addUser}>
        <div>
          <input type="text" placeholder="Digite seu nome"/>
        </div>
        <div>
          <input type="submit" value="Cadastrar"/>
        </div>
      </form>
    </div>
  )
}