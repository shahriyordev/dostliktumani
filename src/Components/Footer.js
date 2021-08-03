import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Footer.css';
import { BiPhone } from 'react-icons/bi';
import { FaTelegramPlane  } from 'react-icons/fa';
import { BsFillEnvelopeFill  } from 'react-icons/bs';

 class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-md-3">
                            <h2 className='footer_h2 text-left '><a name="aloqa">Aloqa</a></h2>
                            <div className="footer_text">
                                <p><BiPhone className='phone'></BiPhone>+372 640  1401</p> 
                                <div className="links d-flex flex-column">
                                    <a href="#u"><FaTelegramPlane className='phone mr-2'></FaTelegramPlane>@do’stlik.uz</a> <br />
                                    <a href="#u"><BsFillEnvelopeFill className='phone mr-2'></BsFillEnvelopeFill>afmz3@wimsg.com</a> 
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h2 className='footer_h2'>Menu</h2>
                            <div className="footer_menu d-flex justify-content-between">
                                <ul className='d-flex flex-column justify-content-around'>
                                    <li><a href="/">Bosh Sahifa</a></li>
                                    <li><a href="/#news">Yangiliklar</a></li>
                                    <li><a href="/#media">Media</a></li>
                                    <li><a href="/#aloqa">Aloqa</a></li>
                                </ul>
                                <ul className='d-flex flex-column justify-content-around'>
                                    <li><a href="/hokimiyat">Hokimiyat</a></li>
                                    <li><a href="/hududlar">Hududlar</a></li>
                                    <li><a href="/tashkilotlar">Tashkilotlar</a></li>
                                    <li><a href="/turizm">Sayyohlik</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24261.592157380524!2d68.0215714555689!3d40.52614321707638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ad7a305c41f077%3A0x4637a6ba454a195b!2sDo&#39;stlik%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1627874339932!5m2!1suz!2s" style={{ width:"100%", height:"100%", border:0 ,allowFullScreen:"" ,loading:"lazy"}}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer