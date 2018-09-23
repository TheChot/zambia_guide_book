import React, {Component} from 'react';
import BusinessPictures from './BusinessPictures.jsx';
import Services from './Services.jsx';
import AboutBusiness from './AboutBusiness.jsx';


class MainBusinessPage extends Component{

    constructor(){
        super();

        this.state = {
            BusinessPicturesComp:true,
            ServicesComp: false,
            AboutBusinessComp:false
        }
    }
    
    setPictures = () =>{
        this.setState({
            BusinessPicturesComp:true,
            ServicesComp: false,
            AboutBusinessComp:false
        });
    }

    setServices= () =>{
        this.setState({
            BusinessPicturesComp:false,
            ServicesComp: true,
            AboutBusinessComp:false
        })
    }

    setAbout = () =>{
        this.setState({
            BusinessPicturesComp:false,
            ServicesComp: false,
            AboutBusinessComp:true
        })
    }

    setComponent = () =>{

        if (this.state.BusinessPicturesComp){
            return(<BusinessPictures/>);
        } else if (this.state.ServicesComp){
            return(<Services/>);
        } else if (this.state.AboutBusinessComp){
            return(<AboutBusiness/>)
        }

    }

    render(){
        return(
            <div>
                <h1>Business Page</h1>
                <button onClick={this.setPictures}>Pictures</button>
                <button onClick={this.setServices}>Services</button>
                <button onClick={this.setAbout}>About</button>
                {this.setComponent()}
            </div>
        )
    }

}

export default MainBusinessPage;