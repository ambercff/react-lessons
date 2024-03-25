import styles from './Lateral.module.css'

export function Lateral () {
    return (
        <aside className={styles.conteiner}>
            <img 
            className={styles.imagemCabecalho}
            src='https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

        <div className={styles.perfil}>
            <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/111364597?v=4' />

            <b> Amber </b>
        </div>
        </aside>
    )
}
