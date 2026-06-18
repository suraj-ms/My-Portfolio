import React from 'react'
import CIT from '../assets/images/CIT.png'
import Shubhodaya from '../assets/images/Shubhodaya.png'
import '../styles/EducationItem.css'

const EducationItem = () => {
  return (
    <div>
        <h1 className='edu_title'>Degrees Received</h1>
        <div className="degrees">
            <div className="clg_img degrees_item">
                <img src={CIT} alt="" />
            </div>
            <div className="clg_data degrees_item">
                <div className="clg_head">
                    <div className="edu_data">
                        <p>Channabasaveshwara Institiute Of Technology</p>
                        <p>Information Science and Engineering</p>
                    </div>
                    <div className="edu_year">2018-2022</div>
                </div>
                <ul className="clg_body">
                <li><ion-icon name="flash-outline"></ion-icon> <p>I have studied software engineering subjects like DS, Algorithms, DBMS, OS, AI etc.</p></li>
                <li><ion-icon name="flash-outline"></ion-icon> <p>Apart from this, I have done courses on Cloud Computing and Full Stack Development.</p></li>
                {/* <li><ion-icon name="flash-outline"></ion-icon> <p>Member and organizer of ACM</p></li> */}
                </ul>
            </div>
        </div>
        <div className="degrees">
            <div className="clg_img degrees_item">
                <img src={Shubhodaya} alt="" />
            </div>
            <div className="clg_data degrees_item">
                <div className="clg_head">
                    <div className="edu_data">
                        <p>Shubhodaya Group Of Institution</p>
                        <p>Intermediate in PCMB stream</p>
                    </div>
                    <div className="edu_year">2016-2018</div>
                </div>
                <ul className="clg_body">
                <li><ion-icon name="flash-outline"></ion-icon> <p>I have studied basic concepts in Physics, Chemistry, Mathematics and Biology(PCMB).</p></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default EducationItem