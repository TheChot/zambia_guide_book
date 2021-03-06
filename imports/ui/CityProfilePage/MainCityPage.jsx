import React, {Component} from 'react'
import Places from './Places.jsx';
import CityPictures from './CityPictures.jsx';
import HotRightNow from './HotRightNow.jsx';
import Navbar from '../HomePage/Navbar.jsx'


class MainCityPage extends Component{
    constructor(){
        super();

        this.state = {
            CityPicturesComp:true,
            HotRightNowComp: false,
            PlacesComp:false,
            weatherDescription:'Description',
            CityButton:'active btn btn-success btn-rounded btn-lg',
            AttractionsButton:'btn btn-success btn-rounded btn-lg',
            LocationsButton:'btn btn-success btn-rounded btn-lg'
            
        }
    }
    
    setPictures = () =>{
        this.setState({
            CityPicturesComp:true,
            HotRightNowComp: false,
            PlacesComp:false,
            CityButton:'active btn btn-success btn-rounded btn-lg',
            AttractionsButton:'btn btn-success btn-rounded btn-lg',
            LocationsButton:'btn btn-success btn-rounded btn-lg'
        });
    }

    setHotRightNow = () =>{
        this.setState({
            CityPicturesComp:false,
            HotRightNowComp: true,
            PlacesComp:false,
            CityButton:'btn btn-success btn-rounded btn-lg',
            AttractionsButton:'active btn btn-success btn-rounded btn-lg',
            LocationsButton:'btn btn-success btn-rounded btn-lg'
        })
    }

    setPlaces = () =>{
        this.setState({
            CityPicturesComp:false,
            HotRightNowComp: false,
            PlacesComp:true,
            CityButton:'btn btn-success btn-rounded btn-lg',
            AttractionsButton:'btn btn-success btn-rounded btn-lg',
            LocationsButton:'active btn btn-success btn-rounded btn-lg'
        })
    }
    getWeather = () =>{
        
        let theWeather = require('jquery');
        const city = Session.get("City")
        
        var cityTemp;
        var cityDescription;
        let self = this;

        console.log("jquery loading");
        theWeather.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+",ZM&appid=afe95526ff604e223ab6b2ef98541b66",function(json){
            console.log(JSON.stringify(json));
            var weatherObject = JSON.stringify(json);
            var weatherjson = JSON.parse(weatherObject);
            console.log(weatherjson.weather[0].description);
            console.log(weatherjson.main.temp);
            
            cityDescription = weatherjson.weather[0].description;
            
            
            self.setState({
                weatherDescription:cityDescription,
                
            });
            console.log(cityDescription);
          
            
        });
        
        
        
        
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
                    <div className="row padding cityTitle"> 
                        
                        <div className="col-md-12 col-lg-6">
                            <h1>Lusaka Province</h1>
                            <h1>Lusaka</h1>
                            <h2>{this.state.weatherDescription}</h2>
                        </div> 
                        <div className = "col-lg-6">
                            <img className="img-fluid" src="CarouselImages/mapofZambia.jpg" alt=""/>
                        </div>                      
                        
