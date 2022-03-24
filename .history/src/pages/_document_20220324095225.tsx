import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>oiiiii</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
          <link rel='stylesheet' href='nprogress.css'/>

          <link rel="shortcut icon" href="favicon.png" type="image/x-ican" />
        </Head>
        <body>
          <Main />
          <NextScript /> 
        </body>
      </Html>
    )
  }
}