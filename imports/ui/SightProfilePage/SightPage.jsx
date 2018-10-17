import React, {Component} from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import {SitesDB, BusinessImagesDB, ImagesDB} from '../../api/collections/collections.js';
import Navbar from '../HomePage/Navbar.jsx';

class SightPage extends Component{
    
    
    getPosts = () => {
        const sitesdb = this.props.sitesdb;
        const businessimagesdb = this.props.businessimagesdb;
        
        //console.log(resolutions)
        
        return sitesdb.map((sitesdb)=>{
            const files = BusinessImagesDB.findOne({'meta.BusinessName':sitesdb.Site}).link();
            return(
                <div key = {sitesdb._id}>
                    <div className="row padding">
                        <div className="col-md-12 col-lg-6">
                            <h3>{sitesdb.Site}</h3>
                            <h3>{sitesdb.LocationID}</h3>
                            <h3>{sitesdb.Provinces}</h3>
                            
                        </div>
                        <div className="col-lg-6">
                            <img className="img-thumbnail rounded float-right" src={files} alt={sitesdb.Site}/>   
                        </div>
                        
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div>
                        <h1>About</h1>
                        <p>{sitesdb.About}</p>
                    </div>
                    {/* {this.getImages(businessdb.Business)}*/}
                    
                    
                </div>
            )
        })
    }

    render(){
        return(
            <div>
                <Navbar/>
                <div className="container-fluid infoPage">
                    {this.getPosts()}
                </div>
                
            </div>
        )
    }

}

export default withTracker(()=>{
    Meteor.subscribe('sitesdb');
    Meteor.subscribe('files.all');
    Meteor.subscribe('businessimagesdb');
    const siteid = Session.get("siteid");
    
    let isDataReady = Meteor.subscribe('files.all');
    return{
        sitesdb : SitesDB.find({_id:siteid}).fetch(),
        businessimagesdb : BusinessImagesDB.find({}).fetch(),     
        
        isDataReady: isDataReady.ready(),
    }
})(SightPage);
