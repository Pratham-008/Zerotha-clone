import React from 'react'
function pricing() {
    return (
        <div className='container'>
            <div className='row mb-5'>
                <div className='col-5 pt-5'>
                        <h1>Unbeatable pricing</h1>
                        <p className='fs-6 text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        <a href='' style={{textDecoration:'none'}} className='mt-4 fs-6'>See pricing  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-7 pt-5'>
                    <div className='row'>
                        <div className='col'><img src='media/pricing0.svg'/></div>
                        <div className='col pt-4 fs-6' style={{marginLeft:"0px"}}> Free account<br /> opening</div>
                        <div className='col'><img src='media/pricing0.svg'/></div>
                        <div className='col pt-4 fs-6'> Free account<br /> opening</div>
                        <div className='col'><img src='media/other-trades.svg'/></div>
                        <div className='col pt-4 fs-6'>Intraday and F&O</div>
                    </div>
                </div>
            </div>
        </div>);
}

export default pricing;