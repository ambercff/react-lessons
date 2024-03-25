import styles from './Cabecalho.module.css'
import { FilmReel, FilmStrip } from '@phosphor-icons/react'

export function Cabecalho () {
    return (
        <header className={styles.conteiner}>
            <FilmReel weight='light' size={32} color='#fff'/><p>Recomendações</p> <FilmStrip size={32} weight="light" color='#fff'/>
        </header>
    )
}
