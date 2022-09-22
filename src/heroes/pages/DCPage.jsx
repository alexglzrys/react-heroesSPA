import React from 'react'
import { HeroesList } from '../components/HeroesList'

export const DCPage = () => {
  return (
    <>
      <h1 className='mt-5'>DC Page</h1>
      <hr />
      <HeroesList publisher="DC Comics"/>
    </>
  )
}
