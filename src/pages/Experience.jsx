import React from 'react'
import ReusableDef from '../components/ReusableComponents/ReusableDef';
import experience from '../assets/images/experience.png';
import Accordion from './AccordionItem';
import  tcs  from '../assets/images/tcs.png'
import  acm  from '../assets/images/acm.png'

const Experience = () => {

  const items = [
    {
      title: 'Experience',
      content: [
        {
          img: tcs,
          title: 'System Engineer',
          company: 'Tata Consultancy Services',
          def: 'Developed scalable web applications and microservices.',
        }
      ],
    },
    {
      title: 'Internship',
      content: 'Content for item 2',
    },
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
        sub_title="Work, Internship and Volunteership"
        description="Aspiring to explore myself in the world of programming by solving challenging problems of the world and exposing myself to different environments. I always work to enhance my skills alongside being resourceful to the organisation I work with."
        imgSrc={experience}
        links={socialLinks}
        iconClass="iconClass"
      />

<Accordion items={items} />
    </div>
  )
}

export default Experience