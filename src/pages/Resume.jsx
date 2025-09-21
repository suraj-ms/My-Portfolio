import SurajResume from '../assets/images/SurajResume.jpg';
import SurajMSResume from '../assets/SurajMSResume.pdf';
import SurajMS from '../assets/SurajMS.pdf';

const PdfViewer = () => {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginTop:'20px'}}>
            
            {/* Download button for PDF */}
            <a 
                href={SurajMS} 
                download="SurajResume.pdf"  // corrected file extension
                style={{
                    padding: '10px 20px',
                    border: '1px solid #fff',
                    background:"none",
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

            {/* Display PDF in browser */}
            <iframe
                src={SurajMS}
                title="Suraj's Resume"
                width="80%"
                height="800px"
                style={{border: '1px solid #ccc'}}
            ></iframe>

            {/* Optional: display image version */}
            {/* <img src={SurajResume} width='80%' style={{marginTop: '20px'}} alt="Suraj's Resume" /> */}
        </div>
    );
};

export default PdfViewer;
