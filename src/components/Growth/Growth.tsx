import Image from 'next/image';
import styles from './growth.module.scss';
import { Button } from '@/components';
import tictik_icon from '../../images/TikTok.svg';
import facebook_icon from '../../images/Facebook.svg';
import instagram_icon from '../../images/Instagram.svg';
import twitter_icon from '../../images/Twitter.svg';
import partner_1 from '../../images/partner_1.svg';
import partner_2 from '../../images/partner_2.svg';
import partner_3 from '../../images/partner_3.svg';
import partner_4 from '../../images/partner_4.svg';
import partner_5 from '../../images/partner_5.svg';

export default function Growth() {
  return (
    <section className={styles.growth}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.heading_title}>Let Your Business Grow</p>
          <Button
            className={styles.button}
            onClick={() => console.log('contact sales')}
          />
        </div>
        <div className={styles.media}>
          <div className={styles.media_text}>
            <p className={styles.media_title}>Your Brand Awareness Maters</p>
            <p className={styles.media_desc}>
              Budss is a husle free solution to put your brand on any digital
              surface including Instagram, Facebook, Twitter and TikTok
            </p>
          </div>
          <div className={styles.social}>
            <Image
              className={styles.social_icon}
              src={facebook_icon}
              alt={''}
              priority={false}
            />
            <Image
              className={styles.social_icon}
              src={twitter_icon}
              alt={''}
              priority={false}
            />
            <Image
              className={styles.social_icon}
              src={instagram_icon}
              alt={''}
              priority={false}
            />
            <Image
              className={styles.social_icon}
              src={tictik_icon}
              alt={''}
              priority={false}
            />
          </div>
        </div>
      </div>
      <div className={styles.partners}>
        <Image
          className={styles.partners_icon}
          src={partner_3}
          alt={'woo'}
          priority={false}
        />
        <Image
          className={styles.partners_icon}
          src={partner_5}
          alt={'shopify'}
          priority={false}
        />
        <Image
          className={styles.partners_icon}
          src={partner_1}
          alt={'square'}
          priority={false}
        />
        <Image
          className={styles.partners_icon}
          src={partner_2}
          alt={'squarespace'}
          priority={false}
        />

        <Image
          className={styles.partners_icon}
          src={partner_4}
          alt={'clover'}
          priority={false}
        />
      </div>
    </section>
  );
}
