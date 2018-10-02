import React, {Component} from 'react'
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

class UserPage extends Component{

    displayUser = () =>{
        if (Meteor.user()){
            const fname = Meteor.user().profile.firstName;
            const lname = Meteor.user().profile.lastName;
            return (<h1>Hi {fname + " " + lname}</h1>);
        }
    }
    displayEmail = () =>{
        if (Meteor.user()){
            const email = Meteor.user().profile.email;
            return (<h1>{email}</h1>);
        }
    }

    render(){
        return(
            <div>
                <h1>User Page</h1>               
                {this.displayUser()}
                
                
            </div>
        )
    }

}

export default UserPage;