import styles from './InputField.module.css'

const InputField = ({label, type, id, placeholder}) => {


    return (
        <div className={styles.input}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder}/>
        </div>
    )
}

export default InputField