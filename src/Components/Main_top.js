import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Main.css';
// import quick from '../Img/Quik_img.png';
import aholi from '../Img/aholi.jpg';
import vaksina from '../Img/vaksina.jpg';
import oliy from '../Img/oliy.png';
import saylov from '../Img/saylov.jpg';
import masala from '../Img/masala.jpg';
import narbayeva from '../Img/narbayeva.jpg';
import xiyobon from '../Img/xiyobon.jpg';



class Main_top extends Component {
    render() {
        return (

            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-12"><h1><a name="news">Yangiliklar</a></h1></div>
                                <div className="col-lg-6 mt-5 mb-5">

                                    <div class="mycard">
                                        <img src={aholi} />
                                        <div className="card_top">
                                            Mahalliy yangiliklar
                                        </div>
                                        <div class="card_body">
                                            <p class="card-text">Аҳоли мурожаатларини ҳоким ўз назоратига олди</p>

                                            <p className="more">
                                                <a href="/aholi">ko'proq o'qish  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-5 mb-5">
                                    <div class="mycard">
                                        <img src={saylov} />
                                        <div className="card_top">
                                            Mahalliy yangiliklar
                                        </div>
                                        <div class="card_body">

                                            <p class="card_text"> Жиззахда Президент сайлови жараёнларини ёритувчи журналистлар малакаси оширилди</p>
                                            <p className="more">
                                                <a href="/saylov">ko'proq o'qish  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-5 mb-5">
                                    <div class="mycard">
                                        <img src={narbayeva} />
                                        <div className="card_top">
                                            Mahalliy yangiliklar
                                        </div>
                                        <div class="card_body">
                                            <p class="card-text"> Одам савдоси икки баравардан зиёдга ошган — Танзила Нарбаева</p>
                                            <p className="more">
                                                <a href="/odamsavdosi">ko'proq o'qish  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-5 mb-5">
                                    <div class="mycard">
                                        <img src={oliy} />
                                        <div className="card_top">
                                            Mahalliy yangiliklar
                                        </div>
                                        <div class="card_body">
                                            <p class="card-text"> Олий таълим ташкилотларида таълим олиш имкониятларини янада кенгайтириш чора-тадбирлари тўғрисида </p>
                                            <p className="more">
                                                <a href="/oliy">ko'proq o'qish  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="col-12"><h1>Dolzarb</h1></div>
                            <div class="mycard2 mb-3 mt-5" >
                                <div class="row no-gutters">
                                    <div class="col-md-5">
                                        <img src={vaksina} id="img" alt="..." />
                                    </div>
                                    <div class="col-md-7">
                                        <div class="card_body2">
                                            <h5 class="card-title">Тошкентга 3 млн доза Moderna вакцинаси олиб келинди</h5>
                                            <p class="card-text">Ўзбекистонга COVAX механизми доирасида АҚШдан 3 миллион доза Moderna вакцинаси олиб...</p>
                                            <p className="more">
                                                <a href="/vaksina">ko'proq o'qish  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mycard2 mb-3 mt-5" >
                                <div class="row no-gutters">
                                    <div class="col-md-5">
                                        <img src={oliy} id="img" alt="..." />
                                    </div>
                                    <div class="col-md-7">
                                        <div class="card_body2">
                                            <h5 class="card-title">Ўзбекистон Республикаси Президентининг қ а р о р и... </h5>
                                            <p class="card-text">Бирлашган Миллатлар Ташкилоти Бош Ассамблеясининг 2021 йил 18 майдаги...</p>
                                            <p className="more">
                                                <a href="/qaror">ko'proq o'qish  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mycard2 mb-3 mt-5" >
                                <div class="row no-gutters">
                                    <div class="col-md-5">
                                        <img src={xiyobon} id="img" alt="..." />
                                    </div>
                                    <div class="col-md-7">
                                        <div class="card_body2">
                                            <h5 class="card-title">Депутатлар хиёбон қурилиши билан танишишди</h5>
                                            <p class="card-text">Депутатлар туман марказида амалга оширилаётган қуриш, бунёдкорлик ишлари билан танишишди....</p>
                                            <p className="more">
                                                <a href="/xiyobon">ko'proq o'qish  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mycard2 mb-3 mt-5" >
                                <div class="row no-gutters">
                                    <div class="col-md-5">
                                        <img src={masala} id="img" alt="..." />
                                    </div>
                                    <div class="col-md-7">
                                        <div class="card_body2">
                                            <h5 class="card-title">Депутатлар ўн бешта масалани муҳокама қилишди </h5>
                                            <p class="card-text">Халқ депутатлари Дўстлик тумани Кенгашининг навбатдаги йигирма еттинчи сессияси...</p>
                                            <p className="more">
                                                <a href="/masala">ko'proq o'qish  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main_top

