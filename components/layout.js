import styles from './layout.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/SOFUL.png';

export default function Layout({ children }){
    return <div className={styles.container}>
        <ul>
            <li>
                <Link>
                    <Image/>
                </Link>
            </li>
        </ul>

        {children}
    </div>;
}