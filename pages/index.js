import Head from 'next/head'
import styles from '../styles/Home.module.css'
import * as React from "react";


export default function Home() {
  // added global variables
  // alert('hi added an aler here');
  let chicken = 'dude are these nuggets';
  
  React.useEffect(() => {
    // https://stackoverflow.com/questions/55151041/window-is-not-defined-in-next-js-react-app

    // window is accessible here.
    function myFunction() {
      let greet = 'hello world'
      alert(greet)
    }

    // confirmation function 
    // https://stackoverflow.com/questions/16849117/html-how-to-do-a-confirmation-popup-to-a-submit-button-and-then-send-the-reque
    
    myFunction()
  }, []);
  

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
          <input type="submit" onclick="myFunction()" value="Submit"></input>
      </form>

      <script
          dangerouslySetInnerHTML={{
            __html: `
            console.log('console message 0003417');
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

