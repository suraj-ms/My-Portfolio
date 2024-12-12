import React from 'react';
import '../styles/Certification.css';
import { SiUdemy } from "react-icons/si";
import { FaReact, FaLinkedin } from "react-icons/fa";
import sof from '../assets/images/sof.png';
import { Link } from 'react-router-dom';

const certifications = [
    {
        name: "The Complete 2024 Web Development Bootcamp",
        provider: "Udemy",
        icon: <SiUdemy className='certificate_icon' />,
        link: "https://drive.google.com/file/d/1ExpsUxMfihUHPJEWu437QdYoF3-VyDXu/view?usp=drive_link"
    },
    {
        name: "The Complete Python Bootcamp From Zero to Hero in Python",
        provider: "Udemy",
        icon: <SiUdemy className='certificate_icon' />,
        link: "https://drive.google.com/file/d/1mGgNcz-97mKEoBU75mLupiz_HH5GHPPQ/view?usp=drive_link"
    },

    {
        name: "Pro Javascript backend developer",
        provider: "Udemy",
        icon: <SiUdemy className='certificate_icon' />,
        link: "https://drive.google.com/file/d/1Mpnui4RwpXp6uzNcar3t2GCrnmw4luRV/view?usp=drive_link"
    },
    {
        name: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 2025",
        provider: "Udemy",
        icon: <SiUdemy className='certificate_icon' />,
        link: "https://drive.google.com/file/d/1MvisjZ5aTAuIqbP3Rh3Xo80WMMHHL-Qp/view?usp=drive_link"
    },
    {
        name: "SOF Cyber Olympiad [Gold Medal]",
        provider: "SOF Cyber Olympiad",
        icon: sof,
        link: "https://drive.google.com/file/d/1MYM6f-vbQj2qg-O3a_6PpueLvU38OMBe/view?usp=drive_link"
    },
    {
        name: "Object Oriented Programming",
        provider: "LinkedIn Learning",
        icon: <FaLinkedin  className='certificate_icon' />,
        link: "https://drive.google.com/file/d/1dv4upj-hjXqjiaVMJGO_bM-xIz1Lc04r/view?usp=drive_link"
    },
];

const Certification = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', marginBottom: '60px' }}>Certifications</h1>
            {certifications.map((cert, index) => (
                <a 
                    href={cert.link} 
                    className="certificate" 
                    key={index} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <div className="certificate_img" aria-label={`Icon for ${cert.name}`}>
                        {/* Conditionally render React Icon or Image */}
                        {typeof cert.icon === 'string' ? (
                            <img src={cert.icon} alt={`${cert.name} logo`} className='certificate_img' />
                        ) : (
                            cert.icon
                        )}
                    </div>
                    <div className="certificate_data">
                        <div className="certificate_name">{cert.name}</div>
                        <div className="certificate_provider">- {cert.provider}</div>
                    </div>
                </a>
            ))}
        </div>
    );
};
export default Certification;