import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function Visual(){
    return <Layout>
        <h1>
            {`visual`}
        </h1>
        
        <ul>
            <li>
                <Link href={'http://localhost:3000/visual/math'}>
                    <h3>
                        mathematics
                    </h3>
                </Link>
            </li>
        </ul>
    </Layout>
}