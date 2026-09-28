import Styles from './css/rodape.module.css';
import whats from '../imgs/whats.png';
import insta from '../imgs/insta.png';
import face from '../imgs/face.png';

function Rodape () {
    return (
        <footer className={Styles.rodape}>
            <h4>Nossa Loja - Instrumentos Musicais</h4>
            <p>Rua Tito, 54 - Lapa</p>
            <p>São Paulo - Brasil</p>

            <div className={Styles.icone_rodape}>
                <a href="#"><img src={whats} alt="WhatsApp"></img></a>
                <a href="#"><img src={insta} alt="Instagram"></img></a>
                <a href="#"><img src={face} alt="Facebook"></img></a>
            </div>
        </footer>
    )
}

export default Rodape