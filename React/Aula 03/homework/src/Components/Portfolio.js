export const Portfolio = ({repos}) => {
    
    const newRepos = repos.filter(e => {
        return e.name !== e.owner.login
    })
    console.log(newRepos)
  return (
    <section>
        {newRepos.map((e, i) => (
            <div key={i}>
                <div>
                    <h3><a href={e.html_url}>{e.name}</a></h3>
                    <p>{e.description}</p>
                </div>
                <div className="topicos">
                {e.topics.map((topico, indice) => (
                    <small key={indice}>#{topico}</small>
                ))}
                </div>
            </div>
        ))}
    </section>
  )
}