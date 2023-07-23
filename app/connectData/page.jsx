"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from "./page.module.css"
import Login from "../../public/login.png";
import Launch from "../../public/launch.png";
import Database from "../../public/selectDB.png";
import FlatFiles from "../../public/selectFf.png";
import OverAllChartView from "../../public/overAllChart.jpg";
import signUP from "../../public/SignUp.png";
import Charts from "../../public/datasetChart.jpg";

const page = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Quickstart: Connect to Data in Silzila</h2>
      <h3 className={styles.head}>In this article</h3>
      <div className={styles.paragraph}>
        <ol className={styles.orderedList}>
          <li><p>Prerequisites</p></li>
          <li><p>Launch Screen</p></li>
          <li><p>Connect to data</p>
            <ul className={styles.unOrderList}>
              <li>DB Connections</li>
              <li>Flat Files</li>
           </ul>
          </li>
        <li><p>Next steps</p></li>
        </ol>
      </div>
      
      <div>
      <p className={styles.paragraphs}>In this quickstart, you connect to data using Silzila website, which is the first step in building data models and creating reports.</p>
      <span className={styles.image}>
        <Image src={Charts} alt='Final Look of Your Creation'
         className={styles.img}/>
      </span>
      </div>
      
      <div className={styles.margin}>
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
       <p className={styles.paragraph}>After successful completion of sign up, you can login the website using mail id and password.</p>
       <span className={styles.image}>
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
       </div>
       <span className={styles.paragraph}>
       <p>Launch Screen contain Place for DB Connections, Flat Files,
        Datasets and Playbooks. So, you can easily connect different kinds 
        of data using 'DB Connections' and 'Flat Files' in one page and
        next by the using the options <Link href="/" className={styles.link}> datasets </Link> and 
        <Link href="/" className={styles.link}> playbooks </Link> you can create reports using charts.
       </p>
       </span>
       
      <div>
       <h3 className={styles.head}>DB Connections</h3>
        <p className={styles.paragraph}>
          By hovering on '+' symbol in DB Connections, 
        you will get the following screen,
        </p>
        <p className={styles.paragraph}>
          Then, by clicking '+' symbol you can connect
           your database with silzila.
        </p>
        <span className={styles.image}>
        <Image src={Database} alt='Start DB Connections' 
        className={styles.img}/>
        </span>
      </div>

      <div className={styles.margin}>
       <h3>Flat Files</h3>
        <p className={styles.paragraph}>By hovering on '+' symbol in Flat Files, 
        you will get the following screen,</p>
        <p className={styles.paragraph}>Then, by clicking '+' symbol you can connect your flat files(with .csv extension) with silzila.</p>
        <span className={styles.image}>
        <Image src={FlatFiles} alt='Start Flat Files'
        className={styles.img}/>
        </span>
      </div>
      
      <div className={styles.margin}>
      <div className={styles.nextSteps}>  
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
       
</div>
  )
}

export default page
