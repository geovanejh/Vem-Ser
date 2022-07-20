import styles from './Card.module.css'

const Card = ({url, text}) => {
    return (
        <div className={styles.card}>
            <img src={url} alt="" />
            <p>{text}</p>
        </div>
    )
}

export default Card