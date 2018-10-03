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
        const email= target.email.value
        const firstName = target.firstName.value;
        const lastName = target.lastName.value;

           
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

    render(){
        return(
            <div>
                <Navbar/>
                <h1>Sign Up</h1>               
                <form action="" onSubmit={this.newUser}>
                   
                    <label htmlFor="name">First Names:</label>
                    <input type="text" name="firstName" id="name" required/><br/>
                    <label htmlFor="name">Last Names:</label>
                    <input type="text" name="lastName" id="name" required/><br/>
                    <label htmlFor="name">Username:</label>
                    <input type="text" name="username" id="name" required/><br/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" required/><br/>                        
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" required/><br/>                    
                    <button type="submit" name="action">SUBMIT</button>
                </form>            
                
            </div>
        )
    }

}

export default SignUp;