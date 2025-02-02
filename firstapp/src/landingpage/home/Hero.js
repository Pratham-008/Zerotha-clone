import React from 'react'
function Hero() {
    return (
        <div className='container'>
            <div className='row text-center'>
                <div className='col p-5'><img src='media/homehero.png' alt='Hero Image' width="70%" /></div>
                <h1 className='mt-5'>
                    Invest In EveryThing
                </h1>
                <p className='fs-4 text-muted'>
                Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>
                <button className='btn btn-primary p-2 fs-5 mb-5 mt-4' style={{width:"25%",margin:" 0 auto"}}>Signup Now</button>
            </div>
        </div>
    );
}

export default Hero;