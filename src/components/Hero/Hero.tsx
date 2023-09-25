'use client';
import { Button } from '@/components';
import styles from './hero.module.scss';
import { useState } from 'react';
import Image from 'next/image';
import HeroImage from '../../images/image_hero.png';
import VectorImage from '../../images/vector270.svg';

export default function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpened = () => {
    console.log('123');

    setIsPopupOpen(true);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.titles}>Everyone is an Influencer</h1>
        <div className={styles.desc}>
          Budss is a payments as a service and WOM engine dedicated to
          acquisition and retention of customers to your business.
        </div>
        <Button className={styles.button} onClick={() => handlePopupOpened()} />
      </div>
      <div className={styles.right}>
        <Image className={styles.hero_image} src={HeroImage} alt={'Hero'} />
      </div>
      <Image
        className={styles.rectangle}
        src={VectorImage}
        alt={'rectangle'}
        priority={true}
      />
    </section>
  );
}
