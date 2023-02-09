import Head from 'next/head'
import HomePageContent from '../components/homePageContent'

export default function Home() {
  return (
    <>
      <Head>
        <title>DummyMart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <HomePageContent/>
      </main>
    </>
  )
}
