import React from 'react';

function Universe() {
    return ( 
        <div className="container text-center">
            <div className="row">
                <h4>Want to know more about our technology stack? Check out the <a href='' style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</h4>
                <br /><br /><br /><br /><br />
                <h1>The Zerodha Universe</h1>
                <p className='mt-4'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4  p-3 mt-5">
                    <img src="Media/images/smallcaseLogo.png" />
                    <p className='text-small text-muuted'>Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Media/images/streakLogo.png" style={{width:"50%"}}/>
                    <p className='text-small text-muuted'>Algo & strategy platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Media/images/sensibullLogo.svg" style={{width:"70%"}}/>
                    <p className='text-small text-muuted'>OPtion trading platform</p>
                </div>
                <div className="col-4  p-3 mt-5">
                    <img src="Media/images/zerodhaFundhouse.png" style={{width:"70%"}}/>
                    <p className='text-small text-muuted'>Assest management</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Media/images/goldenpiLogo.png" />
                    <p className='text-small text-muuted'>Bonds trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Media/images/dittoLogo.png" style={{width:"40%"}}/>
                    <p className='text-small text-muuted'>Insurance</p>
                </div>
                <button style={{width:"30%" ,margin:"0 auto"}} type="button" class="p-2 btn btn-primary fs-5 mt-5">Sign Up for free</button>
            </div>
        </div>
     );
}

export default Universe;