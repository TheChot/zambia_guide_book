import React, {Component} from 'react'

class Navbar extends Component{

    renderNav = () =>{

        if(!(Meteor.loggingIn() || Meteor.userId())){
            return (
                <div>

                   <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                        <div className= "container-fluid">
                            <a className= "navbar-brand" href="/"><img src="#" alt="LogoHere"/></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav loggedOutNav">
                                    <li className="nav-item">
                                        <a href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/UploadFile">Upload A Picture</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/Login">Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/SignUp">Sign-Up</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        } else{
            return(
                <div>
                    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                        <div className= "container-fluid">
                            <a className= "navbar-brand" href="/"><img src="#" alt="LogoHere"/></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav loggedInNav">
                                    <li className="nav-item">
                                        <a href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/UploadFile">Upload A Picture</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/UploadBusiness">Add a Business</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/UploadPlace">Add an Attraction</a>
                                    </li> 
                                    <li className="nav-item">
                                        <a href="/UserPage">Profile</a>
                                    </li>                              
                                    <li className="nav-item">
                                        <a href="#">Logout</a>
                                    </li>                                
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        }

    }

    render(){
        return(
            <div>
                {this.renderNav()}

            </div>
        )
    }

}

export default Navbar;


