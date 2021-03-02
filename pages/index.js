import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>eMail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">eMail! 😈</a>
        </h1>

        <p className={styles.description}>
          Get started by inserting an{' '}
          <code className={styles.code}>email address</code>
        </p>
        
      </main>
      
      <form>
      <label for="email">Enter email:</label>
      <input type="email" id="email" name="email"></input>
      <input type="submit" onclick="myFunction()" value="Submit"></input>
      </form>

      <script></script>

      <footer className={styles.footer}>
        <a
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

function myFunction() {alert(`An email was just sent to: `)}