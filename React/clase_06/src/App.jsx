import EjemploContexto from "./components/EjemploContexto/EjemploContexto"
import EjemploFusion from "./components/EjemploFusion/EjemploFusion"
import EjemploUseReducer from "./components/EjemploUseReducer/EjemploUseReducer"
import GeneralWrapper from "./components/GeneralWrapper/GeneralWrapper"


function App() {

  return (
    <GeneralWrapper>
      {/* <EjemploUseReducer/>
      <EjemploContexto /> */}
      <EjemploFusion />
    </GeneralWrapper>
  )
}

export default App
