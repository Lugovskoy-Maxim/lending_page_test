import { Layout } from '@/layouts';
import { About, Growth, Hero, Indicators, Why, Works } from '@/components';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Works />
      <Indicators />
      <Why />
      <Growth />
    </Layout>
  );
}
