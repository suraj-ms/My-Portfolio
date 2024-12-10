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
                <li><ion-icon name="flash-outline"></ion-icon> <p>I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.</p></li>
                <li><ion-icon name="flash-outline"></ion-icon> <p>Apart from this, I have done courses on Cloud Computing and Full Stack Development.</p></li>
                <li><ion-icon name="flash-outline"></ion-icon> <p>I was selected for Merit cum Means Scholarship which is given to top 10% of students in college.</p></li>
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
                    <div className="edu_year">2017-2021</div>
                </div>
                <ul className="clg_body">
                <li><ion-icon name="flash-outline"></ion-icon> <p>I have studied basic concepts in Mathematics, Physics, Chemistry and Computer Science.</p></li>
                <li><ion-icon name="flash-outline"></ion-icon> <p>I Secured 9.73 CGPA and also got 95 percentile in JEE Mains and 7527th rank in AP Eamcet.</p></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default EducationItem