import React from 'react';
import Header from './Header';
import { AiFillEye } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import '../Styles/News.css'
import Footer from './Footer';
import savdo from '../Img/savdo.jpg';

function Savdo() {
    return (
        <div >
            <Header />
            <div className="container saylov">
                <div className="row">
                    <h1>Дўстлик тумани ҳокимининг ўринбосари-инвестициялар ва ташқи савдо бўлими бошлиғи</h1>
                    <div className="seen_date d-flex align-items-center">


                        <BiTimeFive className="news_icon" />
                        <span className="for_icon">30 июль 2021 йил</span>
                        <AiFillEye className="news_icon" />
                        <span className="for_icon">0</span>
                    </div>
                </div>
                <div className="row">
                    <img src={savdo} />
                    <p style={{ textAlign: "center" }}><h2> Қаршибоев Исмат Турсунматович</h2>.</p>
                    
                    <p style={{ textAlign: "center" }}><b>Фуқароларни қабул қилиш куни - Шанба 9-00 дан 17-00 гача</b></p>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Savdo
