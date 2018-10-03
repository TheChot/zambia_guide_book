import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import Navbar from '../HomePage/Navbar.jsx';

class Login extends Component{

    loginUser = e =>{
        e.preventDefault();

        const {target} = e;
        const password = target.password.value;
        const email = target.username.value;

        Meteor.loginWithPassword(email, password,(err)=>{
            if(err){
                console.log(err.reason);
            } else{
                FlowRouter.go('/UserPage');
            }
        })
    }

    render(){
        return(
            <div>
                <Navbar/>
                <h1>Login</h1>
                <form action="" onSubmit ={this.loginUser}>
                    <label htmlFor="">UserName:</label>
                    <input type="text" name="username" id="username" required/><br/><br/>
                    <label htmlFor="">Password:</label>
                    <input type="password" name="" id="password" required/><br/><br/>
                    <button type="submit">Enter</button>
                
                </form><br/>
            </div>
        )
    }

}

export default Login;