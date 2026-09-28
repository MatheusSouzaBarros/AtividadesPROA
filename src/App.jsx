import './App.css'
import './index.css'
import Cabeca from './AreasAula3/CabecaMenu.jsx'
import Secao1 from './AreasAula3/Section1.jsx'
import Secao2 from './AreasAula3/Section2.jsx'
import Secao3 from './AreasAula3/Section3.jsx'
import Secao4 from './AreasAula3/Section4.jsx'
import Rodape from './AreasAula3/rodape.jsx'

function App() {
  return (
    <>
      <div className="fundo"> 
        <main>
          <Cabeca />
          <Secao1 />
          <Secao2 />
          <Secao3 />
          <Secao4 />
          <Rodape />
        </main>
      </div>
    </>
  )
}

export default App