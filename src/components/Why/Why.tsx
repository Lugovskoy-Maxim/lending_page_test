import Image from 'next/image';
import styles from './why.module.scss';
import image_block1 from '../../images/block1.svg';
import image_block2_1 from '../../images/block2_1.svg';
import image_block2_2 from '../../images/block2_2.svg';
import image_block2_3 from '../../images/block2_3.svg';
import image_block3 from '../../images/block3.svg';
import image_block4 from '../../images/block4.svg';

export default function Why() {
  return (
    <section className={styles.why}>
      <div className={styles.heading}>
        <p className={styles.heading_title}>Why Budss</p>
        <p className={styles.heading_desc}>
          We Provide Advanced Payment Solutions To Grow Your Business
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.block1}>
            <Image
              src={image_block1}
              alt={''}
              className={styles.block1_image}
              priority={false}
            />
            <div className={styles.block}>
              <p className={styles.block_title1}>
                Turn your customers into loyal influencers
              </p>
              <p className={styles.block_desc1}>
                Budss helps businesses harness the exponential power of loyal
                customers for acquisition and retention.
              </p>
            </div>
          </div>
          <div className={styles.block2}>
            <p className={styles.block_title2}>
              Harness the power of buying in bulk
            </p>
            <p className={styles.block_desc2}>
              Get at least 2X more sales with Budss Buying Groups. Your customer
              base will grow exponentially as your customers add their friends &
              family to your personalized group.
            </p>
            <Image
              src={image_block2_1}
              alt={''}
              className={styles.block2_image}
              priority={false}
            />
            <Image
              src={image_block2_2}
              alt={''}
              className={styles.block2_image}
              priority={false}
            />
            <Image
              src={image_block2_3}
              alt={''}
              className={styles.block2_image}
              priority={false}
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.block4}>
            <div className={styles.block4}>
              <p className={styles.block_title4}>
                Seasoned with AI and Gamification
              </p>
              <p className={styles.block_desc4}>
                AI programming creates a personalized customer journey, offering
                recommendations for their next purchase and optimizing rewards
                for after purchase.
              </p>
            </div>
            <Image
              src={image_block4}
              alt={''}
              className={styles.block4_image}
              priority={false}
            />
          </div>
          <div className={styles.block3}>
            <p className={styles.block_title3}>
              Supercharge Loyalty With Instant Cash Back
            </p>
            <p className={styles.block_desc3}>
              Budss allows for shoppers to earn immediate cash back at their
              favorite stores.
            </p>
            <Image
              src={image_block3}
              alt={''}
              className={styles.block3_image}
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
