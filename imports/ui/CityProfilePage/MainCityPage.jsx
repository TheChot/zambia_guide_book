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
            PlacesComp:false
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
        const city = Session.get("City")
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

            case "Lusaka":
                return(
                    <div>
                        <h1>Lusaka</h1>
                        <h1>Lusaka</h1>
                    </div>
                );
                break;
            case "Mongu":
                return(
                    <div>
                        <h1>Western</h1>
                        <h1>Mongu</h1>
                    </div>
                );
                break;
            case "Livingstone":
                return(
                    <div>
                        <h1>Southern</h1>
                        <h1>Livingstone</h1>
                    </div>
                );
                break;
            case "Kabwe":
                return(
                    <div>
                        <h1>Central Province</h1>
                        <h1>Kabwe</h1>
                    </div>
                );
                break;
            case "Ndola":
                return(
                    <div>
                        <h1>Copperbelt</h1>
                        <h1>Ndola</h1>
                    </div>
                );
                break;
            case "Chipata":
                return(
                    <div>
                        <h1>Eastern Province</h1>
                        <h1>Chipata</h1>
                    </div>
                );
                break;
            case "Mansa":
                return(
                    <div>
                        <h1>Luapula</h1>
                        <h1>Mansa</h1>
                    </div>
                );
                break;
            case "Solwezi":
                return(
                    <div>
                        <h1>North Western</h1>
                        <h1>Solwezi</h1>
                    </div>
                );
                break;
            case "Kasama":
                return(
                    <div>
                        <h1>Northern</h1>
                        <h1>Kasama</h1>
                    </div>
                );
                break;
            case "Chinsali":
                return(
                    <div>
                        <h1>Muchinga</h1>
                        <h1>Chinsali</h1>
                    </div>
                );
                break;


        }
    }

    render(){
        return(
            <div>
                <h1>Main City Page</h1>
                {this.setPlace()}
                <button onClick ={this.setPictures}>Pictures</button>
                <button onClick ={this.setHotRightNow}>Hot Right Now</button>
                <button onClick ={this.setPlaces}>Places</button>
                {this.setComponent()}
            </div>
        )
    }

}

export default MainCityPage;