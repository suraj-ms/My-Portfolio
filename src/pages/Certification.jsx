import React, { useState } from 'react';
import '../styles/Certification.css';
import { SiUdemy } from "react-icons/si";
import { FaReact, FaLinkedin } from "react-icons/fa";
import sof from '../assets/images/sof.png';
import { Link } from 'react-router-dom';
import MERN from '../assets/images/MERN.jpg';
import python from '../assets/images/python.jpg';
import sofimg from '../assets/images/sof.jpg';
import ProBackend from '../assets/images/ProBackend.jpg';
import oops from '../assets/images/oops.jpg';
import aws from '../assets/images/aws.jpg';

// Sample certifications data
const certifications = [
    {
        name: "The Complete 2024 Web Development Bootcamp",
        provider: "Udemy",
        icon: <SiUdemy className='certificate_icon' />,
        image: MERN,
    },
    {
        name: "The Complete Python Bootcamp From Zero to Hero in Python",
        provider: "Udemy",
        icon: <SiUdemy className='certificate_icon' />,
        image: python,
    },
    {
        name: "Pro Javascript backend developer",
        provider: "Udemy",
        icon: <SiUdemy className='certificate_icon' />,
        image: ProBackend,
    },
    {
        name: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 2025",
        provider: "Udemy",
        icon: <SiUdemy className='certificate_icon' />,
        image: aws,
    },
    {
        name: "SOF Cyber Olympiad [Gold Medal]",
        provider: "SOF Cyber Olympiad",
        icon: sof,
        image: sofimg,
    },
    {
        name: "Object Oriented Programming",
        provider: "LinkedIn Learning",
        icon: <FaLinkedin className='certificate_icon' />,
        image: oops,
    },
];

const Certification = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // Open the modal with the selected certificate's image
    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    // Close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginBottom: '60px' }}>Certifications</h1>

            {/* Render certificates */}
            {certifications.map((cert, index) => (
                <div 
                    key={index} 
                    className="certificate" 
                    onClick={() => openModal(cert.image)} // Open modal on click
                    aria-label={`Click to view image of ${cert.name}`}
                >
                    <div className="certificate_img" aria-label={`Icon for ${cert.name}`}>
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
                </div>
            ))}

            {/* Modal to display image */}
            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Certificate" className="modal_image" />
                        <button className="close_modal" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Certification;
