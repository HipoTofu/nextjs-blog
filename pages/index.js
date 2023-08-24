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
          My first impression for the first month of the semester so far.
          First week is all about orientation of the class. Second week 
          is more on the first module and I am liking it so far. I am 
          excited to implement codes into machinces or arduinos because
          I have always thought to myself "how do I put this code in a
          machines". I am excited to what me and my classmate are going 
          to make in our future thesis with these lessons.
        </p>
        <p>
          I am excited to learn more in this semester. 
        </p>
        <p>
          Now I know how to update a webpage.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on our <a href="https://nextjs.org/learn/">Next.js</a> tutorial.)
        </p>

      </section>
    </Layout>
  );
}