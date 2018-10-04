import React, {Component} from 'react'
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import Navbar from '../HomePage/Navbar.jsx';

class SignUp extends Component{


    newUser = e => {

        e.preventDefault()
        const {target} = e;
        const name = target.name.value
        const password= target.password.value
        const confirmPassword = target.confirmpassword.value;
        const email= target.email.value
        const firstName = target.firstName.value;
        const lastName = target.lastName.value;

           
        if(password != confirmPassword){
            alert("Passwords Do Not Match");
        } else{        
            const profile = {
                email,
                name,
                firstName,
                lastName
            };
            const user = {
                email,password,
                profile,
            }
        
            Accounts.createUser(user, (err) =>{
                if (err)
                {
                console.log(err.reason);
                }
                else {
                    FlowRouter.go('/UserPage')
                }
            }
            );
        }
      }

    render(){
        return(
            <div>
                <Navbar/>
                <h1>Sign Up</h1>
                <div>
                    <form action="" onSubmit={this.newUser}>
                        <div className="md-form mt-3">
                            <input 
                                type="text" 
                                name="firstName" 
                                id="name"
                                className="form-control"
                                placeholder="First Name"
                                required/><br/>
                        </div>
                        <div className="md-form">
                            <input 
                                type="text" 
                                name="lastName" 
                                id="name"
                                className="form-control"
                                placeholder="Last Name" 
                                required/><br/>
                        </div>
                        <div className="md-form">
                            <input 
                                type="text" 
                                name="email" 
                                id="email" 
                                className="form-control"
                                placeholder="E-mail"
                                required/><br/> 
                        </div>
                        <div className="md-form">
                            <input 
                                type="password" 
                                name="password" 
                                id="password"
                                className="form-control" 
                                placeholder="Password"
                                required/><br/>
                        </div>
                        <div className="md-form">
                            <input 
                                type="password" 
                                name="confirmpassword" 
                                id="password"
                                className="form-control"
                                placeholder="Confirm Password" 
                                required/><br/>
                        </div>
                        <button 
                            type="submit" 
                            name="action"
                            className ="btn btn-info my-4 btn-block">
                                SUBMIT
                        </button>
                    </form>  
                </div>
                    
            </div>
        )
    }

}

export default SignUp;