import React from 'react'
import Header from './Header';
import { AiFillEye } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import '../Styles/News.css'
import Footer from './Footer';
import xiyobon from '../Img/xiyobon.jpg';
import xiyobon2 from '../Img/xiyobon2.jpg';

function Xiyobon() {
    return (
        <div>
            <Header />
            <div className="container saylov">
                <div className="row">
                    <h1>Депутатлар хиёбон қурилиши билан танишишди</h1>
                    <div className="seen_date d-flex align-items-center">


                        <BiTimeFive className="news_icon" />
                        <span className="for_icon">30 июль 2021 йил</span>
                        <AiFillEye className="news_icon" />
                        <span className="for_icon">0</span>
                    </div>
                </div>
                <div className="row">
                    <img src={xiyobon} />
                    <p style={{ textAlign: "justify" }}><b>Аввал хабар берганимиздек, бугун Халқ депутатлари Дўстлик туман Кенгашининг навбатдаги сессияси бўлиб ўтди.
                    </b>.</p>
                    <p style={{ textAlign: "justify" }}> Сессия якунига етгач, туман ҳокими Шавкат Дарвишев барча депутатларни туман марказида амалга оширилаётган қуриш, бунёдкорлик ишлари билан танишишга таклиф эди.</p>
                    <img src={xiyobon2} />
                    <p style={{ textAlign: "justify" }}>Туман ҳокими депутатларни ҳокимлик ҳовлисига бошларкан, бу ерда аҳоли дам олишлари учун хиёбон ташкил этилаётганини таъкидлади.Хиёбонда турли томошалар ташкил этиш учун очиқ анфитеатр, мусиқали фаввора ҳамда бошқа кўнгил очар объектлар барпо этилиши режалаштирилган.Айни пайтда эса анфитеатр ва фаввора қурилиш бошлаб юборилган.</p>
                    <p style={{ textAlign: "justify" }}>- Тез орада аҳолининг ҳордиқ чиқаришлари учун кўркам, барча қулайликларга эга хиёбон бунёд этилади,-дейди туман ҳокими Шавкат Дарвишев депутатларга.</p>
                    <p style={{ textAlign: "justify" }}><b>жиззах.уз дан олинди</b></p>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Xiyobon
