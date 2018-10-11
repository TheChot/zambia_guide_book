import React, {Component} from 'react';
import BusinessPictures from './BusinessPictures.jsx';
import Services from './Services.jsx';
import AboutBusiness from './AboutBusiness.jsx';
import Navbar from '../HomePage/Navbar.jsx';

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
                <Navbar/>
                <h1>Business Page</h1>
                <div className = "container-fluid padding mainButtons">
                    <div className="row text-center padding">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <button className="button1" onClick={this.setPictures}>Pictures</button>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <button className="button2" onClick={this.setServices}>Services</button>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <button className="button3" onClick={this.setAbout}>About</button>
                        </div>
                        
                        
                        
                    </div>
                </div>
                
                
                
                {this.setComponent()}
            </div>
        )
    }

}

export default MainBusinessPage;