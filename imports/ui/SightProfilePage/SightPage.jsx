import React, {Component} from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import {SitesDB, BusinessImagesDB, ImagesDB} from '../../api/collections/collections.js';

class SightPage extends Component{
    
    
    getPosts = () => {
        const sitesdb = this.props.sitesdb;
        const businessimagesdb = this.props.businessimagesdb;
        
        //console.log(resolutions)
        
        return sitesdb.map((sitesdb)=>{
            const files = BusinessImagesDB.findOne({'meta.BusinessName':sitesdb.Site}).link();
            return(
                <div key = {sitesdb._id}>
                    <img src={files} alt={sitesdb.Site}/>
                    {/* {this.getImages(businessdb.Business)}*/}
                    <h3>{sitesdb.Site}</h3>
                    <h3>{sitesdb.LocationID}</h3>
                    <h3>{sitesdb.Provinces}</h3>
                    <p>{sitesdb.About}</p>
                    
                </div>
            )
        })
    }

    render(){
        return(
            <div>
                <h1>Sight Page</h1>
                {this.getPosts()}
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
