import Head from 'next/head';
import { getSubjTrees } from '../../lib/collectionVisual';

export default function Style(){

}

export async function getStaticPaths(){
    const paths = getSubjTrees();
    return{
        paths,
        fallback: false,
    };
}

export async function getStaticProps(){

}