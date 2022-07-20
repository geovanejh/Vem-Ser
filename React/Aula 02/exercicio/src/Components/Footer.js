import Navbar from "./Navbar"
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <Navbar item1="Home" item2="About" item3="Contact"/>
                <address>AV. Andaraí 531 - Porto Alegre</address>
            </div>
        </div>
    )
}

export default Footer