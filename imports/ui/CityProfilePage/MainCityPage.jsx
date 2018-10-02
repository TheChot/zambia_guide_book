import React, {Component} from 'react'
import Places from './Places.jsx';
import CityPictures from './CityPictures.jsx';
import HotRightNow from './HotRightNow.jsx';


class MainCityPage extends Component{
    constructor(){
        super();

        this.state = {
            CityPicturesComp:true,
            HotRightNowComp: false,
            PlacesComp:false,
            weatherDescription:'',
            weatherTemp:''
        }
    }
    
    setPictures = () =>{
        this.setState({
            CityPicturesComp:true,
            HotRightNowComp: false,
            PlacesComp:false
        });
    }

    setHotRightNow = () =>{
        this.setState({
            CityPicturesComp:false,
            HotRightNowComp: true,
            PlacesComp:false
        })
    }

    setPlaces = () =>{
        this.setState({
            CityPicturesComp:false,
            HotRightNowComp: false,
            PlacesComp:true
        })
    }
    getWeather = () =>{
        
        let theWeather = require('jquery');
        const city = Session.get("City")
        
        var cityTemp;
        var cityDescription;

        console.log("jquery loading");
        theWeather.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+",ZM&appid=afe95526ff604e223ab6b2ef98541b66",function(json){
            console.log(JSON.stringify(json));
            var weatherObject = JSON.stringify(json);
            var weatherjson = JSON.parse(weatherObject);
            // console.log(weatherjson.weather[0].description);
            // console.log(weatherjson.main.temp);
            
            cityDescription = weatherjson.weather[0].description;
            cityTemp = weatherjson.main.temp;
           
            
        });
        
        this.setState({
            weatherDescription:cityDescription,
            weatherTemp: cityTemp
        });
        console.log(cityDescription);
        console.log(cityTemp);
        
    }

    setComponent = () =>{

        if (this.state.CityPicturesComp){
            return(<CityPictures/>);
        } else if (this.state.HotRightNowComp){
            return(<HotRightNow/>);
        } else if (this.state.PlacesComp){
            return(<Places/>)
        }

    }
    setPlace = () =>{
        const city = Session.get("City");
        
        // var options = {
        //     location: 50.850340+','+ 4.351710, // Brussels
        //     unit: 'c',
        //     success: function (weather) {
        //         console.log(weather.code,weather.units.temp);
              
              
        //       $("#weather").html(html);
        //     },
        //     error: function(error) {
        //       $("#weather").html('<p>'+error+'</p>');
        //     }
        //   }
          
        //   Weather.options = options

        switch(city){

            case "LUSAKA":
                return(
                    <div>
                        
                        <h1>Lusaka</h1>
                        <h1>Lusaka</h1>
                       

                    </div>
                );
                break;
            case "WESTERN":
                return(
                    <div>
                        <h1>Western</h1>
                        <h1>Mongu</h1>
                       
                    </div>
                );
                break;
            case "SOUTHERN":
                return(
                    <div>
                        <h1>Southern</h1>
                        <h1>Livingstone</h1>
                        
                    </div>
                );
                break;
            case "CENTRALPROVINCE":
                return(
                    <div>
                        <h1>Central Province</h1>
                        <h1>Kabwe</h1>
          
                    </div>
                );
                break;
            case "COPPERBELT":
                return(
                    <div>
                        <h1>Copperbelt</h1>
                        <h1>Ndola</h1>
              
                    </div>
                );
                break;
            case "EASTERN":
                return(
                    <div>
                        <h1>Eastern Province</h1>
                        <h1>Chipata</h1>
                   
                    </div>
                );
                break;
            case "LUAPULA":
                return(
                    <div>
                        <h1>Luapula</h1>
                        <h1>Mansa</h1>
                      
                    </div>
                );
                break;
            case "NORTHWESTERN":
                return(
                    <div>
                        <h1>North Western</h1>
                        <h1>Solwezi</h1>
        
                    </div>
                );
                break;
            case "NORTHERN":
                return(
                    <div>
                        <h1>Northern</h1>
                        <h1>Kasama</h1>
                        <h2>{this.state.weatherDescription}</h2>
                        <h2>{this.state.weatherTemp}</h2>   
                    </div>
                );
                break;
            case "MUCHINGA":
                return(
                    <div>
                        <h1>Muchinga</h1>
                        <h1>Chinsali</h1>
                        <h2>{this.state.weatherDescription}</h2>
                        <h2>{this.state.weatherTemp}</h2>   
                    </div>
                );
                break;


        }
    }
    componentDidMount(){
        this.getWeather();
        
      
        
    }

    render(){
        return(
            <div>
                <h1>Main City Page</h1>
                {this.setPlace()}
                <h2>{this.state.weatherDescription}</h2>
                <h2>{this.state.weatherTemp}</h2>
                             
                <button onClick ={this.setPictures}>Pictures</button>
                <button onClick ={this.setHotRightNow}>Hot Right Now</button>
                <button onClick ={this.setPlaces}>Places</button>
                {this.setComponent()}
            </div>
        )
    }

}



export default MainCityPage;