import React, {Component} from 'react'

class Navbar extends Component{

    renderNav = () =>{

        if(!(Meteor.loggingIn() || Meteor.userId())){
            return (
                <div>

                   <nav className="navbar navbar-expand-md navbar-light bg-success">
                        <div className= "container-fluid navigation">
                            <a className= "navbar-brand" href="/">
                                <img src="logo/bird.png" alt=""/>
                            </a>
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
                    <nav className="navbar navbar-expand-md navbar-light">
                        <div className= "container-fluid">
                            <a className= "navbar-brand" href="/"><img src="#" alt="LogoHere"/></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav loggedInNav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Home</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Upload
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="/UploadFile">Upload A Picture</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/UploadBusiness">Add a Business</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/UploadPlace">Add an Attraction</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/UserPage">Profile</a>
                                    </li>                              
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Logout</a>
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


