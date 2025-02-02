import React from 'react'
function Awards() {
    return (
        <div className='container '>
            <div className='row mt-5'>
                <div className='col-6 p-5'> <img src='media/largestbroker.svg' /></div>
                <div className='col-6 mt-5 p-5'> <h1>Largest stoke broker in india</h1>
                    <p>2+ million zerotha clients contribute to over 15% of all retail order volume in india daily by trading and investing in:
                    </p>
                    
                        <div className='row mt-5'><div className='col'><ui>
                            <li className='mb-2'>Future And Option</li>
                            <li className='mb-2'>Commodity And Derivatives</li>
                            <li className='mb-2'>Currency Derivatives</li></ui>
                        </div>
                        <div className='col'><ui>
                            <li className='mb-2'>Stocks And Ipos</li>
                            <li className='mb-2'>Direct Mutual Funds</li>
                            <li className='mb-2'>Bonds And Goverment Securities</li></ui>
                        </div></div>
                    
                    <img src='media/pressLogos.png' width={"95%"} className='mt-4'/>
                </div>
            </div>
        </div>
    );
}

export default Awards;