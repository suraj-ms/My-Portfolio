import React from 'react'
import '../styles/PublicationItem.css'
import { Link } from 'react-router-dom'

const PublicationItem = () => {
  return (
    <>
      <Link to='/' className='publication'>
        <h1 className="publication_title">Hello</h1>
        <p className="publication_Desc">Hello there</p>
        <p className="publication_Date">created on : 10/12/2021</p>

      </Link>
      <Link to='/' className='publication'>
        <h1 className="publication_title">Hello</h1>
        <p className="publication_Desc">Hello there</p>
        <p className="publication_Date">created on : 10/12/2021</p>

      </Link>
      <Link to='/' className='publication'>
        <h1 className="publication_title">Hello</h1>
        <p className="publication_Desc">Hello there</p>
        <p className="publication_Date">created on : 10/12/2021</p>

      </Link>
      <Link to='/' className='publication'>
        <h1 className="publication_title">Hello</h1>
        <p className="publication_Desc">Hello there</p>
        <p className="publication_Date">created on : 10/12/2021</p>

      </Link>

    </>
  )
}

export default PublicationItem