"use client"

import React, { useState } from 'react';
import styles from "./page.module.css";
import Link from 'next/link';
import { MdArrowDropDown } from 'react-icons/md';

const Sidebar = () => {
  const[open,setOpen] = useState(false);
  const[secondOpen,setSecondOpen] = useState(false);

  return (
    <div className={styles.container}>
            <h3 className={styles.content}>CONTENTS</h3>
            
            <div className={styles.sidebar}>
            
              <div>
                <ul className={styles.dropdown}>
                  <li>
                    <Link href="/installation" className={styles.link}>
                     <p>Installation</p>
                    </Link>               
                  </li>

                  <li>
                  <span className={styles.link}
                  onClick={()=>setOpen(!open)}>
                  <p>Connect to Data  { open ? <span className={styles.rotate}>
                    <MdArrowDropDown/>
                    </span>  : <MdArrowDropDown/>
                    }
                   </p>  
                  </span>
                   {open ? 
                    <ul className={styles.works}>
                      <li><Link href='/connectData' className={styles.linked}>Connect to Data</Link></li>
                      <li><Link href='/dbconnection' className={styles.linked}>DB Connections</Link></li>
                      <li><Link href='/flatFiles' className={styles.linked}>Flat Files</Link></li>
                    </ul> : ""
                   }                   
                  </li>

                  <li>
                   <Link href="/" className={styles.link}>
                    <p>Datasets</p>
                   </Link>
                  </li>
                  
                  <li>
                  <span className={styles.link}
                  onClick={()=>setSecondOpen(!secondOpen)}>
                  <p>Playbooks  { secondOpen ? <span className={styles.rotate}>
                    <MdArrowDropDown/>
                    </span>  : <MdArrowDropDown/>
                    }
                   </p>
                  </span>
                   {secondOpen ? 
                    <ul className={styles.works}>
                      <li><Link href='/dbconnection' className={styles.linked}>Charts</Link></li>
                      <li><Link href='/dbconnection' className={styles.linked}>Dashboard</Link></li>
                      <li><Link href='/dbconnection' className={styles.linked}>Filter</Link></li>
                    </ul> : ""
                   }                   
                  </li>

                  </ul>
              </div>
              </div>
    </div>
  )
}

export default Sidebar
