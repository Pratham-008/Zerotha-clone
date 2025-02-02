import React from 'react'
function stats() {
    return (
        <div className='container'>
            <div className='row mt-5 mb-5'>
                <div className='col-6 p-5'><h1 className='mb-5'>Trust With Confidence</h1>
                    <h3 className='mt-3'>Customer-first always</h3>
                    <p>That's why 1.5+ crore customers trust Zerodha with <br/>₹4.5+ lakh crores of equity investments and contribute to <br/>15% of daily retail exchange volumes in India.</p>
                    <h3 className='mt-3'> No spam or gimmics</h3>
                    <p>No gimmicks, spam, "gamification", or annoying push <br/>notifications. High quality apps that you use at your <br/>pace, the way you like.</p>
                    <h3 className='mt-3'>The Zerotha universe</h3>
                    <p>Not just an app, but a whole ecosystem. Our investments <br/>in 30+ fintech startups offer you tailored services <br/>specific to your needs.</p>
                    <h3 className='mt-3'>Do bettre with money</h3>
                    <p>With initiatives like Nudge and Kill Switch, we don't just <br/>facilitate transactions, but actively help you do better <br/>with your money.</p>
                </div>
                <div className='col-6 p-5 text-center'><img src='media/ecosystem.png' width={"100%"} />
                <a href=''className='mx-5' style={{textDecoration:"none"}}>Explore our products  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href='' style={{textDecoration:"none"}}>Try Kite demo  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    );
}

export default stats;