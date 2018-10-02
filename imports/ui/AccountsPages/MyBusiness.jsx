import React, {Component} from 'react'
import {BusinessDb, BusinessImagesDB} from '../../api/collections/collections.js';
import { withTracker } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

class MyBusiness extends Component{

    getPosts = () => {
        const businessdb = this.props.businessdb;

        //console.log(resolutions)
        
        return businessdb.map((businessdb)=>{
            return(
                <div key = {businessdb._id}>
                    <h3>{businessdb.Business}</h3>
                    <h3>{businessdb.LocationID}</h3>
                    <h3>{businessdb.Provinces}</h3>
                    
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
    Meteor.subscribe('businessdb');
    Meteor.subscribe('files.all');
    Meteor.subscribe('businessimagesdb');
    const UserID = Session.get("currentUser");
    let isDataReady = Meteor.subscribe('files.all');
    return{
        businessdb : BusinessDb.find({User:UserID}).fetch(),
        businessimagesdb : BusinessImagesDB.find({}).fetch(),     
        
        isDataReady: isDataReady.ready(),
    }
})(MyBusiness);
