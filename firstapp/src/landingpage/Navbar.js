import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid border-bottom"><Link className='ms-5 pb-2 pt-2' to={'/'}>
                <img src='media/logo.svg' width={"25%"} className='p-2 ms-5'/>
            </Link>
                <div className='collapse d-flex me-5' id="navbarSupportedContent">
                    <ul class="navbar-nav me-5 mb-2 mb-lg-0 fs-6 text-muted">
                        <li class="nav-item ms-3">
                            <Link class="nav-link active" aria-current="page" to={"/Signup"}>Signup</Link>
                        </li>
                        <li class="nav-item ms-5">
                            <Link class="nav-link active" to={"/About"}>About</Link>
                        </li>
                        <li class="nav-item ms-5">
                            <Link class="nav-link active" aria-disabled="true" to={"/products"}>Products</Link>
                        </li>
                        <li class="nav-item ms-5">
                            <Link class="nav-link active" aria-disabled="true" to={"/Pricing"}>Pricing</Link>
                        </li>
                        <li class="nav-item ms-5">
                            <Link class="nav-link active" aria-disabled="true" to={"/Support"}>Support</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;