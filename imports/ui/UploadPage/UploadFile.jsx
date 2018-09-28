import React, {Component} from 'react';
import {BusinessDb} from '../../api/collections/collections.js';
import { withTracker } from 'meteor/react-meteor-data';

class UploadFile extends Component{

    render(){
        return(
            <div>
                <h1>Upload</h1>
                <form action="">
                    <label htmlFor="">Business Name</label>
                    <input name="BusinessName" type="text"/>
                    <label htmlFor="">Phone Number 1</label>
                    <input name="PhoneNumber1" type="text"/>
                    <label htmlFor="">Phone Number 2</label>
                    <input name="PhoneNumber2" type="text"/>
                    <label htmlFor="">Email</label>
                    <input name="Email" type="text"/>
                    <label htmlFor="">Location</label>
                    <input name="Location" type="text"/>
                    <label htmlFor="">Service</label>
                    <input name="Service" type="text"/>
                    <button type="submit">Enter Data</button>
                </form>
                
            </div>
        )
    }

}

export default withTracker(()=>{
    Meteor.subscribe('businessdb');
    
    return{
        businessdb : BusinessDb.find({}).fetch(),
    }
})(UploadFile);