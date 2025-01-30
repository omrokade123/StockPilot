import React from 'react';

function Hero() {
    return ( 
        <div className="container pt-5 border-bottom">
            <div className="text-center mb-5">
                <h1 className='pt-5'>Zerodha Products</h1>
                <h4 className='text-muted fs-4'>Sleek, modern, and intuitive trading platforms</h4>
                <p className='pt-2'>Check out our <a style={{textDecoration:"none"}} href="">investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;