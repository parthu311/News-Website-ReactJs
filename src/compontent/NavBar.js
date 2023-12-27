import React from "react";

const NavBar = ({ setCategory , setCountry }) => {

    const handleCategoryClick = (category ) => (event) => {

        event.preventDefault();
        setCategory(category);
    }

    const handleCountryClick = (country) => (event) =>{
        event.preventDefault();
        setCountry(country);
        
    }

    

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-7   " data-bs-theme='dark'>
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="/">News-Mode</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-3 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" onClick={handleCategoryClick('business')} href="/">Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" onClick={handleCategoryClick('general')} href="/" >General</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" onClick={handleCategoryClick('health')} href="/">Health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" onClick={handleCategoryClick('science')} href="/">Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" onClick={handleCategoryClick('sports')} href="/">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" onClick={handleCategoryClick('technology')} href="/">Technology</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" onClick={handleCategoryClick('entertainment')} href="/">Entertainment</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="dropdown mx-5">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" >
                               Country
                            </button>
                            <ul class="dropdown-menu">
                                <li><a className="dropdown-item" onClick={handleCountryClick('in')} href="/">India</a></li>
                                <li><a className="dropdown-item" onClick={handleCountryClick('us')} href="/">United States</a></li>
                                <li><a className="dropdown-item" onClick={handleCountryClick('il')} href="/">Israel</a></li>
                                <li><a className="dropdown-item" onClick={handleCountryClick('ua')} href="/">Ukraine</a></li>
                                <li><a className="dropdown-item" onClick={handleCountryClick('sg')} href="/">Singapore</a></li>
                                <li><a className="dropdown-item" onClick={handleCountryClick('no')} href="/">Norway</a></li>
                            </ul>
                            </div>
            </nav>
        </>
    )
}

export default NavBar;
