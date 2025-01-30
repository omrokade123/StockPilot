import React from 'react';

export default function Award(){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="Media/images/largestBroker.svg" />
                </div>
                <div className="col-6 p-5 mt-3">
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ millon Zerodha clients contribute to over 15% of retail order 
                        volumes in India daily by trading and investing in:
                    </p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Future & Opton</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                    <li>
                                        <p>Stocks & Ipos</p>
                                    </li>
                                    <li>
                                        <p>Direct Mutual fund</p>
                                    </li>
                                    <li>
                                        <p>Bonds & Government securites</p>
                                   </li>
                            </ul>
                        </div>
                       
                    </div>
                    <img style={{width:"90%"}} src="Media/images/pressLogos.png" />
                    
                </div>
            </div>
        </div>
    );
};
