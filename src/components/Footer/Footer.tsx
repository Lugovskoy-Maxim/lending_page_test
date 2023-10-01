import Image from 'next/image';
import logo_icon from '../../images/buds_logo.svg';
import appStore_icon from '../../images/appstore.svg';
import googlePlay_icon from '../../images/googleplay.svg';
import styles from './footer.module.scss';
import Link from 'next/link';
import { Button } from '@/components';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <Image src={logo_icon} alt={'logo'} priority={false} />
            <p>budss</p>
          </div>
          <div className={styles.nav}>
            <Link href={'/'}>For Business</Link>
            <Link href={'/'}>For Customers</Link>
          </div>
          <div className={styles.top_links}>
            <div className={styles.right}>
              <Button
                className={styles.button}
                onClick={() => console.log('contact sales')}
              />
              <div className={styles.right_links}>
                <Image src={appStore_icon} alt={'appstore'} priority={false} />
                <Image
                  src={googlePlay_icon}
                  alt={'googleplay'}
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © Copyright 2023, All Rights Reserved by Budss
          </p>
          <div className={styles.bottom_links}>
            <Link href={'/'}>Privacy Policy</Link>
            <Link href={'/'}>Terms Of Use - Seller</Link>
            <Link href={'/'}>Terms of Use - Sellers & Customers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
