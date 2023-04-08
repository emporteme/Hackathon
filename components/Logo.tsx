import styles from '../styles/logo.module.scss'
import Link from 'next/link'
export function Logo() {
    return (
        <>
            <Link href={'/'}>
                <div className={styles.logo}>ShopLocator</div>
            </Link>
        </>
    )
}