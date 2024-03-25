import styles from './Lista.module.css'
import { Card } from '../components/Card'
import { Filme } from '../components/Filme'
export function Lista() {
    return (
        <main className={styles.container}> 
            {/* <Card /> */}
            <Filme />
        </main>
    )
}