import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/Home.module.css';

export default function Visual(){
    return <Layout>
        <main>
            <h1>
                {`visual`}
            </h1>
            
            <div className={styles.grid}>
                <Link href={'http://localhost:3000/visual/math'} className={styles.card}>
                    <h3>
                        mathematics
                    </h3>
                </Link>
            </div>
        </main>
    </Layout>
}