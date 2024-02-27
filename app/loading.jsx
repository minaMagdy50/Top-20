"use client"
import React from 'react'
import { FidgetSpinner, Vortex } from 'react-loader-spinner'

export default function loading() {
  return <>
  

  <div className='loading'>
  <Vortex
  visible={true}
  height="300"
  width="300"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
  />
  </div>
  
  
  </>
}
