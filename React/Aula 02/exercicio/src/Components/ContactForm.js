import Button from './Button'
import styles from './ContactForm.module.css'
import InputField from './InputField'
import SelectField from './SelectField'
import TextAreaField from './TextAreaField'

const ContactForm = () => {
    const classes = `${styles.contactForm} container`

    return (
        <form className={classes}>
            <InputField label="Digite seu nome completo:" type="text" id="formNome" placeholder="digite o nome completo"/>
            <InputField label="Digite seu e-mail:" type="text" id="formEMail" placeholder="digite o email"/>
            <SelectField label="teste 1" options={['Problema no site', 'Problema no computador', 'Problema de visão']} id="formSelect"/>
            <TextAreaField label="textarea" id="textAreaContact" placeholder="TEXTAREA AQUI" rows={7}/>
            <Button text="Salvar" classe="primary-button"/>
        </form> 
    )
}

export default ContactForm