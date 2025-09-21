import { useEffect, useState } from 'react';
import SurajResume from '../assets/images/SurajResume.jpg';
import SurajMS from '../assets/SurajMS.pdf';

const PdfViewer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Simple check for mobile based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // you can adjust breakpoint
    };

    handleResize(); // check on mount
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px'
      }}
    >
      {/* Download button */}
      <a
        href={SurajMS}
        download="SurajResume.pdf"
        style={{
          padding: '10px 20px',
          border: '1px solid #fff',
          background: 'none',
          color: 'white',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px',
          textDecoration: 'none',
          textAlign: 'center'
        }}
      >
        Download PDF Resume
      </a>

      {/* Show PDF in iframe on desktop, image on mobile */}
      {isMobile ? (
        <img
          src={SurajMS}
          alt="Suraj's Resume"
          width="80%"
          style={{ marginTop: '20px', border: '1px solid #ccc' }}
        />
      ) : (
        <iframe
          src={SurajMS}
          title="Suraj's Resume"
          width="80%"
          height="800px"
          style={{ border: '1px solid #ccc' }}
        />
      )}
    </div>
  );
};

export default PdfViewer;
