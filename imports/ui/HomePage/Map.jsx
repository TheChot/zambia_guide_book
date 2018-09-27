import React, {Component} from 'react';
//import Zambia from './';

class Map extends Component{

    setCity = (e,city) =>{
        
        Session.set("City",city);
        

    }

    render(){
        return(
            <div>
                <h1>Map</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <button onClick={e => this.setCity(e,Lusaka)}>
                                Lusaka
                            </button>
                        </div>
                        <div className="col-sm">
                            <button onClick={e => this.setCity(e,Kabwe)}>
                                Central
                            </button>
                        </div>
                        <div className="col-sm">
                            <button onClick={e => this.setCity(e,Ndola)}>
                                Copperbelt
                            </button>
                        </div>
                        <div className="col-sm">
                            <button onClick={e => this.setCity(e,Livingstone)}>
                                Southern
                            </button>
                        </div>
                        <div className="col-sm">
                            <button onClick={e => this.setCity(e,Chipata)}>
                                Eastern
                            </button>
                        </div>
                        <div className="col-sm">
                            <button onClick={e => this.setCity(e,Solwezi)}>
                                North-Western
                            </button>
                        </div>
                        <div className="col-sm">
                            <button onClick={e => this.setCity(e,Kasama)}>
                                Northern
                            </button>
                        </div>
                        <div className="col-sm">
                            <button onClick={e => this.setCity(e,Mansa)}>
                                Luapula
                            </button>
                        </div>
                        <div className="col-sm">
                            <button onClick={e => this.setCity(e,Mongu)}>
                                Western
                            </button>
                        </div>
                        <div className="col-sm">
                            <button onClick={e => this.setCity(e,Chinsali)}>
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