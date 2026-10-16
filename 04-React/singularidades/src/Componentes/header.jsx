import Styles from './css/header.module.css'

function Header () {
    return (
        <header className={Styles.header}>
            <h2 className={Styles.logo}>+</h2>

            <nav className={Styles.menu}>
                <a href="#">Home</a>
                <a href="#">Racismo</a>
                <a href="#">Transfobia</a>
                <a href="#">Homofobia</a>
                <a href="#">Misoginia</a>
            </nav>
        </header>
    )
}

export default Header