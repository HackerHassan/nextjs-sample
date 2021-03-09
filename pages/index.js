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
        <form>
      <label for="email">Enter email:</label>
      <input type="email" id="email" name="email"></input>
      <input type="submit" onclick="alert(document.getElementsByName("email")[0].value)" value="Submit"></input>
      </form>

      <script
          dangerouslySetInnerHTML={{
            __html: `
            console.log('Console message 2');
          `,
          }}
        />
      <Head>
        {/* <script type="text/javascript" src="api/mail.js"></script> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            console.log('Console message 1');
          `,
          }}
        />
      </Head>
        
      </main>

      <script
          dangerouslySetInnerHTML={{
            __html: `
            function myFunction() {
              let greet = 'hello world'
              alert(greet)
            }
          `,
          }}
        />
      
      
      {/* https://btc.static.fun/?edit=oBdtJxWv96 */}
      {/* above code adds functionality and cool CSS to copy */}

      {/* https://stackoverflow.com/questions/54067291/next-js-loads-script-tags-but-it-doesnt-execute-them */}
      {/* <div>
        <Head>
          <script type="text/javascript" src="api/mail.js"></script>
        </Head>
      </div> */}
      

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

