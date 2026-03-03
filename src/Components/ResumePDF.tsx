import NavigationBar from './NavigationBar';


function ResumePDF(){

    const publicPathPdf = 'ResumeFa25JakeWFront-1.pdf'; 


   return (
    <div>
      <a href={publicPathPdf} target="_blank" rel="noopener noreferrer">
        View PDF
      </a>
    </div>
  );
}

export default ResumePDF;
