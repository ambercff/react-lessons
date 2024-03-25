import estilos from './Inicial.module.css'
import { Cabecalho } from '../components/Cabecalho' 
import { Lateral } from '../components/Lateral'
import { Lista } from './Lista'

export function Inicial() {

  return (
      <div className={estilos.gridConteiner}>
        <Cabecalho/>
        <Lateral/>
        <Lista />
      </div>
  )
}
