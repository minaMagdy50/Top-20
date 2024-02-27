"use client"

import React, { useEffect } from 'react'

export default function BootstrabClient() {
  useEffect(()=>{

    require('bootstrap/dist/js/bootstrap.bundle')
  },[])


  return null
}
