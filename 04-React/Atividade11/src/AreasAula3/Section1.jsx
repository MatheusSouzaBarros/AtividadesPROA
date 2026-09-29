import Styles from './css/Section1.module.css';
import lojaImg from '../imgs/loja.jpg';

function Secao1 () {
    return (
        <section className={Styles.section1}>
            <div className={Styles.texto}>
                <h3>Nossa Loja - Instrumentos Musicais</h3>
                    <p>Se você é um amante da música, está em busca de um novo instrumento musical e não abre mão da
                    qualidade, chegou ao lugar certo! Aqui em nossa loja você encontra os melhores itens, como:
                    teclado, piano (digital e acústico), contrabaixo, bateria, guitarra, violão, sopro e muito mais!
                    Nossos instrumentos possuem o selo de qualidade das melhores marcas do mercado!
                    </p>
            </div>

            <div className={Styles.imgloja}>
                <img src={lojaImg} alt="lojinha" />
            </div>
        </section>
    )
}

export default Secao1