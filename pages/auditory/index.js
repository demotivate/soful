import Link from 'next/link';
import Layout from '../../components/layout';

export default function Auditory(){
    return <Layout>
        <h1>
            {`auditory`}
        </h1>
        
        <ul>
            <li>
                <Link href={'http://localhost:3000/auditory/math'}>
                    <h3>
                        mathematics
                    </h3>
                </Link>
            </li>
        </ul>
    </Layout>
}