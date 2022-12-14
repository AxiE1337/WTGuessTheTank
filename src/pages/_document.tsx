import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html data-theme='dark' className='dark'>
      <Head>
        <meta name='description' content='Guess the tank/map War thunder' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' href='/icon-256x256.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter&family=Roboto&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
