import React, {Component} from 'react';
//import Zambia from './';

class Map extends Component{

    render(){
        return(
            <div>
                <h1>Map</h1>
                <img src="mapofZambia.jpg" alt="" className="theMap" useMap="ZambiaMap"/>
                <map name="ZambiaMap">
                    <area shape="poly" coords="262,306, 352,282, 372,328, 270,351" href="/MainBusinessPage" alt=""/>
                </map>
            </div>
        )
    }

}

export default Map;