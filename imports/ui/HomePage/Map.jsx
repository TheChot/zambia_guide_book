import React, {Component} from 'react';
//import Zambia from './';

class Map extends Component{

    render(){
        return(
            <div>
                <h1>Map</h1>
                <div>
                    <img src="mapofZambia.jpg" alt="" className="theMap" useMap="ZambiaMap"/>
                    <div className="Lusaka">
                        <img src="star.png" alt=""/>
                    </div>
                    <div className="Central">
                        <img src="city.png" alt=""/>
                    </div>
                    <div className="Copperbelt">
                        <img src="city.png" alt=""/>
                    </div>
                    <div className="Southern">
                        <img src="city.png" alt=""/>
                    </div>
                    <div className="Western">
                        <img src="city.png" alt=""/>
                    </div>
                    <div className="NorthWestern">
                        <img src="city.png" alt=""/>
                    </div>
                    <div className="Eastern">
                       <img src="city.png" alt=""/>
                    </div>
                    <div className="Southern">
                       <img src="city.png" alt=""/>
                    </div>
                    <div className="Northern">
                        <img src="city.png" alt=""/>    
                    </div>
                    <div className="Luapula">
                        <img src="city.png" alt=""/>
                    </div>
                </div>
               
                
            </div>
        )
    }

}

export default Map;