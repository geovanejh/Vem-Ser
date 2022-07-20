import styles from './InputField.module.css'

const SelectField = ({label, options, id}) => {


    return (
        <div className={styles.input}>
            <label htmlFor={id}>{label}</label>
            <select name={id} id={id}>
                {options.map((e) => (
                        <option value={e} key={e}>{e}</option>
                    ))}
            </select>
        </div>
    )
}

export default SelectField