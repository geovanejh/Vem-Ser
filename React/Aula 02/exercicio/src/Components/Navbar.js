import styles from './Navbar.module.css'

const Navbar = ({item1, item2, item3}) => {
    return (
        <ul className={styles.navul}>
            <li><a href="#">{item1}</a></li>
            <li><a href="#">{item2}</a></li>
            <li><a href="#">{item3}</a></li>
        </ul>
    )
}

export default Navbar