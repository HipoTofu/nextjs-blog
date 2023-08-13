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
        <p>My name is Jhon Lee S. Reyes, 3rd year Computer Engineering.
          My hobbies are playing video games and watching from anime to kdrama
          or any sitcom series (watched all the office, the big bang theory, community).
          My favourite music is anything from bruno mars and my facourite food is French fries.
          Other things about myself is I like to let my intrusive thoughts win sometimes to make
          good memories with my friends.
        </p>
        <p>
          I took Computer Engineering becuase at first I took it becuase that is what my sister
          took when she was in college, but now I am liking what Computer Engineering is so I stayed.
          I would like to see myself exploring in software development in companies or in machine leaning.

        </p>

      </section>
    </Layout>
  );
}