"use client"

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Build a Basic View to Explore Your Data</h2>
      <p>Applies to: Tableau Desktop</p>
      <p>This topic uses the Sample - Superstore data source to walk through how to create basic views and explore your data. It shows how your view of data in Tableau evolves through your process of exploration.</p>
      <p>If you're using Tableau Cloud and Tableau Server to explore data and edit views, see Use Tableau on the Web.</p>
    </div>
  )
}
