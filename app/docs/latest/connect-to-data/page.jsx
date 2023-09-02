"use client"

import Image from 'next/image';
import Link from 'next/link';
import styles from "./page.module.css";
import Login from "../../../../public/login.png";
import Launch from "../../../../public/launch.png";
import Database from "../../../../public/selectDB.png";
import FlatFiles from "../../../../public/selectFf.png";
import signUP from "../../../../public/SignUp.png";
import Charts from "../../../../public/datasetChart.jpg";
import "../../../globals.css";
import React from 'react';

const page = () => {

  window.addEventListener('scroll', function() {
    var currentScroll = window.scrollY;
    var navLinks = document.querySelectorAll('div ul li Link');
  
    for (var i = 0; i < navLinks.length; i++) {
      var navLink = navLinks[i];
      var navLinkId = navLink.getAttribute('href');
      var sectionTop = document.querySelector(navLinkId).offsetTop;
      
  
      if (currentScroll >= sectionTop) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    }
  });
  

/* let section = document.querySelectorAll('h3');
let links = document.querySelectorAll('link');

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      links.forEach(navlinks => {
        navlinks.classList.remove('active');
        document.querySelector('link [href+=' + id + ']').classList.add('active');
      })
    }
  })
} */

  return (
    <div className={styles.container}>
      <div className={styles.main}>
      
      <h2 className={styles.heading}>Quickstart: Connect to Data in Silzila</h2>
      <p className={styles.paragraph}>In this quickstart, you connect to data using Silzila website, which is the first step in building data models and creating reports.</p>
      <span className={styles.image} id='prerequisites'>
        <Image src={Charts} alt='Final Look of Your Creation'
         className={styles.img} />
      </span>
      
      <div className={styles.margin} >
      <h3 className={styles.head}>Prerequisites</h3>
       <p className={styles.paragraph}>To complete the steps in this article, you need the following resources:</p>
       <span className={styles.paragraph}>
       <p>Go to Silzila website
        <Link href="/" className={styles.link}> Silzila website link. </Link>
        Sign Up and Login to the Silzila website, which is free on cost that runs on your local computer. 
        The following window is the sign up window, 
        in this signup window you have to enter your Name, Mail ID and create a strong Password to use this website.</p> 
        </span>
        <span className={styles.image}>
        <Image src={signUP} alt='Login Page'
         className={styles.img}/>
       </span>
       </div>

       <div className={styles.margin}>
       <p className={styles.paragraph}>After successful completion of sign up, you can login the website using mail id and password on Login page.</p>
       <span className={styles.image} id='launch-screen'>
        <Image src={Login} alt='Login Page'
         className={styles.img}/>
       </span>
      </div>
      
      <div className={styles.margin}>
       <h3 className={styles.head}>Launch Screen</h3>
       <p className={styles.paragraph}>By using Silzila, 
        you can connect to many different types of Database and FlatFiles
        with .csv extension.</p>
       <p className={styles.paragraph}>The following screen is the
        Launch Screen of Silzila website,</p>
       <span className={styles.image}>
       <Image src={Launch}
       alt='Launch Screen' className={styles.img} />
       </span>
       <span className={styles.paragraph} id='connect-to-data'>
       <p>Launch Screen contain Place for DB Connections, Flat Files,
        Datasets and Playbooks. So, you can easily connect different kinds 
        of data using 'DB Connections' and 'Flat Files' in one page and
        next by the using the options <Link href="/" className={styles.link}> datasets </Link> and 
        <Link href="/" className={styles.link}> playbooks </Link> you can create reports using charts.
       </p>
       </span>
       </div>
       
      <div id='db-connections'>
       <h3 className={styles.head}>Connect to Data</h3>
       <p className={styles.paragraph}>Here, we can connect our Data by DB Connection and as flat file,
       for that follow the procedure below,</p>
       <h3 className={styles.head}>DB Connections</h3>
        <p className={styles.paragraph}>
          By hovering on '+' symbol in DB Connections, 
        you will get the following screen,
        </p>
        <p className={styles.paragraph}>
          Then, by clicking '+' symbol you can connect
           your database with silzila.
        </p>
        <span className={styles.image} id='flat-files'>
        <Image src={Database} alt='Start DB Connections' 
        className={styles.img}/>
        </span>
      </div>

      <div className={styles.margin}>
       <h3 className={styles.head}>Flat Files</h3>
        <p className={styles.paragraph}>By hovering on '+' symbol in Flat Files, 
        you will get the following screen,</p>
        <p className={styles.paragraph}>Then, by clicking '+' symbol you can connect your flat files(with .csv extension) with silzila.</p>
        <span className={styles.image} id='next-steps'>
        <Image src={FlatFiles} alt='Start Flat Files'
        className={styles.img}/>
        </span>
      </div>
      
      <div className={styles.margin}>
       <h3 className={styles.head}>Next Steps</h3>
        <p className={styles.paragraph}>
        There are all sorts of things you can do with Silzila
        website once you've connected to data. 
        You can create visuals and reports.</p> 
        <p className={styles.paragraph}>Take a look at the following resource to get you going:</p>
        <p className={styles.paragraph}>
          <Link href="/dbconnection" className={styles.link}>
          Procedure to work on DB Connections
          </Link>
        </p>
        <p className={styles.paragraph}>  
        <Link href="/flatFiles" className={styles.link}>
          Procedure to work on Flat Files
        </Link>
        </p>
      </div>
      </div>

    <div className={styles.sub}>
      <ul className={styles.unOrderedList}>
        <h3 className={styles.content}>On this page</h3>
            <li>
            <Link href='#prerequisites' 
            className={styles.rightlink}>
              Prerequisites
            </Link>
            </li>

          <li>
            <Link href='#launch-screen' className={styles.rightlink}>
            Launch Screen 
            </Link>
            </li>

          <li>
            <Link href='#connect-to-data' className={styles.rightlink}>
              Connect to data
            </Link>
            <ul className={styles.unOrderedList}>
              <li>
                <Link href='#db-connections' className={styles.rightlink}>
                DB Connections
                </Link>
              </li>

              <li>
                <Link href='#flat-files'className={styles.rightlink} >
                Flat Files
                </Link>
              </li>
           </ul>
          </li>
          <li>
            <Link href='#next-steps' className={styles.rightlink}>
            Next steps
            </Link>
          </li>
        </ul>
   </div>

</div>
  )
}

export default page
