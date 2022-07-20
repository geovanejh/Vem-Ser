import styles from './InputField.module.css'

const TextAreaField = ({label, id, placeholder, rows}) => {


    return (
        <div className={styles.input}>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} placeholder={placeholder} rows={rows}/>
        </div>
    )
}

export default TextAreaField