import Image from 'next/image';
import styles from './about.module.scss';
import star_icon from '../../images/Frame_1321314887.svg';
import arrow_icon from '../../images/Frame_1321314888.svg';
import line_icon from '../../images/Frame_1321314889.svg';
import chain_icon from '../../images/Frame_1321314890.svg';
import bg_icon from '../../images/Frame_1321314895.svg';

export default function About() {
  return (
    <section className={styles.about}>
      <h3 className={styles.title}>About Budss</h3>
      <div className={styles.container}>
        <ul>
          <li>
            <p>
              Payment as a service, powered seamlessly by our network of
              shoppers
            </p>
          </li>
          <li>
            <Image src={star_icon} alt={''} />
            <p>Contactless</p>
            <p>
              Budss uses near field communication (NFC) for making contactless
              payments
            </p>
          </li>
          <li>
            <Image src={arrow_icon} alt={''} />
            <p>Increased Buying Power</p>
            <p>Returning customers spend up to 3X more.</p>
          </li>
          <li>
            <Image src={line_icon} alt={''} />
            <p>Analytics & Insights</p>
            <p>
              Gain a holistic view into your customers’ buying behavior &
              purchasing patterns.
            </p>
          </li>
          <li>
            <Image src={chain_icon} alt={''} />
            <p>Fraud Protection</p>
            <p>
              Budss handles all payments with a fraud prevention algorithm to
              flag high risk purchases & a user set PIN code to keep payment
              info secure.
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.background}>
        <Image src={bg_icon} alt={''} />
      </div>
    </section>
  );
}
