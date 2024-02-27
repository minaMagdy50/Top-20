"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {
  let pathName = usePathname()
  return <>
  <nav className="navbar navbar-expand-lg shadow">
  <div className="container">
    <Link className="navbar-brand fw-bold  text-white" href="/">Top 20</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className={pathName === '/' ? "nav-link text-danger fw-bold" : "nav-link  text-white fw-bold"} href="/">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className={pathName === '/tvshow' ? "nav-link text-danger fw-bold" : "nav-link  text-white fw-bold"} href="/tvshow">TV Show</Link>
        </li>
        <li className="nav-item">
          <Link className={pathName === '/people' ? "nav-link text-danger  fw-bold" : "nav-link  text-white fw-bold"} href="/people">People</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
  </>
}
