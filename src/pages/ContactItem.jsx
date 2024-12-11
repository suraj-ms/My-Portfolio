import React from 'react';
import '../styles/Skills.css';
import contact from '../assets/images/contact.png'
import blog from '../assets/images/blog.png'
import address from '../assets/images/address.png'
import web from '../assets/images/web.png';
import cloud from '../assets/images/cloud.png';
import graphics from '../assets/images/graphics.png';
import ItemListLinks from '../components/ReusableComponents/ItemListLinks';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactItem = () => {
    const socialLinks = [
        { url: 'https://www.linkedin.com', icon: FaLinkedin },
        { url: 'https://github.com', icon: FaGithub },
        { url: 'https://twitter.com', icon: FaTwitter },
    ];

    const iconClass = "social-icon"; // Define a default icon class or remove if unused.

    return (
        <div>
            <div className="skill">
                <div className="skill_item">
                    <img src={contact} alt="Programming Icon" width="80%" height="80%" />
                </div>
                <div className="skill_item skill_data">
                    <h1 className="skill_item_head">Contact Me</h1>
                    <p style={{fontSize: '1.3rem', margin: '0px 0px 30px 20px'}} >I am available on almost every social media. You can message me, I will reply within 24 hours.</p>
                    {socialLinks.length > 0 && <ItemListLinks links={socialLinks} iconClass={iconClass} />}
                    <Link className='more_items' to='/' >See My Resume</Link>
                </div>
            </div>

            <div className="skill">
                <div className="skill_item skill_data i2d">
                    <h1 className="skill_item_head">Blogs</h1>
                   <p style={{fontSize: '1.3rem', margin: '0px 0px 30px 20px'}}>For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.</p>
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
                    <p style={{fontSize: '1.3rem', margin: '0px 0px 30px 20px'}} >16-14-16, Sivasankara street,Road No 7, Ramalingeswara Nagar, Vijayawada, Andhra Pradesh - 520013</p>
                    <h1 className="skill_item_head">Phone Number</h1>
                    <p style={{fontSize: '1.3rem', margin: '0px 0px 30px 20px'}}><a href='tel:7259116344'>+91 7259116344</a></p>
                    <Link className='more_items' to='/' >Visit On Google Maps</Link>
                </div>
            </div>
        </div>
    );
};

export default ContactItem;
