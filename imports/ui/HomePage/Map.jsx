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
                        <a href="/MainCityPage"><img src="star.png" alt="" className="cityIcon"/></a>                        
                    </div>
                    <div className="Central">
                        <a href="/MainCityPage"><img src="city.png" alt="" className="cityIcon"/></a>                        
                    </div>
                    <div className="Copperbelt">
                        <a href="/MainCityPage"><img src="city.png" alt="" className="cityIcon"/></a>
                    </div>
                    <div className="Southern">
                        <a href="/MainCityPage"><img src="city.png" alt="" className="cityIcon"/></a>
                    </div>
                    <div className="Western">
                        <a href="/MainCityPage"><img src="city.png" alt="" className="cityIcon"/></a>
                    </div>
                    <div className="NorthWestern">
                        <a href="/MainCityPage"><img src="city.png" alt="" className="cityIcon"/></a>
                    </div>
                    <div className="Eastern">
                        <a href="/MainCityPage"><img src="city.png" alt="" className="cityIcon"/></a>
                    </div>
                    <div className="Southern">
                       <a href="/MainCityPage"><img src="city.png" alt="" className="cityIcon"/></a>
                    </div>
                    <div className="Northern">
                        <a href="/MainCityPage"><img src="city.png" alt="" className="cityIcon"/></a>
                    </div>
                    <div className="Luapula">
                        <a href="/MainCityPage"><img src="city.png" alt="" className="cityIcon"/></a>
                    </div>
                </div>
               
                
            </div>
        )
    }

}

export default Map;