import Logo from "./Logo"
import Navbar from "./Navbar"
import imagem from '../images/logo.png'
import styles from './header.module.css'

const Header = () => {
    return (
        <header>
            <div className="container">
            <Logo icon={imagem} text="Melhores alunos do Vem Ser de todos os tempos"/>
            <Navbar item1="Home" item2="Sobre" item3="Contato"/>
            </div>
            
        </header>
    )
}

export default Header