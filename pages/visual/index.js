import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function Visual(){
    return <Layout>
        <Link href={'http://localhost:3000/visual/math'}>
            <h2>
                mathematics
            </h2>
        </Link>
    </Layout>
}