import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src="Media/images/homeHero.png" alt="Hero Image" className='mb-5'/>
                <h1 className='mt-2'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button style={{width:"30%" ,margin:"0 auto"}} type="button" class="p-2 btn btn-primary fs-5">Sign Up for free</button>

            </div>
        </div>
     );
}

export default Hero;
