import Image from 'next/image';
import React from 'react';
import styles from "./page.module.css"
import SelectDb from "../../public/selectDB.png";
import Database from "../../public/database.png";
import FillAll from "../../public/fillOutContent.png";
import TestConformation from "../../public/testSuccess.png";
import DbDisplay from "../../public/Dbdisplay.png";
import RegisterSuccess from "../../public/registerSuccess.png";
import DbEditDelete from "../../public/DbEditDelete.png";
import DbEdit from "../../public/DBEditPage.png";
import DeleteConformationMessage from "../../public/Deletemsg.png";
import AssureOfDelete from "../../public/DbDeleteConform.png";
import Databases from "../../public/DbSelect.png";

const DBConnect = () => {
  return (
    <div className={styles.container}>
      <div>
      <h2 className={styles.heading}>Connect to Data via DB Connections</h2>
      <h3 className={styles.head}>In this article</h3>
       <ol>
          <li><p className={styles.paragraph}>Create DB Connection</p></li>
          <li><p className={styles.paragraph}>Database Testing</p></li>
          <li><p className={styles.paragraph}>Database Register</p></li>
          <li><p className={styles.paragraph}>List of Created DATABASE</p></li>
          <li><p className={styles.paragraph}>EDIT and DELETE existing Database</p>
            <ul className={styles.unOrderList}>
              <li>EDIT</li>
              <li>DELETE</li>
            </ul>
          </li>
        </ol>
      </div>  
            
      <p className={styles.paragraph}>To connect to database from the Home screen, click '+' button in DB Connections.</p>
      <span className={styles.image}> 
        <Image src={SelectDb} alt='+ Button in DB Connections' className={styles.img}/>
      </span>

      <div className={styles.margin}>
      <h3 className={styles.head}>Create DB Connection</h3>
      <p className={styles.paragraph}>Then, the Create DB Connection window appears. Here, you can choose from different databases to which Silzila can connect.</p>
      <p className={styles.paragraph}>With Silzila, you can connect to different types of databases. These sources include,</p>
      <ol>
        <li><p className={styles.paragraph}>PostgreSql</p></li>
        <li><p className={styles.paragraph}>MySql</p></li>
        <li><p className={styles.paragraph}>Ms SQL Server</p></li>
        <li><p className={styles.paragraph}>Amazon Redshift</p></li>
      </ol>
       <span className={styles.image}> 
        <Image src={Databases} alt='Database Display'
         className={styles.img}/>
      </span>
      </div>

      <div className={styles.margin}>
      <p className={styles.paragraph}>After selecting the database fill the following details correctly on corresponding fields,</p>
      <ol>
        <li><p className={styles.paragraph}>Vendor - Here, Select the database that you consume.</p></li>
        <li><p className={styles.paragraph}>Server Url - Enter Server url.</p></li>
        <li><p className={styles.paragraph}>Port - Enter Port Number.</p></li>
        <li><p className={styles.paragraph}>Database - Enter the name of your Database.</p></li>
        <li><p className={styles.paragraph}>User Name - Enter your Database UserName.</p></li>
        <li><p className={styles.paragraph}>Password - Enter your Database Password.</p></li>
        <li><p className={styles.paragraph}>Connection Name - Give your database a name to work with Silzila and use that database in Silzila with that name.</p></li>
      </ol>
      <span className={styles.image}> 
        <Image src={Database} alt='Fields Details in DB Connections' className={styles.img}/>
      </span>
      </div>

      <div className={styles.margin}>
      <p className={styles.paragraph}>All fields must be filled, if you leave any field empty, 
        then Silzila will shows the following window,</p>
      <span className={styles.image}> 
        <Image src={FillAll} alt='Fill out all the Fields' className={styles.img}/>
      </span>
      </div>

      <div className={styles.margin}>
      <h3 className={styles.head}>Database Testing</h3>
      <p className={styles.paragraph}>Fill all the fields and then click the test button.</p>
      <p className={styles.paragraph}>After the test process is completed, you will get following popup window else check and correct the entered information.</p>
      <span className={styles.image}> 
        <Image src={TestConformation} alt='Test Connection Successful' className={styles.img}/>
      </span>
      </div>

      <div className={styles.margin}>
      <h3 className={styles.head}>Database Register</h3>
      <p className={styles.paragraph}>After the test process got completed, click the register button and then your database will connected to Silzila.</p>
      <p className={styles.paragraph}>For conformation, you will get a data connection successful conformation popup window.</p>
      <span className={styles.image}> 
        <Image src={RegisterSuccess} alt='Register Successful' className={styles.img}/>
      </span>
      </div>

      <div className={styles.margin}>
      <h3 className={styles.head}>List of Created DATABASE</h3>
      <p className={styles.paragraph}>After completing the registration process all the database will be displayed under DATABASE CONNECTIONS on home screen.</p>
      <p className={styles.paragraph}>With the name what you gave as a connection name.</p>
      <span className={styles.image}> 
        <Image src={DbDisplay} alt='Database List' className={styles.img}/>
      </span>
      </div>

      <div className={styles.margin}>
      <h3 className={styles.head}>EDIT and DELETE existing Database</h3>
      <p className={styles.paragraph}>After complition of database creation, if you want to do any editing or deletion in existing databases.</p>
      <p className={styles.paragraph}>Then, click this icon 'EYE' icon on corresponding Database.</p>
      <span className={styles.image}> 
        <Image src={DbEditDelete} alt='Eye Icon on DB' className={styles.img}/>
      </span>
      </div>

      <div className={styles.margin}>
      <h3 className={styles.head}>EDIT</h3>
      <p className={styles.paragraph}>After that, the following screen will appear for editing, here you can change what you want to change in existing database.</p>
      <p className={styles.paragraph}>For that click the EDIT Button.</p>
      <p className={styles.paragraph}>After editing again make Test and Register as same as we done before.</p>
      <p className={styles.paragraph}>Now all the changes will be applied in the existing database.</p>
      <span className={styles.image}> 
        <Image src={DbEdit} alt='Edit Screen' className={styles.img}/>
      </span>
      </div>

      <div className={styles.margin}>
      <h3 className={styles.head}>DELETE</h3>
      <p className={styles.paragraph}>For delete the existing database, click on DELETE Button instead of EDIT Button.</p>
      <p className={styles.paragraph}>Then, the confirmation window will appear for deletion,</p>
      <span className={styles.image}> 
        <Image src={AssureOfDelete} alt='Delete Conformation' className={styles.img}/>
      </span>
      <div className={styles.margin}>
      <p className={styles.paragraph}>Before click DELETE Button, assure on deletion then click DELETE Button, else click the Cancel.</p>
      <p className={styles.paragraph}>If you click DELETE then you will get the confirmation window and then corresponding database deleted permanantly from Silzila.</p>
      </div>
      <span className={styles.image}> 
        <Image src={DeleteConformationMessage} alt='Delete DB Successful' className={styles.img}/>
      </span>
      </div>
     </div>
  )
}

export default DBConnect
