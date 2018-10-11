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
                <div>
                    <form action="" onSubmit ={this.loginUser}>
                        <div className="md-form mt-3">
                            <input 
                            type="text" 
                            name="username" 
                            id="username"
                            className="form-control"
                            placeholder="E-mail" 
                            required/><br/><br/>
                        </div>
                        <div className="md-form">
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                className="form-control"
                                placeholder="Password"
                                required/><br/><br/>
                        </div>
                        <button 
                            type="submit" 
                            className ="btn btn-info my-4 btn-block">
                                Enter
                        </button>
                    </form>
                </div>
                
                   
                <br/>
            </div>
        )
    }

}

export default Login;