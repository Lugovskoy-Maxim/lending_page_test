import Image from 'next/image';
import styles from './works.module.scss';
import phone_image from '../../images/phone.png';
import screen_image from '../../images/screen.png';

export default function Works() {
  return (
    <section className={styles.works}>
      <Image
        className={styles.phone}
        src={phone_image}
        alt={'phone'}
        priority={false}
      />
      <Image
        className={styles.screen}
        src={screen_image}
        alt={'screen'}
        priority={false}
      />
      <div className={styles.text}>
        <div className={styles.top}>
          <span className={styles.color}>How Budss Works</span>
          <span className={styles.black}>How Budss Works</span>
        </div>
        <div className={styles.middle}>
          <span className={styles.black}>How Budss Works</span>
          <span className={styles.color}>How Budss Works</span>
        </div>
        <div className={styles.bottom}>
          <span className={styles.color}>How Budss Works</span>
          <span className={styles.black}>How Budss Works</span>
        </div>
      </div>
    </section>
  );
}
