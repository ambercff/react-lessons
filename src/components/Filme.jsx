import styles from './Filme.module.css'
import { Card } from './Card'

export function Filme({propsFilme}) {
    return (

        <Card>
            <figure className={styles.container}>
                <img src={`https://image.tmdb.org/t/p/w400/${propsFilme.poster_path}`} />
                <figcaption>  {propsFilme.title} </figcaption>
                <p>{propsFilme.overview}</p>
                <p>{propsFilme.vote_average.toFixed(2)}</p>
            </figure>
        </Card>
    )
}