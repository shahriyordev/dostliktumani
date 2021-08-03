import React from 'react';
import '../Styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { FaTelegramPlane } from 'react-icons/fa';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import logo1 from '../Img/logo1.png';
import senat from '../Img/senat.png';

function Yangiliklar() {
    return (
        <div className="header">
            <div className="row-first">
                <div className="container">
                    <div className="row justify-content-between pt-3">
                        <Dropdown className="col-md-1">
                            <Dropdown.Toggle className='dropdown text-white' variant="none" id="dropdown">
                                Uz
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Uz</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Ru</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">En</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="search col-md-3">
                            <form action="">
                                <input type="text" placeholder='Qidiruv...' />
                            </form>
                        </div>
                        <div className="social-icons col-md-1">
                            <a href=""><FaTelegramPlane size='20px'  className='icon' /></a>
                            <a href=""><AiFillInstagram size='20px' className='icon ml-2' /></a>
                            <a href=""><AiFillFacebook size='20px' className='icon ml-2' /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row-second">
                <div className="container">
                    <div className="row justify-content-between">
                        <img src={logo1} className='logo1' alt="rasm bor edi" className="col-md-3" />
                        <img src={senat} className='logo2' alt="rasm bor edi" className="col-md-3" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
