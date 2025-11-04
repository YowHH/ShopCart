import React from 'react'
import Title from './ui/text'
import Link from 'next/link'

const HomeBanner = () => {
  return (
    <div className='py-16 md:py-0 bg-shop-light-pink rounded-lg px-10 lg:px-24 flex items-center
    justify-between'>
        <div>
            <Title>
                Get Up To 50% off on <br/>
                Selected Headphone
            </Title>
            <Link href={"/shop"} className="bg-shop-dark-green/90 text-white/90 px-5 py-2 rounded-md
            text-sm">
                Buy Now
            </Link>
        </div>
        <div>

        </div>
    </div>
  )
}

export default HomeBanner