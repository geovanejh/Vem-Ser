import styles from './logo.module.css'

const Logo = ({icon, text}) => {
    return (
        <div className={styles.logo}>
            <img src={icon} alt="" />
            <a href="#"><small>{text}</small></a>
        </div>
    )
}

export default Logo