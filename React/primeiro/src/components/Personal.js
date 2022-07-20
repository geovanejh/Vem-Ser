import styles from './Personal.modules.css'

const Personal = (props) => {
    return (
        <div className="personal">
           <img src={props.url} alt="" />
           <h2>Nome: {props.name}</h2>
           <p>Idade: {props.idade}</p>
           <p>Profissão: {props.profissao}</p>
        </div>
    )
}

export default Personal;   