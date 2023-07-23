import React from 'react'
import styles from './page.module.css'

const page = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Build a Basic View to Explore Your Data</h2>
       <h3 className={styles.head}>How to Install</h3>
       <div>
        <p className={styles.paragraph}>Silzila requires Java 17 for Dashboard Developers .</p>
        <p className={styles.paragraph}>Coming soon... for a single executable Java .jar file for Code Contributiors Clone the repo and open in VS Code Editor. Backend - Install Java/Springboot/Maven Dependencies and run like a typical java project. Backend starts at port 8080. Frontend - Go to Frontend folder and npm install and npm start. Frontend starts at port 3000 and Silzila app opens in Browser .</p>
      </div>
    </div>
  )
}

export default page
