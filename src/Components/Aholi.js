import React from 'react'
import Header from './Header';
import { AiFillEye } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import '../Styles/News.css';
import Footer from './Footer';
import aholi from '../Img/aholi.jpg';
import aholi2 from '../Img/aholi2.jpg';
import aholi3 from '../Img/aholi3.jpg';

function Aholi() {
    return (
        <div>
            <Header />
            <div className="container saylov">
                <div className="row">
                    <h1>Аҳоли мурожаатларини ҳоким ўз назоратига олди</h1>
                    <div className="seen_date d-flex align-items-center">


                        <BiTimeFive className="news_icon" />
                        <span className="for_icon">30 июль 2021 йил</span>
                        <AiFillEye className="news_icon" />
                        <span className="for_icon">0</span>
                    </div>
                </div>
                <div className="row">
                    <img src={aholi} />
                    <p style={{ textAlign: "justify" }}><b>Президент раислигида аҳоли мурожаатлари билан ишлаш тизимини янгича ташкил қилиш чора-тадбирлари бўйича ўтказилган видеоселектр йиғилишида белгилаб берилган вазифалар асосида Дўстлик тумани ҳокимлиги томонидан маҳаллаларда сайёр қабуллар ташкил этилмоқда</b>.</p>
                    <img src={aholi2} />
                    <p style={{ textAlign: "justify" }}> Бугун Дўстлик тумани ҳокими Шавкат Дарвишев, 4-сектор раҳбари Муҳаммади Турсунмуродов, туман ҳокимининг ўринбосарлари, мутасадди ташкилотлар раҳбарлари иштирокида “Саноатчилар” маҳалласида сайёр қабулда ўтказилди. Унда 11 нафар фуқароларнинг мурожаатлари кўриб чиқилди.</p>
                    <p style={{ textAlign: "justify" }}>Сайёр қабулда иштирок этган аҳоли асосан, чорва, тикувчилик, паррандачилик йўналишлари бўйича кредит маблағлари ажратиш, ишга жойлаштириш, тиклаш, моддий ёрдам ажратиш ва шу каби бошқа масалалар бўйича мурожаат қилди.</p>
                    <p style={{ textAlign: "justify" }}>Мурожаатлар ечими муддат ва маблағ талаб этгани боис тегишли ташкилотларга ҳал этиш бўйича топшириқлар берилди.</p>
                    <p style={{ textAlign: "justify" }}>- Кўтарилган масалалар эътиборимиздан четда қолмайди. Масъул бўлган ташкилот раҳбарлари уларнинг ижроси билан алоҳида шуғулланади. Уларнинг ҳар бирини ўз назоратимга оламан,-дейди туман ҳокими аҳоли билан сайёр қабулда.</p>
                    <p style={{ textAlign: "justify" }}> </p>
                    <img src={aholi3} />
                    <p style={{ textAlign: "justify" }}> </p>
                    <p style={{ textAlign: "justify" }}><b>Дўстлик тумани ҳокимлигининг Ахборот хизмати.</b></p>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Aholi
