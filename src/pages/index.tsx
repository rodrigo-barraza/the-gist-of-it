import styles from './index.module.scss'
import GistComponent from '@/components/GistComponent/GistComponent'

export default function Index() {
    return (
    <main className={styles.home}>
        <GistComponent>
        </GistComponent>
    </main>
    )
}