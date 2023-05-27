import styles from './index.module.scss'
import GistComponent from '@/components/GistComponent/GistComponent'
import Head from 'next/head'

export default function Index() {
    return (
    <main className={styles.home}>
        <Head>
            <title>The Gist Of It</title>
            <meta name="description" content="A project by Rodrigo Barraza"/>
            <meta name="keywords" content="rodrigo barraza"/>
            <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <h1>The Gist of It</h1>
        <p>Search through your favorite user&apos;s gists on Github.</p>
        <GistComponent>
        </GistComponent>
    </main>
    )
}