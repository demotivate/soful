import Head from 'next/head';
import Link from 'next/link';
// import { getSubjTrees, getSubjData } from '../../lib/collectionVisual';

export default function Style({ data }){
    // console.log(data);
    // return <div>
    //     <p>
    //         {data.path}
    //     </p>
    // </div>
    console.log(data);
    return <div>
        {data.map(element => (
            <Link href={`http://localhost:3000/${element.id}.json`}>{element.title}</Link>
        ))}
    </div>
}

export function Links({ input }){
    return <div>
        <Link href={`http://localhost:3000/${input.id}.json`}>
            {input.title}
        </Link>
    </div>
}

export async function getStaticPaths(){
    // const paths = getSubjTrees();
    // return{
    //     paths,
    //     fallback: false,
    // };

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
    // const data = getSubjData(params.path);
    // return{
    //     props: {
    //         data,
    //     },
    // };

    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        // props: {curr: data},
        props: {data},
    };
}