import React from 'react';

function LeftSection({imageurl,productname,productDescription,tryDemo,learnMore,googleplay,appstore}) {
    return ( 
       <div className="container mt-5 mb-5">
        <div className="row mt-5">
            <div className="col-6 pe-5">
                <img style={{width:"100%"}} src={imageurl}  />
            </div>
            <div className="col-6  ps-5  mt-5">
                <h1>{productname}</h1>
                <p>{productDescription}</p>
                <div>
                    <a href="http://localhost:5174/">{tryDemo} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>&nbsp;&nbsp;
                    <a href="">{learnMore}<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='mt-4'>
                    <a href={googleplay}><img src='Media/images/googlePlayBadge.svg'/></a>&nbsp;
                    <a href={appstore}><img src='Media/images/appstoreBadge.svg'/></a>
                </div>
            </div>
        </div>
       </div>
     );
}

export default LeftSection;