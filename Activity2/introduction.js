import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi my name is Jhon Lee S. Reyes, 3rd year Computer Engineering{' '}
        
          

        </p>
        
      </section>
    </Layout>
  );
}