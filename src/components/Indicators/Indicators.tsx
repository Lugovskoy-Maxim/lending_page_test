import styles from './indicators.module.scss';

export default function Indicators() {
  return (
    <section className={styles.indicators}>
      <div className={styles.block}>
        <p className={styles.title}>15%</p>
        <p className={styles.desc}>Increase in Purchase Amount</p>
      </div>
      <div className={styles.block}>
        <p className={styles.title}>30%</p>
        <p className={styles.desc}>Growth in Annual Sales</p>
      </div>
      <div className={styles.block}>
        <p className={styles.title}>10%</p>
        <p className={styles.desc}>Growth in New Customers</p>
      </div>
    </section>
  );
}
