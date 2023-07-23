"use client"

import Link from 'next/link'
import styles from './page.module.css'
import React from 'react'
import Image from 'next/image'
import Button from '../button/Button'

const Navbar = () => {
    
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.link}>
      <Image src="/logo.jpeg" width={32} height={32} 
      alt='Logo'/>
      {"  "}
      <span className={styles.title}>Silzila Documentation</span>
      </Link>
     </div> 
  )
}

export default Navbar
