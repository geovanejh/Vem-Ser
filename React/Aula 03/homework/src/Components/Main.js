import moment from 'moment'


export const Main = ({name, location, company, email, created_at, bio}) => {
  return (
    <main className="main">
        <h1>{name}</h1>
        <h4>{location}</h4>
        <div className="main-info">
          <p>Trabalha em {company}</p>
          <p>Usuário do github há: {moment(created_at).fromNow()}</p>
          <p>{bio}</p>
        </div>
    </main>
  )
}