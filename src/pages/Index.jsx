import React from 'react'
import Clients from '../widgets/Clients'
import Header from '../widgets/Header'
import Hero from '../widgets/Hero'
import Howitworks from '../widgets/Howitworks'
import Solustion from '../widgets/Solustion'

function Index() {
  return (
    <div className='container mx-auto p-4'>
        <Header/>
        <main className='mt-20'>
          <Hero/>
          <section className='md:p-20'>
            <Solustion/>
          </section>
          <section className='mt-20'>
            <Howitworks/>
          </section>
          <section className='mt-20 md:w-3/5 mx-auto'>
            <Clients/>
          </section>
        </main>
    </div>
  )
}

export default Index
