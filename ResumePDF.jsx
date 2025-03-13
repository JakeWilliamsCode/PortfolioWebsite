import React, { Component } from 'react';
import NavigationBar from '../Components/NavigationBar';

function ResumePDF(){
    return(
        <div data-bs-theme="dark" class ="background">
        <NavigationBar></NavigationBar>
    <object data="C:\devroot\personal-website\src\ResumeFa24JakeW.pdf" type="application/pdf" width="100%" height="100%">
        <p>Alternative text - include a link </p>
    </object>
    </div>
    );
}

export default ResumePDF;
