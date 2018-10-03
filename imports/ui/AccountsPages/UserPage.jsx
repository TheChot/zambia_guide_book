import React, {Component} from 'react'
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import MyBusiness from './MyBusiness.jsx';
import MyPlaces from './MyPlaces.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import Navbar from '../HomePage/Navbar.jsx';

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
        
       currentUser = String(Meteor.userId());
       Session.set("currentUser", currentUser);
        //console.log(Meteor.user()._id);
    }

    render(){
        return(
            <div>
                <Navbar/>
                {/* {this.setUser()} */}
                
                <div className="container-fluid padding">
                    <div className ="row padding">
                        
                        <div className="col-md-12 col-lg-6">
                            {this.displayUser()}
                            <button onClick={this.logoutUser}>Logout</button>
                        </div>
                        <div className ="col-lg-6">
                            <img src="CarouselImages/mapofZambia.jpg" alt=""/>
                        </div>
                       
                    </div>
                </div> 
                <div className="container-fluid padding">
                    <div className ="row padding">
                        
                        <div className="col-md-12 col-lg-6">
                            <MyBusiness/>
                        </div>
                        <div className ="col-lg-6">
                            <MyPlaces/> 
                        </div>
                       
                    </div>
                </div>              
                
                <div className="container-fluid padding">
                    <div className ="row padding">
                        <div className="col-md-12 col-lg-6">
                            <a href="/UploadPlace"><h1>Add a Place</h1></a>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <a href="/UploadBusiness"><h1>Add a Business</h1></a>
                        </div>
                    </div>
                </div>
                
                
            </div>
        )
    }

}

export default UserPage;