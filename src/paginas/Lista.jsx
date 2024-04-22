import styles from './Lista.module.css'
import { Card } from '../components/Card'
import { Filme } from '../components/Filme'
import { useState } from 'react'
import { useEffect } from 'react'
export function Lista() {
        const [filmes, setFilmes] = useState([])

        const apiKey = "463b673acdba7a22464fe15b256fac00"

        useEffect( () => {
            fetch(`
            https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&language=pt-BR`)
            .then( resposta => resposta.json() )
            .then( dados => setFilmes(dados.results))
        }, [])

        return (

            <main className={styles.container}> 
                { filmes.map( umFilme => <Filme propsFilme = {umFilme} /> ) }
            </main>
        )
}