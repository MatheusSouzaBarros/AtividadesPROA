import Styles from './css/Section4.module.css'
import whats from '../imgs/whats.png';
import insta from '../imgs/insta.png';
import face from '../imgs/face.png';

function Secao4 () {
    return (
        <section className={Styles.section4}>
            <form className={Styles.form_contato}>
                <label htmlFor="nome">Entre com o seu nome:</label>
                <input type="text" className={Styles.nome} name="nome" placeholder="Digite seu nome aqui"></input>

                <label htmlFor="email">Entre com o seu e-mail:</label>
                <input type="email" className={Styles.email} name="email" placeholder="Digite seu email aqui"></input>

                <label htmlFor="mensagem">inserir texto</label>
                <textarea className={Styles.mensagem} name="mensagem" placeholder="Faça seu pedido por aqui"></textarea>

                <button type="submit">Enviar</button>
            </form>

            <div className={Styles.redes_sociais}>
                <p>Acesse também nossas redes socias:</p>
                <div className={Styles.icones_redes}>
                    <a href="#"><img src={whats} alt="WhatsApp"></img></a>
                    <a href="#"><img src={insta} alt="Instagram"></img></a>
                    <a href="#"><img src={face} alt="Facebook"></img></a>
                </div>
            </div>
        </section>
    )
}

export default Secao4