                    </div>
                );
                break;
            case "WESTERN":
                return(
                    <div className="row padding cityTitle"> 
                       
                        <div className="col-md-12 col-lg-6">
                            <h1>Western Province</h1>
                            <h1>Mongu</h1>
                            <h2>{this.state.weatherDescription}</h2>
                        </div>  
                        <div className = "col-lg-6">
                            <img className="img-fluid" src="CarouselImages/mapofZambia.jpg" alt=""/>
                        </div>                     
                    
                    </div>
                );
                break;
            case "SOUTHERN":
                return(
                    <div className="row padding cityTitle"> 
                       
                        <div className="col-md-12 col-lg-6">
                            <h1>Southern Province</h1>
                            <h1>Livingstone</h1>
                            <h2>{this.state.weatherDescription}</h2>
                        </div>
                        <div className = "col-lg-6">
                            <img className="img-fluid" src="CarouselImages/mapofZambia.jpg" alt=""/>
                        </div>                       
                    
                    </div>
                );
                break;
            case "CENTRAL":
                return(
                    <div className="row padding cityTitle"> 
                       
                        <div className="col-md-12 col-lg-6">
                            <h1>Central Province</h1>
                            <h1>Kabwe</h1>
                            <h2>{this.state.weatherDescription}</h2>
                        </div>                       
                        <div className = "col-lg-6">
                             <img className="img-fluid" src="CarouselImages/mapofZambia.jpg" alt=""/>
                        </div>
                    </div>
                );
                break;
            case "COPPERBELT":
                return(
                    <div className="row padding cityTitle"> 
                   
                        <div className="col-md-12 col-lg-6">
                            <h1>Copperbelt Province</h1>
                            <h1>Ndola</h1>
                            <h2>{this.state.weatherDescription}</h2>
                        </div>                       
                        <div className = "col-lg-6">
                            <img className="img-fluid" src="CarouselImages/mapofZambia.jpg" alt=""/>
                        </div>
                    </div>
                );
                break;
            case "EASTERN":
                return(
                    <div className="row padding cityTitle"> 
                    
                    <div className="col-md-12 col-lg-6">
                        <h1>Eastern Province</h1>
                        <h1>Chipata</h1>
                        <h2>{this.state.weatherDescription}</h2>
                    </div>                       
                    <div className = "col-lg-6">
                        <img className="img-fluid" src="CarouselImages/mapofZambia.jpg" alt=""/>
                    </div>
                </div>
                );
                break;
            case "LUAPULA":
                return(
                    <div className="row padding cityTitle"> 
                        
                        <div className="col-md-12 col-lg-6">
                            <h1>Luapula Province</h1>
                            <h1>Mansa</h1>
                            <h2>{this.state.weatherDescription}</h2>
                        </div>                       
                        <div className = "col-lg-6">
                            <img className="img-fluid" src="CarouselImages/mapofZambia.jpg" alt=""/>
                        </div>
                    </div>
                );
                break;
            case "NORTHWESTERN":
                return(
                    <div className="row padding cityTitle"> 
                        
                        <div className="col-md-12 col-lg-6">
                            <h1>North Western Province</h1>
                            <h1>Solwezi</h1>
                            <h2>{this.state.weatherDescription}</h2>
                        </div> 
                        <div className ="col-lg-6">
                            <img className="img-fluid" src="CarouselImages/mapofZambia.jpg" alt=""/>
                        </div>                     
                    
                    </div>
                );
                break;
            case "NORTHERN":
                return(
                    <div className="row padding cityTitle"> 
                       
                        <div className="col-md-12 col-lg-6">
                            <h1>Northern Province</h1>
                            <h1>Kasama</h1>
                            <h2>{this.state.weatherDescription}</h2>
                        </div> 
                        <div className ="col-lg-6">
                            <img className="img-fluid" src="CarouselImages/mapofZambia.jpg" alt=""/>
                        </div>                      
                    
                    </div>
                );
                break;
            case "MUCHINGA":
                return(
                    <div className="row padding cityTitle"> 
                       
                        <div className="col-md-12 col-lg-6" >
                            <h1>Muchinga Province</h1>
                            <h1>Chinsali</h1>
                            <h2>{this.state.weatherDescription}</h2>
                        </div>
                        <div className ="col-lg-6">
                            <img className="img-fluid" src="CarouselImages/mapofZambia.jpg" alt=""/>
                        </div>                       
                    
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
                {/* {this.getWeather()} */}
                <Navbar/>
                <div className="container-fluid padding cityArea">                    
                    {this.setPlace()}                    
                </div>
                <div className = "container-fluid padding mainButtons">
                    <div className="row text-center padding">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <button className={this.state.CityButton} onClick ={this.setPictures}>Pictures</button>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <button className={this.state.AttractionsButton} onClick ={this.setHotRightNow}>Attractions</button>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <button className={this.state.LocationsButton} onClick ={this.setPlaces}>Places</button>
                        </div>                        
                    </div>
                </div>
                {this.setComponent()}
            </div>
        )
    }

}



export default MainCityPage;