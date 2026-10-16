import Styles from './css/footer.module.css'

function Footer() {
    return (
        <footer>
            <div className={Styles.texto_rodape}>
                Agencia de Viagens travel e Associados
                <br/>
                Endereço: Rua tito, 54 - Vila Romana
                <br/>
                Telefone: (11) 3265-4546
                <br/>
                E-mail: agenciaViagem@travel.com.br
            </div>

            <div className={Styles.redes}>
                <a href="#"> Política de Privacidade</a>
                <a href="#"> Relatórios Anuais</a>
                <a href="#"> Trabalhe conosco</a>
            </div>
        </footer>
    )
}
export default Footer
