import Image from 'next/image';
import React from 'react';
import styles from "./page.module.css";
import SelectFF from "../../public/selectFf.png";
import UploadWindow from "../../public/chooseCSV.png";

const page = () => {
  return (
    <div>
      <div>
      <h2>Connect to Data via Flat Files</h2>
      <h3>In this article</h3>
      <ol>
          <li><p>Create DB Connection</p></li>
          <li><p>Database Testing</p></li>
          <li><p>Database Register</p></li>
          <li><p>List of Created DATABASE</p></li>
          <li><p>EDIT and DELETE existing Database</p></li>
        </ol>
        </div>

        <p>In Silzila you can upload your flat file in .CSV extension, 
          if your flat file is on any other extension, first convert it into .CSV extension and then upload .</p>
        <p>To connect to database, from the Home screen click '+' button in Flat Files.</p>
        <span className={styles.image}> 
        <Image src={SelectFF} alt='+ Button in FlatFiles' className={styles.img}/>
        </span>

        <p>After clicking the + button, you will get this upload window here you can upload your Flat Files.</p>
        <p>For that, see the procedure below</p>
        <span className={styles.image}> 
        <Image src={UploadWindow} alt='+ Button in Database' className={styles.img}/>
        </span>

        <p>Silzila prompts you to provide the location of the .CSV to which to connect.</p>
    </div>
  )
}

export default page
