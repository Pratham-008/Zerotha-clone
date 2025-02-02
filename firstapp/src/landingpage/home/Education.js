import React from 'react'
function Education() {
    return (
        <div className='container'>
            <div className='row mt-5 mb-5'>
                <div className='col-6 pt-3'><img src='media/education.svg' width={"75%"} /></div>
                <div className='col-6 pt-5'><h1>Free and open market education</h1>
                    <p className='fs-6 mt-4'>Varsity, the largest online stock market education book in the world<br/>covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:'none'}} className='mt-4 mb-2 fs-6'>Varisity  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='fs-6 mt-5'>TradingQ&A, the most active trading and investment community in<br/>India for all your market related queries.</p>
                    <a href='' style={{textDecoration:'none'}} className='mt-4 fs-6'>TrandingQ&A  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
            </div>
        </div>);
}

export default Education;