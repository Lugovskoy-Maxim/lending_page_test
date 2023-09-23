'use client';
import Image from 'next/image';
import logo from '../../images/buds_logo.svg';
import styles from './header.module.scss';
import { Links, Menu, PopupMenu } from '@/components';
import { useState } from 'react';

export default function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  function handlerMenu() {
    setMenuOpened(!menuOpened);
  }
  return (
    <header className={styles.header}>
      <Links />
      <div className={styles.top}>
        <div className={styles.logo}>
          <Image
            className={styles.image}
            src={logo}
            alt={'logo'}
            priority={true}
          />
          <span className={styles.title}>budss</span>
        </div>
        <Menu handlerMenu={() => handlerMenu()} />
      </div>
      <PopupMenu opened={menuOpened} onClick={() => handlerMenu()} />
    </header>
  );
}
