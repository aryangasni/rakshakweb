import React from 'react';

function LeftSection({imageURL, productName, productDescription, style}) {
    return ( 
        <div className = "container">
            <div className = "row">
                <div className = "col-6">
                    <img src={imageURL} alt="" style={style} />
                </div>
                <div className = "col-6">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;