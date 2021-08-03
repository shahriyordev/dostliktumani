import React, { Component } from 'react'

 class Main_section extends Component {
    render() {
        return (
            <div className='main_section'>
                <div className="container">
                    <div class="news_box d-flex justify-content-between">
                        <h2><a name="media">Media</a></h2>
                    </div>
                    <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Z-OAP5GH820" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="col-md-6 col-lg-3">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/gxn0_JsU67I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="col-md-6 col-lg-3">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/8uIhAbr-kcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="col-md-6 col-lg-3">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/jC_AyQ82TnA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 
export default Main_section