import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/Home.module.css';

export default function Style({ data }){
    return <Layout>
        <Head>
            <title>soful - Visual</title>
            <link rel="icon" href="/SOFUL.png" />
        </Head>

        <main>
            <h1>
                {`visual : ${data.title}`}
            </h1>

            <div className={styles.grid}>
                {data.children.map(element => (
                    <Link href={`http://localhost:3000/visual/${element.tag}`} className={styles.card}>
                        <h3>
                            {element.title}
                        </h3>
                    </Link>
                ))}
            </div>

            {
                (Object.keys(data.linkVisual).length == 0) ? (
                    <div></div>
                ) : (
                    <div>
                        <br />
                        <h1>
                            {'recommended resources'}
                        </h1>

                        {data.linkVisual.map(element => (
                            <ul>
                                <li>
                                    <Link href={element}>
                                        <h3>
                                            {element}
                                        </h3>
                                    </Link>
                                </li>
                            </ul>
                        ))}
                    </div>
                )
            }
        </main>
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