"use client"

import React, { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { MdArrowDropDown } from 'react-icons/md';
import '../../globals.css';
import { usePathname } from 'next/navigation';


const Sidebar = () => {
  const[open,setOpen] = useState(false);
  const[secondOpen,setSecondOpen] = useState(false);
  const router = usePathname();

  
  /* const handleClick = () => {
  const navLinkEls = document.querySelectorAll(styles.linked);
  navLinkEls.forEach(navLinkEL => {
    navLinkEL.addEventListener('click', () => {
      document.querySelector('.active')?.classList.remove('active');
      navLinkEL.classList.add('active');
    });
  });
} */

  return (
    <div className={styles.container}>
       
            <ul className={styles.dropdown}>
            <h3 className={styles.content}>CONTENTS</h3>

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
                      null :
                      <ul className={styles.works}>
                     <li>
                      <Link href='/docs/latest/connect-to-data' 
                      className={router === "/docs/latest/connect-to-data" ? styles.color : styles.linked}>
                        Connect to Data
                        </Link>
                      </li>
                     <li><Link href='/docs/latest/db-connections' 
                      className={router === "/docs/latest/db-connections" ? styles.color : styles.linked}>
                        DB Connections
                      </Link>
                      </li>
                     <li><Link href='/docs/latest/flat-files' 
                     className={router === "/docs/latest/flat-files" ? styles.color : styles.linked}>
                      Flat Files
                     </Link>
                     </li>
                    </ul>
                  }                   
              </li>
            
              <li>
                <Link href="/" className={router === "/" ? styles.maincolor : styles.link}>
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
                    null :
                    <ul className={styles.works}>
                    <li><Link href='/' className={router === "/" ? styles.color : styles.linked}>Charts</Link></li>
                    <li><Link href='/' className={router === "/" ? styles.color : styles.linked}>Dashboard</Link></li>
                    <li><Link href='/' className={router === "/" ? styles.color : styles.linked}>Filter</Link></li>
                  </ul>
                }                   
              </li>

            </ul>
    </div>
  )
}

export default Sidebar