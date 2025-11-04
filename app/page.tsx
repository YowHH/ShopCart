import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <Container className='bg-shop-light-pink'>
      <div className='text-xl font-semibold'>
        Home
      </div>
      <Button variant="destructive">Check out</Button>
    </Container>
    
  )
}

export default Home