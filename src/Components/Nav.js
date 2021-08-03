import React from 'react';
import '../Styles/Home.css';

function Nav() {
    return (
        <div className="navjs navbar ">
            <div className="container">
                <div className="row col-12">
                    <ul className='d-flex justify-content-between'>
                        <li><a href="/#news" className='text-decoration-none'>Yangiliklar</a></li>
                        <li><a href="/#media" className='text-decoration-none'>Media</a></li>
                        <li><a href="/hokimiyat" className='text-decoration-none'>Hokimiyat</a></li>
                        <li><a href="/" className='text-decoration-none'>Bosh Sahifa</a></li>
                        <li><a href="#y" className='text-decoration-none'>Hududlar</a></li>
                        <li><a href="/tashkilotlar" className='text-decoration-none'>Tashkilotlar</a></li>
                        <li><a href="#q" className='text-decoration-none'>Sayyohlik</a></li>
                        <li><a href="#aloqa" className='text-decoration-none'>Aloqa</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav
