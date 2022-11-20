import Link from 'next/link';
import Layout from '../../components/layout';

export default function Reading(){
    return <Layout>
        <h1>
            {`reading`}
        </h1>
        
        <ul>
            <li>
                <Link href={'http://localhost:3000/reading/math'}>
                    <h3>
                        mathematics
                    </h3>
                </Link>
            </li>
        </ul>
    </Layout>
}