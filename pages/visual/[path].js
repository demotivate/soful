import Head from 'next/head';
import { getSubjTrees, getSubjData } from '../../lib/collectionVisual';

export default function Style(){

}

export async function getStaticPaths(){
    const paths = getSubjTrees();
    return{
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }){
    const data = getSubjData(params.path);
    return{
        props: {
            data,
        },
    };
}