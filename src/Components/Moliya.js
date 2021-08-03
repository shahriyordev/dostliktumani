import React from 'react';
import Header from './Header';
import { AiFillEye } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import '../Styles/News.css'
import Footer from './Footer';
import moliya from '../Img/moliya.png';

function Moliya() {
    return (
        <div >
            <Header />
            <div className="container saylov">
                <div className="row">
                    <h1>Дўстлик тумани ҳокимининг молия-иқтисодиёт ва камбағалликни қисқартириш  масалалари бўйича биринчи ўринбосари</h1>
                    <div className="seen_date d-flex align-items-center">


                        <BiTimeFive className="news_icon" />
                        <span className="for_icon">30 июль 2021 йил</span>
                        <AiFillEye className="news_icon" />
                        <span className="for_icon">0</span>
                    </div>
                </div>
                <div className="row">
                    <img src={moliya} />
                    <p style={{ textAlign: "center" }}><h2> Данияров Баходир Маматкулович</h2>.</p>
                    
                    <p style={{ textAlign: "center" }}><b>Фуқароларни қабул қилиш куни - Шанба 9-00 дан 17-00 гача</b></p>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Moliya
