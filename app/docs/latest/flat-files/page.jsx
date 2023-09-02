import Image from 'next/image';
import React from 'react';
import styles from "./page.module.css";
import Link from 'next/link';
import SelectFF from "../../../../public/selectFf.png";
import UploadWindow from "../../../../public/chooseCSV.png";
import SelectCsvFile from "../../../../public/csvFileFolder.png";
import UploadUpdate from "../../../../public/uploadUpdate.png";
import PreviewPage from "../../../../public/previewPage.png";
import PreviewFlatFiles from "../../../../public/previewFF.png";
import Save from "../../../../public/fileSave.png";
import SaveNotify from "../../../../public/fileSaveSuccess.png";
import SaveOptions from "../../../../public/saveOption.png";
import NotUploadFile from "../../../../public/fileNotUpload.png";
import PreviewEditing from "../../../../public/editPreviewFf.png";
import FlatFileDisplay from "../../../../public/savedFlatFile.png";
import TrashIcon from "../../../../public/hoverTrashCan.png";
import DeleteConformation from "../../../../public/deleteFfConform.png";
import DeleteFF from "../../../../public/deletedFF.png";
import DataTypeCorrection from "../../../../public/datatypeCorrectionConformation.png";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
    
      <h2 className={styles.heading}>Connect to Data via Flat Files</h2>
        <div>
        <p className={styles.paragraph}>In Silzila you can upload your flat file in .CSV extension, 
          if your flat file is on any other extension, first convert it into .CSV extension and then do upload.</p>
        <p className={styles.paragraph}>To connect to flat files from the Home screen, click '+' button in Flat Files.</p>
        <span className={styles.image} id='upload'> 
        <Image src={SelectFF} alt='+ Button in FlatFiles' className={styles.img}/>
        </span>
        </div>
        
        <div className={styles.margin}>
        <h3 className={styles.head}>Upload Flat File</h3>
        <p className={styles.paragraph}>After clicking the + button, you will get this upload window here you can upload your Flat Files.</p>
        <p className={styles.paragraph}>For that, see the procedure below,</p>
        <p className={styles.paragraph}>First thing you need to do to upload the file is, Click the 'CHOOSE A FILE' button.</p>
        <span className={styles.image}> 
        <Image src={UploadWindow} alt='upload window' className={styles.img}/>
        </span>
        </div>

        <div className={styles.margin}>
        <p className={styles.paragraph}>Then, Silzila prompts you to provide the location of the .CSV file to which to connect. 
        The downloaded file is called 'Point of Sales'. Select that file, and then select Open.</p>
        <span className={styles.image}> 
        <Image src={SelectCsvFile} alt='csvFileSelectionWindow' className={styles.img}/>
        </span>
        </div>

        <div className={styles.margin}>
        <p className={styles.paragraph}>After you select the file, you will see that file in the upload window, 
          by that you can confirm that you have selected the file.</p>
        <p className={styles.paragraph}>Now, your file has arrived and it's ready to upload, so click the upload button.</p>
        <p className={styles.paragraph}>Then, the uploaded file will be taken to the preview changes window.</p>
        <span className={styles.image}> 
        <Image src={UploadUpdate} alt='csvFileSelectionWindow' className={styles.img}/>
        </span>
        </div>
        
        <div className={styles.margin}>
        <p className={styles.paragraph}>If you click upload button without choose any file, then you will get 'please select a file to upload' notification.</p>
        <p className={styles.paragraph}>The following window is the notification window,</p>
        <span className={styles.image} id='preview-changes'> 
        <Image src={NotUploadFile} alt='csvFileSelectionWindow' className={styles.img}/>
        </span>
        </div>
        
        <div className={styles.margin}>
        <h3 className={styles.head}>Preview Changes</h3>
        <p className={styles.paragraph}>The following window is the Preview Window,</p>
        <p className={styles.paragraph}>Here, If you want to change something in your file, you can change it before upload. For example,</p>
        <p className={styles.paragraph}>Here, you can Edit a Title, Edit a table name, Change a DataType and also 
          you can Change a Date Format, Timestamp Format and Timestamp NTZ Format.</p>
        <span className={styles.image} id='edit'> 
        <Image src={PreviewPage} alt='csvFileSelectionWindow' className={styles.img}/>
        </span>
        </div>
        
        <div className={styles.margin}>
        <h3 className={styles.head}>Editing the Data</h3>
        <p className={styles.paragraph}>Edit a Title - You can edit a title by Double click on the title to open the title editing option.</p>
        <p className={styles.paragraph}>Edit a Table Name - You can edit a table name by Double click on the corresponding table name to open the table name editing option.</p>
        <p className={styles.paragraph}>Change a Datatype - If you want to change a data type of any table then click on drop down on corresponding table.</p>
        <p className={styles.paragraph}>Date Format - You can Order Date by 	DD/MM/YY, YY/MM/DD and MM/DD/YY according for your wish.</p>
        <p className={styles.paragraph}>Timestamp Format - You can change a Timestamp Format according for wish.</p>
        <p className={styles.paragraph}>Timestamp NTZ Format - You can change a Timestamp NTZ Format according for wish.</p>
        <span className={styles.image} id='pc'> 
        <Image src={PreviewEditing} alt='csvFileSelectionWindow' className={styles.img}/>
        </span>
        </div>
        
        <div className={styles.margin}>
        <h3 className={styles.head}>Preview Changes Options</h3>
        <p className={styles.paragraph}>After you click on the PREVIEW CHANGES BUTTON, you will get the following window,</p>
        <p className={styles.paragraph}>Here it shows Three Options,</p>
        <p className={styles.paragraph}>1. Preview Changes - After completion of all your editing and you thing your data is ready for upload, then click 'PREVIEW CHANGES' option on Preview Changes drop down.</p> 
        <p className={styles.paragraph}>2. Reupload - In preview changes window you thing you want to upload another file instead of current uploaded file, then
           reupload the .CSV FlatFile by clicking 'REUPLOAD' option on preview changes drop down. It will redirect you to 'Upload window,
           then you do the same process as we done before for uploading a file.</p>
        <p className={styles.paragraph}>3. Cancel - In preview changes window you thing you don't want to upload any FlatFiles,
           then click 'CANCLE' option on preview changes drop down, then the process get stoped. It will redirect you to home page.</p>
        <span className={styles.image} id='save'> 
        <Image src={PreviewFlatFiles} alt='csvFileSelectionWindow' className={styles.img}/>
        </span> 
        </div> 

        <div className={styles.margin}>
        <h3 className={styles.head}>Save</h3>
        <p className={styles.paragraph}>After you click on the PREVIEW CHANGES button, you will get the following window,</p>
        <p className={styles.paragraph}>In save window, all previewed data will be displayed.</p>
        <span className={styles.image} id='sv'> 
        <Image src={Save} alt='csvFileSelectionWindow' className={styles.img}/>
        </span> 
        </div>
        
        <div className={styles.margin}>
        <h3 className={styles.head}>Save Options</h3>
        <p className={styles.paragraph}>Process on this window is the final process to upload your flat file data to Silzila, here it shows Four Options,</p>
        <p className={styles.paragraph}>1. Save - You thing you want to upload the flatfile, then click 'SAVE' option on save drop down.</p>
        <p className={styles.paragraph}>2. Reset Changes - If you thing, you want to change something in data on save window, then click 'RESET CHANGES' option on save drop down.</p>
        <p className={styles.paragraph}>3. Reupload - In save window you thing you want to upload another file instead of current uploaded file, then 
           reupload the .CSV FlatFile by clicking 'REUPLOAD' option on save drop down. It will redirect you to 'Upload window',
           then you do the same process as we done before for uploading a file.</p>
        <p className={styles.paragraph}>4.Cancel - In save window you thing you don't want to upload any FlatFiles,
          then click 'CANCLE' option on save drop down, then the process get stoped. It will redirect you to home page.</p>   
        <span className={styles.image}> 
        <Image src={SaveOptions} alt='csvFileSelectionWindow' className={styles.img}/>
        </span>
        </div>

        <div className={styles.margin}>
        <p className={styles.paragraph}>After your flat file is saved, you will get a notification that the 'flat file saved successfully'.</p>
        <p className={styles.paragraph}>The following window is the notification window,</p>
        <span className={styles.image} id='sve'> 
        <Image src={SaveNotify} alt='csvFileSelectionWindow' className={styles.img}/>
        </span>
        </div>
        
        <div className={styles.margin}>
        <h3 className={styles.head}>Solve Datatype Error</h3>
        <p className={styles.paragraph}>In the preview window after you clicking the preview changes button, previewed data will be displayed on save window,
          here you thing you want to upload the flatfile, then click 'SAVE' option on save drop down, 
          on that time if you get any data type error, then you check the data type of all the tables, if there is any table is mismatch with datatype.</p>
        <p className={styles.paragraph}>In the below example, order timestamp table's data is not in timestamp format. So, here it shows an datatype error with timestamp table,
          for solve the problem make it's datatype as text.</p>
        <p className={styles.paragraph}>Then the file will be save properly.</p>
        <p className={styles.paragraph}>This is how you solve the data type error's in Silzila.</p>  
        <span className={styles.image} id='created-files'> 
        <Image src={DataTypeCorrection} alt='csvFileSelectionWindow' className={styles.img}/>
        </span>
        </div>

        <div className={styles.margin}>
        <h3 className={styles.head}>List of Flat Files</h3>
        <p className={styles.paragraph}>After clicking the save button your file will be successfully saved to Silzila and it will be displayed on your home page
          Flat Files option.</p>
        <span className={styles.image} id='delete'> 
         <Image src={FlatFileDisplay} alt='Flat File display in home page' className={styles.img}/>
        </span>
        </div>
       
       <div className={styles.margin}>
       <h3 className={styles.head}>Delete Flat Files</h3>
       <p className={styles.paragraph}>For delete the existing flat files, hover on corresponding flat file then you get trash can of that file,
        then click 'TRASH CAN' icon on corresponding flatfile.</p>
       <span className={styles.image}> 
         <Image src={TrashIcon} alt='Flat File display in home page' className={styles.img}/>
      </span>
      </div>

      <div className={styles.margin}>
       <p className={styles.paragraph}>Then, the confirmation window will appear for deletion,</p>
       <p className={styles.paragraph}>Before click Ok Button, assure on deletion then click Ok Button, else click the Cancel.</p>
       <span className={styles.image}> 
         <Image src={DeleteConformation} alt='Flat File display in home page' className={styles.img}/>
      </span>
      </div>

      <div className={styles.margin}>
      <p className={styles.paragraph}>If you click Ok then you will get the confirmation window and then corresponding flatfile deleted permanantly from Silzila.</p>
      <p className={styles.paragraph}>The following window is conformation window,</p>
      <span className={styles.image}> 
         <Image src={DeleteFF} alt='Flat File display in home page' className={styles.img}/>
      </span>
      </div>
      </div>

      <div className={styles.sub}>
      <ul className={styles.unOrderedList}>
        <h3 className={styles.content}>On this page</h3>
           <li><Link href='#upload' className={styles.rightlink}>
            Upload File
           </Link></li>
           
           <li><Link href='#preview-changes' className={styles.rightlink}>Preview Changes</Link>
            <ul className={styles.unOrderedList}>
              <li><Link href='#edit' className={styles.rightlink}>
              Edit Data
                </Link></li>
              <li><Link href='#pc'className={styles.rightlink} >
              PC Options
                </Link></li>
           </ul>
          </li>

          <li><Link href='#save' className={styles.rightlink}>Save</Link>
            <ul className={styles.unOrderedList}>
              <li><Link href='#sv' className={styles.rightlink}>
              Save Options 
                </Link></li>
              <li><Link href='#sve'className={styles.rightlink} >
              Solve Errors
                </Link></li>
           </ul>
          </li>

          <li><Link href='#created-files' className={styles.rightlink}>
          Created Files
            </Link></li>

          <li><Link href='#delete' className={styles.rightlink}>
          Delete Files
          </Link></li>
        </ul>
   </div>
    </div>
  )
}

export default page
