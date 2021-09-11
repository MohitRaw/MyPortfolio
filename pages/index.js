import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="flex flex-col h-screen" >
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <Hero />

      
    </div>
  )
}
