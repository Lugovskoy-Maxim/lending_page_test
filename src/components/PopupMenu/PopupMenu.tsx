import { Button } from '..';
import Image from 'next/image';
import rectangle from '../../images/rectangle.svg';
import styles from './popupmenu.module.scss';
import Link from 'next/link';
import { PopupMenuProps } from '@/types';

export default function PopupMenu(props: PopupMenuProps) {
  return (
    <div
      className={`${props.opened === true ? 'active' : ''} ${styles.popup} `}
    >
      <div className={styles.icons_container}>
        <button className={styles.close} onClick={() => props.onClick()}>
          <Image
            style={{ transform: 'rotate(45deg)' }}
            src={rectangle}
            alt={'Close'}
            className={styles.icon}
            priority={false}
          />
          <Image
            style={{ transform: 'rotate(-45deg)' }}
            src={rectangle}
            alt={'Close'}
            className={styles.icon}
            priority={false}
          />
        </button>
      </div>
      <Button
        className={styles.button}
        onClick={() => console.log('popup with form opened')}
      />
      <div className={styles.links_container}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link href={'/'}>For Business</Link>
          </li>
          <li className={styles.link}>
            <Link href={'/'}>For Customers</Link>
          </li>
          <li className={styles.link}>
            <Link href={'/'}>Privacy Policy</Link>
          </li>
          <li className={styles.link}>
            <Link href={'/'}>Terms Of Use - Seller</Link>
          </li>
          <li className={styles.link}>
            <Link href={'/'}>Terms of Use - Sellers & Customers</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
