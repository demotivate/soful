import Head from 'next/head';
import Link from 'next/link';


export default function Visual(){
    return <div>
        <Link href={'http://localhost:3000/visual/math'}>
            <h1>
                mathematics
            </h1>
        </Link>
    </div>
}