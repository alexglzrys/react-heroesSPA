import React from 'react'
import { HeroesList } from '../components/HeroesList'

export const MarvelPage = () => {
  return (
    <>
      <h1 className='mt-5'>Marvel Page</h1>
      <hr />
      <HeroesList publisher="Marvel Comics"/>
    </>
  )
}
