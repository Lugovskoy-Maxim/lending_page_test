import Image from 'next/image';
import styles from './about.module.scss';
import star_icon from '../../images/Frame_1321314887.svg';
import arrow_icon from '../../images/Frame_1321314888.svg';
import line_icon from '../../images/Frame_1321314889.svg';
import chain_icon from '../../images/Frame_1321314890.svg';
import bg_icon from '../../images/Frame_1321314895.svg';
import { useWindowSize } from '@/helpers/windowSize';

export default function About() {
  const width = useWindowSize().width;

  return (
    <section className={styles.about}>
      <h3 className={styles.title}>About Budss</h3>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div style={{ position: 'relative' }}>
              <p className={styles.item_fitst}>
                Payment as a service, powered seamlessly by our network of
                shoppers
              </p>
              <div className={styles.primary_box}>{''}</div>
            </div>
          </li>
          <li className={styles.item}>
            <Image src={star_icon} alt={''} />
            <p className={styles.item_title}>Contactless</p>
            <p className={styles.item_desc}>
              Budss uses near field communication (NFC) for making contactless
              payments
            </p>
          </li>
          <li className={styles.item}>
            <Image src={arrow_icon} alt={''} />
            <p className={styles.item_title}>Increased Buying Power</p>
            <p className={styles.item_desc}>
              Returning customers spend up to 3X more.
            </p>
          </li>
          <li className={styles.item}>
            <Image src={line_icon} alt={''} />
            <p className={styles.item_title}>Analytics & Insights</p>
            <p className={styles.item_desc}>
              Gain a holistic view into your customers’ buying behavior &
              purchasing patterns.
            </p>
          </li>
          <li className={styles.item}>
            <Image src={chain_icon} alt={''} />
            <p className={styles.item_title}>Fraud Protection</p>
            <p className={styles.item_desc}>
              Budss handles all payments with a fraud prevention algorithm to
              flag high risk purchases & a user set PIN code to keep payment
              info secure.
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.background}>
        {width >= 1024 ? <Image src={bg_icon} alt={''} /> : ''}
      </div>
    </section>
  );
}
