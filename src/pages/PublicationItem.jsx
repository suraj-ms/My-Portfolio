import React from 'react'
import '../styles/PublicationItem.css'
import { Link } from 'react-router-dom'

const PublicationItem = () => {
  return (
    <>

      <Link to='https://www.ijraset.com/fileserve.php?FID=36378' className='publication'>
        <h1 className="publication_title">Survey on Cardiomegaly Detection with Enhanced
        X-Ray Using Deep Learning</h1>
        <p className="publication_Desc">A deep Learning research and Development project</p>
        <p className="publication_Date">created on : July 2021</p>

      </Link>


    </>
  )
}

export default PublicationItem