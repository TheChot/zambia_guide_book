import React, {Component} from 'react';
import BusinessPictures from './BusinessPictures.jsx';
import Services from './Services.jsx';
import AboutBusiness from './AboutBusiness.jsx';
import Navbar from '../HomePage/Navbar.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import {BusinessDb, BusinessImagesDB, ImagesDB} from '../../api/collections/collections.js';

class MainBusinessPage extends Component{

    /*
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
    */
    getPosts = () => {
        const businessdb = this.props.businessdb;
        const businessimagesdb = this.props.businessimagesdb;
        
        //console.log(resolutions)
        
        return businessdb.map((businessdb)=>{
            const files = BusinessImagesDB.findOne({'meta.BusinessName':businessdb.Business}).link();
            return(
                <div key = {businessdb._id}>
                    <img src={files} alt={businessimagesdb.name}/>
                    {/* {this.getImages(businessdb.Business)} */}
                    <h3>{businessdb.Business}</h3>
                    <h3>{businessdb.LocationID}</h3>
                    <h3>{businessdb.Provinces}</h3>
                    
                </div>
            )
        })
    }

    render(){
        // const files = BusinessImagesDB.findOne({'meta.BusinessName':businessdb.Business}).link();
        // const businessdb = this.props.businessdb;

        return(
            <div >
                <Navbar/>
                <h1>Business Page</h1>
                <div>
                    {this.getPosts()}
                </div>
                {/* <button onClick={this.setPictures}>Pictures</button>
                <button onClick={this.setServices}>Services</button>
                <button onClick={this.setAbout}>About</button>
                {this.setComponent()} */}
            </div>
        )
    }

}

export default withTracker(()=>{
    Meteor.subscribe('businessdb');
    Meteor.subscribe('files.all');
    Meteor.subscribe('businessimagesdb');
    const businessId = Session.get("businessid");
    
    let isDataReady = Meteor.subscribe('files.all');
    return{
        businessdb : BusinessDb.find({_id:businessId}).fetch(),
        businessimagesdb : BusinessImagesDB.find({}).fetch(),     
        
        isDataReady: isDataReady.ready(),
    }
})(MainBusinessPage);
