import Link from 'next/link';

export default function Visual(){
    return <div>
        <Link href={'http://localhost:3000/auditory/math'}>
            <h1>
                mathematics
            </h1>
        </Link>
    </div>
}