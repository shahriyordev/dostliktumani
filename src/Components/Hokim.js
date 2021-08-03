import React from 'react';
import Header from './Header';
import { AiFillEye } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import '../Styles/News.css'
import Footer from './Footer';
import hokim from '../Img/hokim.jpg';

function Hokim() {
    return (
        <div >
            <Header />
            <div className="container saylov">
                <div className="row">
                    <h1>Дўстлик тумани ҳокими</h1>
                    <div className="seen_date d-flex align-items-center">


                        <BiTimeFive className="news_icon" />
                        <span className="for_icon">30 июль 2021 йил</span>
                        <AiFillEye className="news_icon" />
                        <span className="for_icon">0</span>
                    </div>
                </div>
                <div className="row">
                    <img src={hokim}/>
                    <p style={{ textAlign: "center" }}><h2> Шавкат Тураевич Дарвишев</h2>.</p>
                    <p style={{ textAlign: "justify" }}> 1982 йил 29 мартда Жиззах вилояти, Дўстлик туманида туғилган.
Маълумоти олий, 2006 йилда Тошкент ирригация ва мелиорация институти, 2016 йилда Ўзбекистон Банк-молия академиясини тамомлаган.</p>
                    <p style={{ textAlign: "justify" }}><b>Меҳнат фаолияти: </b></p>
                    <p style={{ textAlign: "justify" }}>1999-2001 йй. - Марғилон ҳисоб-кредит техникуми  Термиз филиали  ўқувчиси.</p>
                    <p style={{ textAlign: "justify" }}>2002-2005 йй. - Деҳқон ва фермер хўжаликлари уюшмаси Зомин тумани вакиллиги етакчи мутахассиси.</p>
                    <p style={{ textAlign: "justify" }}>2005-2007 йй. - Зомин тумани ҳокимлиги молия бўлими 1-тоифали иқтисодчиси.</p>
                    <p style={{ textAlign: "justify" }}>2007-2012 йй. - Зомин тумани бўйича Ғазначилик бўлинмаси бошлиғи ўринбосари-юридик мажбуриятларни рўйхатга олиш ва нархларни мониторинг қилиш шўъбаси бошлиғи. </p>
                    <p style={{ textAlign: "justify" }}>2012-2018 йй. - Шароф Рашидов тумани ҳокимлиги молия бўлими мудири.</p>
                    <p style={{ textAlign: "justify" }}>2018-2018 йй. - Жиззах вилояти ҳокимлиги Молия бош бошқармаси бошлиғининг ўринбосари.</p>
                    <p style={{ textAlign: "justify" }}>2018-2020 йй. - Жиззах вилояти ҳокимлиги Молия бошқармаси бошлиғининг биринчи ўринбосари.</p>
                    <p style={{ textAlign: "justify" }}>2020-2021 йй. - Жиззах вилояти ҳокимлиги Молия бошқармаси бошлиғи.</p>
                    <p style={{ textAlign: "justify" }}>2021 йил 16 февралдан - Жиззах вилояти Дўстлик тумани ҳокими.</p>
                    <p style={{ textAlign: "justify" }}><b>Фуқароларни қабул қилиш куни - Шанба 10-00 дан 13-00 гача</b></p>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Hokim
