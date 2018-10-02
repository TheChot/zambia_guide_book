import React, {Component} from 'react';
//import Zambia from './';

class Map extends Component{

    setCity = (e, city) =>{
        
        Session.set("City",city);
        FlowRouter.go('/MainCityPage')

    }

    render(){
        return(
            <div>
                <h1>Map</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <button onClick={e => this.setCity(e,'LUSAKA')}>
                                Lusaka
                            </button>
                        </div>
                        <div className="col-sm">
                            <button onClick={e => this.setCity(e,'CENTRALPROVINCE')}>
                                Central
                            </button>
                        </div>
                        <div className="col-sm">
                            <button onClick={e => this.setCity(e,'COPPERBELT')}>
                                Copperbelt
                            </button>
                        </div>
                        <div className="col-sm">
                            <button onClick={e => this.setCity(e, 'SOUTHERN')}>
                                Southern
                            </button>
                        </div>
                        <div className="col-sm">
                            <button onClick={e => this.setCity(e,'EASTERN')}>
                                Eastern
                            </button>
                        </div>
                        <div className="col-sm">
                            <button onClick={e => this.setCity(e, 'NORTHWESTERN')}>
                                North-Western
                            </button>
                        </div>
                        <div className="col-sm">
                            <button onClick={e => this.setCity(e,'NORTHERN')}>
                                Northern
                            </button>
                        </div>
                        <div className="col-sm">
                            <button onClick={e => this.setCity(e,'LUAPULA')}>
                                Luapula
                            </button>
                        </div>
                        <div className="col-sm">
                            <button onClick={e => this.setCity(e,'WESTERN')}>
                                Western
                            </button>
                        </div>
                        <div className="col-sm">
                            <button onClick={e => this.setCity(e, 'MUCHINGA')}>
                                Muchinga
                            </button>
                        </div>
                    </div>
                </div>               
               
                
            </div>
        )
    }

}

export default Map;