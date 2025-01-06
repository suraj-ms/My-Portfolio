import SurajResume from '../assets/images/SurajResume.jpg'
import SurajMSResume from '../assets/SurajMSResume.pdf'

const PdfViewer = () => {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <a 
                href={SurajMSResume} 
                download="SurajResume.jpg"  // specify the file name for download
                style={{
                    padding: '10px 20px',
                    border: '1px solid #fff',
                    background:"none",
                    color: 'white',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginBottom: '20px',
                    textDecoration: 'none', // to remove underline from the link
                    textAlign: 'center'
                }}
            >
                Download Resume
            </a>

            <img src={SurajResume} width='80%' style={{margin: 'auto'}} alt="Suraj's Resume" />
        </div>
    );
};

export default PdfViewer;
