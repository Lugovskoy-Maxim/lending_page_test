import { Footer, Header } from '@/components';
import { LayoutProps } from '@/types';
import styles from '../../styles/main.module.scss';

export default function Layout(props: React.PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </>
  );
}
