import React from 'react'
import Header from './Header';
import { AiFillEye } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import '../Styles/News.css'
import Footer from './Footer';
import saylov from '../Img/saylov.jpg';
function Saylov() {
    return (
        <div>
            <Header />
            <div className="container saylov">
                <div className="row">
                    <h1>Жиззахда Президент сайлови жараёнларини ёритувчи журналистлар малакаси оширилди</h1>
                    <div className="seen_date d-flex align-items-center">


                        <BiTimeFive className="news_icon" />
                        <span className="for_icon">30 июль 2021 йил</span>
                        <AiFillEye className="news_icon" />
                        <span className="for_icon">0</span>
                    </div>
                </div>
                <div className="row">
                    <img src={saylov} />
                    <p style={{ textAlign: "justify" }}><b>Вилоят Ахборот ва оммавий коммуникациялар бошқармасида Ўзбекистон Республикаси Марказий сайлов комиссияси, Ўзбекистон Республикаси Президенти Администрацияси ҳузуридаги Ахборот ва оммавий коммуникациялар агентлиги, Бирлашган миллатлар ташкилоти тараққиёт дастурининг халқаро экспертлари ҳамкорлигида ZOOM дастури орқали 2 кунлик ўқув ўтказилди.
                    </b>.</p>
                    <p style={{ textAlign: "justify" }}> Семинар-тренингнинг биринчи кунида маърузачилар томонидан “Миллий сайлов қонунчилигига ва амалиётига халқаро стандартлар ва тавсияларни жорий қилиш”, “Сайлов жараёнларини ОАВда ёритишда халқаро стандартлар, халқаро тажриба”, “Сайлов қонунчилигини бузганлик учун жавобгарлик”, “Сайловолди “Сукут куни” жавобгарлик масалалари”, “Сайлов компаниясини электрон ОАВларда ёритишдаги муаммолар” мавзуларида маърузалар тингланди. Маърузачилар томонидан мавзуга оид тақдимотлар ўтказилиб, иштирокчилар ўртасида амалий машғулотлар ташкил этилди.
Семинар-тренингнинг иккинчи куни давомида сайлов даврида гендер масалалари, ногиронларнинг сайловда иштирок этиши билан боғлиқ масалалар муҳокама этилди. Маърузачилар томонидан иштирокчиларга тавсиялар берилди.</p>
                    <p style={{ textAlign: "justify" }}><b>жиззах.уз дан олинди</b></p>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Saylov