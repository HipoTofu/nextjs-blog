import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (

      
      <Head>
    Manifesto For Agile Software Development
      </Head>
            <title></title>
        <p>
          We are uncovering better ways of developing
          software by doing it and helping others do it.
          Through this work we have come to value:
        </p>
        <p>
          Individuals and interactions over processes and tools
          Working software over comprehensive documentation
            Costumer collaboration over contract negotiation
              Responding to change over following a plan
        </p>
        <p>
          That is, while there is value in the items on
          the right, we value the items on the left more.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on our <a href="https://nextjs.org/learn/">Next.js</a> tutorial.)
        </p>

      </section>

  );
}
