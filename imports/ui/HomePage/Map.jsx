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
                
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="CarouselImages/Carousel.jpg" alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="CarouselImages/Carousel5.jpg" alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="CarouselImages/Carousel7.jpg" alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="CarouselImages/Carousel1.jpg" alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="CarouselImages/Carousel2.jpg" alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="CarouselImages/Carousel4.jpg" alt="First slide"/>
                        </div>
                    
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

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