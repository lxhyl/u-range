import { WaitList } from '@/components/WaitList'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>uRange</title>
        <meta name="description" content="uniswapV3 range watcher" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/1026px-Uniswap_Logo.png" />
      </Head>
      <WaitList/>
    </>
  )
}
