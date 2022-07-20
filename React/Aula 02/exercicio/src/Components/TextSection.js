import styles from './TextSection.module.css'

const TextSection = ({text, text2, classe}) => {
    const classes = `${styles.textSection} ${classe}`

    return (
        <div className={classes}>
            <div className="container">
                <p>{text}</p>
                <p>{text2}</p>
            </div>
        </div>
    )
}

export default TextSection