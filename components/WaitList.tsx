
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })


export function WaitList() {
    return  <main className={styles.main}>
    <div className={styles.description}>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/1026px-Uniswap_Logo.png"
            alt="uRange Logo"
            width={36}
            height={36}
            priority
          />
          <span className=' font-medium text-lg'>uRange</span>
        </a>
      </div>
    </div>

    <div className={styles.center}>
      <div className={styles.thirteen + " flex text-purple-500 cursor-pointer text-xl font-medium"} onClick={() => {
        window.open("https://docs.google.com/forms/d/1crSMRFrKTalONOZcV1LbG2gzYb_fNH0fNkB1V_338rs","blank")
      }}>
         Join
      </div>
    </div>

    <div className={styles.grid}>
      <a
        href="/"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
         Alert <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
         Do not let out of range positions go unnoticed
        </p>
      </a>

      <a
        href="/"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
         Clear <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
        Take control of your positions
        </p>
      </a>

      <a
        href="/"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          Mutilchain <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          Easily view assets on multiple chains.
        </p>
      </a>

      <a
        href="/"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          Free <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          Join now and get instant free access
        </p>
      </a>
    </div>
  </main>
}