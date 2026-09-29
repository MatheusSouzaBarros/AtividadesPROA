import Styles from './css/CabecaMenu.module.css';

function Cabeca () {
    return (
        <header className={Styles.header_menu}>
            <nav className={Styles.nav_menu}>
                <a href="#">Home</a>
                <a href="#">Quem Somos</a>
                <a href="#">Instrumentos</a>
                <a href="#">Endereço</a>
                <a href="#">Contato</a>
            </nav>
        </header>
    )
}

export default Cabeca