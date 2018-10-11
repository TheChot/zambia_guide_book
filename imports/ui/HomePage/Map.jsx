import React, {Component} from 'react';
//import Zambia from './';
//import '../../../public/bootstrap/bootstrap.css';
//import { bootstrap } from "bootstrap";

class Map extends Component{

    setCity = (e, city) =>{
        
        Session.set("City",city);
        FlowRouter.go('/MainCityPage')

    }

    render(){
        return(
            <div>
                
                <div id="slides" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#slides" data-slide-to="0" className="active"></li>
                        <li data-target="#slides" data-slide-to="1"></li>
                        <li data-target="#slides" data-slide-to="2"></li>
                        <li data-target="#slides" data-slide-to="3"></li>
                        <li data-target="#slides" data-slide-to="4"></li>
                        <li data-target="#slides" data-slide-to="5"></li>
                        

                    </ul>
                    <div className="carousel-inner"> 
                        <div className="carousel-item active">
                            <img src="CarouselImages/Carousel.jpg" alt="" className="carouselImage"/>
                        </div>
                        <div className="carousel-item">
                            <img src="CarouselImages/Carousel5.jpg" alt="" className="carouselImage"/>
                        </div>
                        <div className="carousel-item">
                            <img src="CarouselImages/Carousel7.jpg" alt="" className="carouselImage"/>
                        </div>
                        <div className="carousel-item">
                            <img src="CarouselImages/Carousel1.jpg" alt="" className="carouselImage"/>
                        </div>
                        <div className="carousel-item">
                            <img src="CarouselImages/Carousel2.jpg" alt="" className="carouselImage"/>
                        </div>
                        <div className="carousel-item">
                            <img src="CarouselImages/Carousel4.jpg" alt="" className="carouselImage"/>
                        </div>
                    </div>
                </div>

                <div className="container-fluid padding">
                    <div className="row text-center padding provinceChooser">
                        
                        <div className="col-sm provinceButton">
                            <button className="btn btn-success btn-rounded " onClick={e => this.setCity(e,'LUSAKA')}>
                                Lusaka
                            </button>
                            

                        </div>
                        <div className="col-sm provinceButton">
                            <button className="btn btn-success btn-rounded " onClick={e => this.setCity(e,'CENTRALPROVINCE')}>
                                Central
                            </button>
                        </div>
                        <div className="col-sm provinceButton">
                            <button className="btn btn-success btn-rounded " onClick={e => this.setCity(e,'COPPERBELT')}>
                                Copperbelt
                            </button>
                        </div>
                        <div className="col-sm provinceButton">
                            <button className="btn btn-success btn-rounded " onClick={e => this.setCity(e, 'SOUTHERN')}>
                                Southern
                            </button>
                        </div>
                        <div className="col-sm provinceButton">
                            <button className="btn btn-success btn-rounded " onClick={e => this.setCity(e,'EASTERN')}>
                                Eastern
                            </button>
                        </div>
                        <div className="col-sm provinceButton">
                            <button className="btn btn-success btn-rounded " onClick={e => this.setCity(e, 'NORTHWESTERN')}>
                                North-Western
                            </button>
                        </div>
                        <div className="col-sm provinceButton">
                            <button className="btn btn-success btn-rounded " onClick={e => this.setCity(e,'NORTHERN')}>
                                Northern
                            </button>
                        </div>
                        <div className="col-sm provinceButton">
                            <button className="btn btn-success btn-rounded " onClick={e => this.setCity(e,'LUAPULA')}>
                                Luapula
                            </button>
                        </div>
                        <div className="col-sm provinceButton">
                            <button className="btn btn-success btn-rounded " onClick={e => this.setCity(e,'WESTERN')}>
                                Western
                            </button>
                        </div>
                        <div className="col-sm provinceButton">
                            <button className="btn btn-success btn-rounded " onClick={e => this.setCity(e, 'MUCHINGA')}>
                                Muchinga
                            </button>
                        </div>
                        
                    </div>
                </div>               
               
                
            </div>
        )
    }className="btn peach-gradient btn-rounded "

}

export default Map;