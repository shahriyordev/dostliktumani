import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import gerb from '../Img/Gerb.png';
import lex from '../Img/Lex.png';
import SwiperCore, {Pagination} from 'swiper/core';
import swpier2 from '../Img/swpier2.png';
import swiper1 from '../Img/swiper1.png';
import swiper3 from '../Img/swiper3.png';
import swiper4 from '../Img/swiper4.png';
import swiper5 from '../Img/swiper5.png';
import swiper6 from '../Img/swiper6.png';

SwiperCore.use([Pagination]);

export default function App() {
  return (
    
        <div className="swiper">
            <div className="container">
                <div className="row">
                    <Swiper slidesPerView={3} spaceBetween={50} freeMode={true} pagination={{
                        "clickable": true }} className="mySwiper">
                        <SwiperSlide>
                            <a href="http://pm.gov.uz/uz">
                                <div className="img_bx text-center">
                                    <img src={swpier2} alt="" />
                                </div>
                               
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="http://dostlik.jizzax.uz/">
                                <div className="img_bx text-center">
                                    <img src={swiper1} alt="" />
                                </div>
                                
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="http://data.gov.uz/">
                                <div className="img_bx text-center">
                                    <img src={swiper3} alt="" />
                                </div>
                                
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="http://ek.uz/uz/">
                                <div className="img_bx text-center">
                                    <img src={swiper4} alt="" />
                                </div>
                                
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="http://www.lex.uz/">
                                <div className="img_bx text-center">
                                    <img src={lex} alt="" />
                                </div>
                                
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="http://id.gov.uz/">
                                <div className="img_bx text-center">
                                    <img src={swiper5} alt="" />
                                </div>
                                
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="http://strategy.gov.uz/uz">
                                <div className="img_bx text-center">
                                    <img src={swiper6} alt="" />
                                </div>
                                
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
       
    
  )
}