import styles from './layout.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/SOFUL.png';

export default function Layout({ children }){
    return <div>
        <ul className={styles.navbar}>
            <li>
                <Link href={'http://localhost:3000'} className={styles.navlink}>
                    <Image
                        src={logo}
                        width={100}
                        height={100}
                    />
                </Link>
            </li>

            <li className={styles.navitem}>
                <Link href={'http://localhost:3000/auditory'} className={styles.navlink}>auditory</Link>
            </li>
            
            <li className={styles.navitem}>
                <Link href={'http://localhost:3000/reading'} className={styles.navlink}>reading</Link>
            </li>

            <li className={styles.navitem}>
                <Link href={'http://localhost:3000/visual'} className={styles.navlink}>visual</Link>
            </li>
        </ul>

        <div className={styles.container}>
           {children}
        </div>
    </div>;
}