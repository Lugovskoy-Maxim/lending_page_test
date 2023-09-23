import Image from 'next/image';
import rectangle from '../../images/rectangle.svg';
import styles from './burger.module.scss';
import { BurgerProps } from '@/types';

export default function Burger(props: BurgerProps) {
  return (
    <>
      <button onClick={() => props.onClick()} className={styles.container}>
        <Image
          src={rectangle}
          alt={'Menu'}
          className={styles.icon}
          priority={false}
        />
        <Image
          src={rectangle}
          alt={'Menu'}
          className={styles.icon}
          priority={false}
        />
        <Image
          src={rectangle}
          alt={'Menu'}
          className={styles.icon}
          priority={false}
        />
      </button>
    </>
  );
}
