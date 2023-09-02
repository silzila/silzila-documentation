"use client"

import Link from 'next/link';
import styles from './page.module.css';
import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const[active,setActive] = useState(false);
  const router = usePathname();

  let links = [ 
    {
      id : 1,
      url : '/docs/latest/connect-to-data'
    },
    {
      id : 1,
      url : '/docs/latest/db-connections'
    },
    {
      id : 1,
      url : '/docs/latest/flat-files'
    }
  ]
    
  return (
    <div className={styles.container}>
      
     <div>
      <Link href="/" className={styles.link}>
      <Image src="/logo.jpeg" width={36} height={36} 
      alt='Logo'/>
      </Link>
     </div>

    {/*  <Link href="/docs" as={['/documentation', '/help']}>
     <a>Documentation</a>
     </Link>
    */}

     <div className={styles.two}>
      <Link href="/" className={router === "/" ? styles.color : styles.box}>
        Home
      </Link>
      
      <Link href={links.map((connect)=>(
        <div key={connect.id}>{connect.url}</div>
      ))} 
      className={router === '/docs/latest/connect-to-data' || '/docs/latest/db-connections' || '/docs/latest/flat-files'  ? styles.color : styles.box}>
        Documentation
      </Link>

      <Link href="/docs/latest/installation" className={router === "/docs/latest/installation" ? styles.color : styles.box}>
        Installation
      </Link>
      <Link href="/" className={router === "/" ? styles.color : styles.box}>
        TryLive
      </Link>
      <Link href="/" className={router === "/" ? styles.color : styles.box}>
        Github
      </Link>
     </div>
     
     <div onClick={() => setActive(!active)}>
     <div className={active ? styles.activeHamburger : styles.hamburger}>
     </div>

     <div className={active ? styles.activesidenav : styles.sidenav}>
      <Link href="/docs/latest/connect-to-data" className={router === "/docs/latest/connect-to-data" ? styles.activecolor : styles.box}>
        Home
      </Link>
      <Link href="/docs/latest/db-connections" className={router === "/docs/latest/db-connections" ? styles.activecolor : styles.box}>
        Documentation
      </Link>
      <Link href="/docs/latest/installation" className={router === "/docs/latest/installation" ? styles.activecolor : styles.box}>
        Installation
      </Link>
      <Link href="/docs/latest/flat-files" className={router === "/docs/latest/flatfiles" ? styles.activecolor : styles.box}>
        TryLive
      </Link>
      <Link href="/" className={router === "/" ? styles.activecolor : styles.box}>
        Github
      </Link>
     </div>

     </div>

    </div> 

  )
}

export default Navbar
