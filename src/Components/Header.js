import React, { useState } from 'react';
import '../Styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { FaTelegramPlane } from 'react-icons/fa';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import logo1 from '../Img/logo1.png';
import senat from '../Img/senat.png';

function Header() {
    const [style, setStyle] = useState(false);
    const menu_style = {
        display: 'flex',
        transform: style ? 'translateX(0px)' : 'translateX(100%)',
        transition: '0.5s',
        width: '100%',
        height: '100%',
        background: '#06456A',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '45px 45px',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '1'
    }

    const changeMenu = () => {
        setStyle(!style)
    }
    return (
        <div className="header">
            <div style={menu_style}>
                <FaTimes className="close" onClick={changeMenu} />
                <li><a onClick={changeMenu} href="/#news" className='text-decoration-none'>Yangiliklar</a></li>
                <li><a onClick={changeMenu} href="/#media" className='text-decoration-none'>Media</a></li>
                <li><a onClick={changeMenu} href="/hokimiyat" className='text-decoration-none'>Hokimiyat</a></li>
                <li><a onClick={changeMenu} href="/" className='text-decoration-none'>Bosh Sahifa</a></li>
                <li><a onClick={changeMenu} href="#y" className='text-decoration-none'>Hududlar</a></li>
                <li><a onClick={changeMenu} href="/tashkilotlar" className='text-decoration-none'>Tashkilotlar</a></li>
                <li><a onClick={changeMenu} href="#q" className='text-decoration-none'>Sayyohlik</a></li>
                <li><a onClick={changeMenu} href="#aloqa" className='text-decoration-none'>Aloqa</a></li>
            </div>
            <div className="row-first">
                <div className="container">
                    <div className="row justify-content-between pt-3">
                        <Dropdown className="col-1">
                            <Dropdown.Toggle className='dropdown text-white' variant="none" id="dropdown">
                                Uz
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Uz</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Ru</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">En</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="search col-6">
                            <form action="" className="d-flex justify-content-end">
                                <input type="text" placeholder='Qidiruv...' />
                                <FaSearch type="submit" className="search_icon" />
                            </form>
                        </div>
                        <div className="social-icons col-1">
                            <a href=""><FaTelegramPlane size='20px' className='icon' /></a>
                            <a href=""><AiFillInstagram size='20px' className='icon ml-2' /></a>
                            <a href=""><AiFillFacebook size='20px' className='icon ml-2' /></a>
                        </div>
                        <div className='menu  col-sm-1 col-2'>
                            <BiMenuAltRight className='menu_button' onClick={changeMenu} />
                        </div>

                    </div>
                </div>
            </div>
            <div className="row-second">
                <div className="container">
                    <div className="row justify-content-between">
                        <img src={logo1} className='logo1 col-md-3 col-sm-4 col-6' alt="rasm bor edi" />
                        <img src={senat} className='logo2 col-md-3 ' alt="rasm bor edi" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
