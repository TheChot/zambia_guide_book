import React, {Component} from 'react';
import {BusinessDb} from '../../api/collections/collections.js';
import { withTracker } from 'meteor/react-meteor-data';

class UploadFile extends Component{

    render(){
        return(
            <div>
                <h1>Upload</h1>
                <form action=""></form>
                
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