import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function Style({ data }){
    return <Layout>
        <h1>
            {`reading : ${data.title}`}
        </h1>

        {data.children.map(element => (
            <ul>
                <li>
                    <Link href={`http://localhost:3000/reading/${element.tag}`}>
                        <h3>
                            {element.title}
                        </h3>
                    </Link>
                </li>
            </ul>
        ))}
    </Layout>
}

export async function getStaticPaths(){
    const req = await fetch('http://localhost:3000/paths.json');
    const data = await req.json();

    const paths = data.map((curr) => {
        return { params: { id: curr } };
    })

    return{
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }){
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: {data},
    };
}