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

    logoutUser = (e) => {
        e.preventDefault();

        Meteor.logout((err)=>{
            if(err){
                console.log(err.reason);
            } else{
                FlowRouter.go('/Login')
            }
        })
    }

    render(){
        return(
            <div>
                <h1>User Page</h1>               
                {this.displayUser()}
                <button onClick={this.logoutUser}>Logout</button>
                
                
            </div>
        )
    }

}

export default UserPage;