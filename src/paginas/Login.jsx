import { useState } from 'react'
import styles from './Login.module.css'

export function Login(){

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    function obterDadosFormulario(e){

        e.preventDefault()

        console.log(`Usuário: ${usuario}`)
        console.log(`Senha: ${senha}`)
    }

    return (
        <div className={styles.container}>
            <form className={styles.formulario} onSubmit={obterDadosFormulario}>
                <input placeholder="Usuário" className={styles.campo} value={usuario}
                onChange={ e => setUsuario(e.target.value) }/>
                <input placeholder="Senha" className={styles.campo} 
                value={senha}
                onChange={ e=> setSenha(e.target.value)}/>
                <button className={styles.botao}>Entrar</button>
            </form>
        </div>
    )
}

