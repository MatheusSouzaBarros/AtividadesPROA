import Styles from './css/Section2.module.css';
import guitarra from '../imgs/guitarrinha.jpg';

function Secao2 () {
    return (
       <section className={Styles.section2}>
            <div class={Styles.produto}>
                <img src={guitarra} alt="violão"/>
                <p className={Styles.nome_produto}>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
                <p className={Styles.preco_produto}>R$ 989,50</p>
            </div>
                
            <div className={Styles.produto}>
                <img src={guitarra} alt="violão"/>
                <p className={Styles.nome_produto}>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
                <p className={Styles.preco_produto}>R$ 989,50</p>
            </div>
                
            <div className={Styles.produto}>
                <img src={guitarra} alt="violão"/>
                <p className={Styles.nome_produto}>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
                <p className={Styles.preco_produto}>R$ 989,50</p>
            </div>
                
            <div className={Styles.produto}>
                <img src={guitarra} alt="violão"/>
                <p className={Styles.nome_produto}>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
                <p className={Styles.preco_produto}>R$ 989,50</p>
            </div>
        </section>
    )
}

export default Secao2