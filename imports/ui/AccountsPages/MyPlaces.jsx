import React, {Component} from 'react'
import {BusinessDb, BusinessImagesDB} from '../../api/collections/collections.js';
import { withTracker } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

class MyPlaces extends Component{

    getPosts = () => {
        const sitesdb = this.props.sitesdb;

        //console.log(resolutions)
        
        return sitesdb.map((sitesdb)=>{
            return(
                <div key = {sitesdb._id}>
                    <h3>{sitesdb.Site}</h3>
                    <h3>{sitesdb.LocationID}</h3>
                    <h3>{sitesdb.Provinces}</h3>
                    
                </div>
            )
        })
    }




    render(){        
        return(
            <div>
                <h1>Places</h1>
                {this.getPosts()}
                
            </div>
        )
       
    }

}

export default withTracker(()=>{
    Meteor.subscribe('sitesdb');
    Meteor.subscribe('files.all');
    Meteor.subscribe('businessimagesdb');
    const UserID = Session.get("currentUser");
    let isDataReady = Meteor.subscribe('files.all');
    return{
        sitesdb : BusinessDb.find({User:UserID}).fetch(),
        businessimagesdb : BusinessImagesDB.find({}).fetch(),     
        
        isDataReady: isDataReady.ready(),
    }
})(MyPlaces);
