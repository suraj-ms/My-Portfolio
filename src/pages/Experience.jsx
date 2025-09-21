import React from 'react'
import ReusableDef from '../components/ReusableComponents/ReusableDef';
import experience from '../assets/images/experience.png';
import Accordion from './AccordionItem';
import tcs from '../assets/images/tcs.png'
import sixd from '../assets/images/6d.png'
import ShivajiCreation from '../assets/images/ShivajiCreation.png'
import acm from '../assets/images/acm.png'

const Experience = () => {

  const items = [
    {
      title: 'Experience',
      content: [
        {
          img: tcs,
          title: 'System Engineer',
          company: 'Tata Consultancy Services',
          def: 'Full Stack Developer',
          link: 'https://www.tcs.com/',
        },
        {
          img: sixd,
          title: 'Senior Software Engineer',
          company: '6D Technologies Private Limited',
          def: 'Full Stack Developer',
          link: 'https://www.6dtechnologies.com/',
        }
      ],
    },

    {
      title: 'Freelance',
      content: [
        {
          img: ShivajiCreation,
          title: 'Shivaji Creation',
          company: 'www.shivajicreations.shop/',
          def: 'A Freelace full stack applcation',
          link: 'https://www.shivajicreations.shop',
        }
      ],
    },
    // {
    //   title: 'Internship',
    //   content: 'Updating Soon',
    // },
    {
      title: 'Volunteerships',
      content: [
        {
          img: acm,
          title: 'Member and organizer of ACM',
          def: 'Organized and managed community outreach programs.',
        },
      ],
    },
  ];


  const socialLinks = [];
  return (
    <div>
      <ReusableDef
        title="EXPERIENCE"
        sub_title="Work, Freelance and Volunteership"
        description="A santa developer with a box full of qualities: Leadership, Innovation, Storytelling, Mentorship, Quick Adaptability, and a treasure trove of ideas ready to execute."
        imgSrc={experience}
        links={socialLinks}
        iconClass="iconClass"
      />

      <Accordion items={items} />
    </div>
  )
}

export default Experience