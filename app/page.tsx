import React from 'react'
import Image from 'next/image'

const page = () => {
  return <main className="main-container">
    <section className="home-grid">
     <div id="coin-overview">
      <div className='header'>
        <Image src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png" alt="Bitcoin Logo" width={32} height={32} />
      </div>
      </div > 
    
    <p>Trending Coins</p>

    </section>

    <section className="w-full mt-7 space-y-4">
      <p>Categories</p>

    </section>
  </main>
}

export default page