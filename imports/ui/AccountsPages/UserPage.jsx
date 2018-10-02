import React, {Component} from 'react'
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import MyBusiness from './MyBusiness.jsx';
import MyPlaces from './MyPlaces.jsx';
import { withTracker } from 'meteor/react-meteor-data';

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

    setUser = () =>{
        
       // currentUser = String(Meteor.user()._id);
        //Session.set("currentUser", currentUser);
        console.log(Meteor.user()._id);
    }

    render(){
        return(
            <div>
                {this.setUser()}
                <h1>User Page</h1>               
                {this.displayUser()}
                <button onClick={this.logoutUser}>Logout</button>
                <MyBusiness/>
                <MyPlaces/>

                <div>
                    <div>
                        <a href="/UploadPlace"><h1>Add a Place</h1></a>
                    </div>
                    <div>
                        <a href="/UploadBusiness"><h1>Add a Business</h1></a>
                    </div>
                </div>
                
                
            </div>
        )
    }

}

export default UserPage;