'use client';
import { ROUTE } from '../../constants/routes';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './links.module.scss';

export default function Links() {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div
          className={`${styles.link} ${
            pathname === ROUTE.BUSINESS ? styles.link_active : ''
          }`}
        >
          <Link className={styles.text} href={ROUTE.BUSINESS}>
            For Business
          </Link>
        </div>
        <div
          className={`${styles.link} ${
            pathname === ROUTE.CUSTOMERS ? styles.link_active : ''
          }`}
        >
          <Link className={styles.text} href={ROUTE.CUSTOMERS}>
            For Customers
          </Link>
        </div>
      </nav>
    </div>
  );
}
