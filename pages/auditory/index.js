import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/Home.module.css'

export default function Auditory(){
    return <Layout>
        <Head>
            <title>soful - Auditory</title>
            <link rel="icon" href="/SOFUL.png" />
        </Head>

        <main>
            <h1>
                {`auditory`}
            </h1>
            
            <div className={styles.grid}>
                <Link href={'http://localhost:3000/auditory/math'} className={styles.card}>
                    <h3>
                        mathematics
                    </h3>
                </Link>
            </div>
        </main>
    </Layout>
}