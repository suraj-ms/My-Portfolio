import React from 'react'
import vvce from '../assets/images/vvce.png'
import sadvidya from '../assets/images/sadvidya.png'
import '../styles/EducationItem.css'

const EducationItem = () => {
  return (
    <div>
        <h1 className='edu_title'>Degrees Received</h1>
        <div className="degrees">
            <div className="clg_img degrees_item">
                <img src={vvce} alt="" />
            </div>
            <div className="clg_data degrees_item">
                <div className="clg_head">
                    <div className="edu_data">
                        <p>Vidyavardhaka College Of Engineering</p>
                        <p>Information Science and Engineering</p>
                    </div>
                    <div className="edu_year">2017-2021</div>
                </div>
                <ul className="clg_body">
                <li><ion-icon name="flash-outline"></ion-icon> <p>I have studied software engineering subjects like DS, Algorithms, DBMS, OS, AI etc.</p></li>
                <li><ion-icon name="flash-outline"></ion-icon> <p>Apart from this, I have done courses on Cloud Computing and Full Stack Development.</p></li>
                <li><ion-icon name="flash-outline"></ion-icon> <p>Member and organizer of ACM</p></li>
                </ul>
            </div>
        </div>
        <div className="degrees">
            <div className="clg_img degrees_item">
                <img src={sadvidya} alt="" />
            </div>
            <div className="clg_data degrees_item">
                <div className="clg_head">
                    <div className="edu_data">
                        <p>Sadvidya Educational Institution</p>
                        <p>Intermediate in PCMC stream</p>
                    </div>
                    <div className="edu_year">2015-2017</div>
                </div>
                <ul className="clg_body">
                <li><ion-icon name="flash-outline"></ion-icon> <p>I have studied basic concepts in Physics, Chemistry, Mathematics and Computer Science(PCMC).</p></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default EducationItem