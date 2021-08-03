import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import vaksina from '../Img/vaksina.jpg';
import oliy from '../Img/oliy.png';
import saylov from '../Img/saylov.jpg';
import masala from '../Img/masala.jpg';
import narbayeva from '../Img/narbayeva.jpg';

class Slider extends Component {
    render() {
        return (
            <div>
                <Carousel className="myslider">
                    <Carousel.Item>
                        <img
                            height="500px"
                            className="d-block w-100"
                            src={oliy}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Президент қ а р о р и</h3>
                            <p>Бирлашган Миллатлар Ташкилоти Бош Ассамблеясининг 2021 йил 18 майдаги </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            height="500px"
                            className="d-block w-100"
                            src={saylov}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Жиззахда Президент сайлови</h3>
                            <p>Жиззахда Президент сайлови жараёнларини ёритувчи журналистлар малакаси оширилди</p>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            height="500px"
                            className="d-block w-100"
                            src={vaksina}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Тошкентга 3 млн доза Moderna вакцинаси олиб келинди</h3>
                            <p>Ўзбекистонга COVAX механизми доирасида АҚШдан 3 миллион доза Moderna вакцинаси олиб...</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            height="500px"
                            className="d-block w-100"
                            src={masala}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Депутатлар ўн бешта масалани муҳокама қилишди</h3>
                            <p>Халқ депутатлари Дўстлик тумани Кенгашининг навбатдаги йигирма еттинчи сессияси...</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            height="500px"
                            className="d-block w-100"
                            src={narbayeva}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Танзила Нарбаева</h3>
                            <p>Одам савдоси икки баравардан зиёдга ошган...</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
export default Slider