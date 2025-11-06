import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SocialMedia from './SocialMedia'
import {SubText, SubTitle} from "./ui/text";
import { quickLinksData } from '@/constants/data'
import Link from 'next/link'
import { it } from 'node:test'

const Footer = () => {
  return (
    <footer className='bg-white border-t'>
        <Container>
            <FooterTop/>
            <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <div className='space-y-4'>
                <Logo/>
                <SubText>
                  Discover curated furniture collections at ShopCart, blending
                  style and comfort to elevate your living spaces.
                </SubText>
                <SocialMedia className='text-darkColor/60'
                iconClassName="border-darkColor/60 hover:border-shop-light-green hover:text-shop-light-green"
                tooltipClassName="bg-darkColor text-white"/>
              </div>
              <div>
                <SubTitle>Quick Links</SubTitle>
                <ul className='space-y-3 mt-4'>
                  {quickLinksData?.map((item) => (
                    <li key={item?.title}>
                      <Link href={item?.href} className=''>
                        {item?.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div></div>
              <div></div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer