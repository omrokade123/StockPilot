import React from 'react';

function RightSection({imageurl,productname,productDescription,learnMore}) {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row mt-5" style={{marginTop:"100px"}}>
                <div className="col-6 pe-5 pt-5 mt-5">
                    <h1 className='mt-5 pt-5 text-sm'>{productname}</h1>
                    <p>{productDescription}</p><br />
                    <a href="">{learnMore} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className="col-6 ps-5 mt-5">
                    <img src={imageurl} style={{width:"100%"}}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;