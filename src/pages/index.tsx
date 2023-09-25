import { Layout } from '@/layouts';
import { About, Hero } from '@/components';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}
