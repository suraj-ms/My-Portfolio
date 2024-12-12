import React from 'react';
import '../styles/Skills.css';
import contact from '../assets/images/contact.png'
import blog from '../assets/images/blog.png'
import address from '../assets/images/address.png'
import ItemListLinks from '../components/ReusableComponents/ItemListLinks';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TbHandClick } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";

const ContactItem = () => {
    const socialLinks = [
        { url: 'https://www.linkedin.com/in/suraj-m-s-757540151/', icon: FaLinkedin },
        { url: 'https://github.com/suraj-ms', icon: FaGithub },
        { url: 'https://x.com/SurajMavatkar', icon: FaSquareXTwitter },
    ];

    const iconClass = "social-icon"; // Define a default icon class or remove if unused.

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'src/assets/SurajResume.pdf';
        link.download = 'SurajResume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <div className="skill">
                <div className="skill_item">
                    <img src={contact} alt="Programming Icon" width="80%" height="80%" />
                </div>
                <div className="skill_item skill_data">
                    <h1 className="skill_item_head">Contact Me</h1>
                    <p style={{ fontSize: '1.3rem', margin: '0px 0px 30px 20px' }} >Feel free to reach out for any inquiries. I look forward to connecting with you and assisting in any way I can.</p>
                    {socialLinks.length > 0 && <ItemListLinks links={socialLinks} iconClass={iconClass} />}
                    <Link style={{padding:'10px', cursor: 'pointer', background:'var(--text-color)', color:'var(--background-color)', fontWeight:'500', borderRadius:'5px'}} onClick={handleDownload}>
                        My Resume
                    </Link>
                </div>
            </div>

            <div className="skill">
                <div className="skill_item skill_data i2d">
                    <h1 className="skill_item_head">Blogs</h1>
                    <p style={{ fontSize: '1.3rem', margin: '0px 0px 30px 20px' }}>Find my blogs by clicking on the link below</p>
                    <Link className='more_items' to='/' >Visit My Blogsite</Link>
                </div>

                <div className="skill_item i2i">
                    <img src={blog} alt="Programming Icon" width="80%" height="80%" />
                </div>
            </div>

            <div className="skill">
                <div className="skill_item">
                    <img src={address} alt="Programming Icon" width="80%" height="80%" />
                </div>

                <div className="skill_item skill_data">
                    <h1 className="skill_item_head">Address</h1>
                    <p style={{ fontSize: '1.3rem', margin: '0px 0px 30px 20px' }} >Ramakrishna Nagar, Mysore- 570022</p>
                    <h1 className="skill_item_head">Phone Number</h1>
                    <p style={{ fontSize: '1.3rem', margin: '0px 0px 30px 20px' }}><a href='tel:7259116344'>+91 7259116344</a></p> 
                    <TbHandClick style={{fontSize:'1.3rem', transform:'translate(100px, 9px)', rotate:'-30deg'}} />
                    {/* <Link className='more_items' to='/' >Visit On Google Maps</Link> */}
                </div>
            </div>
        </div>
    );
};

export default ContactItem;
