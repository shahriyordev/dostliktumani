import React, { Component } from 'react';
import Main_top from '../Components/Main_top';
import Main_section from '../Components/Main_section';
import Swiper from '../Components/Swiper';

 class Main extends Component {
    render() {
        return (
            <div>
                <Main_top/>
                <Main_section/>
                <Swiper/>
            </div>
        )
    }
}
export default Main