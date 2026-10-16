import Styles from './css/header.module.css'

function Header () {
    return (
        <header className={Styles.header}>
            <h2 className={Styles.logo}>+</h2>

            <nav className={Styles.nav}>
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Contato</a>
            </nav>
        </header>
    )
}

export default Header