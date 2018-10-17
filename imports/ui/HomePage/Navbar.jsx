import React, {Component} from 'react'

class Navbar extends Component{

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

    renderNav = () =>{

        if(!(Meteor.loggingIn() || Meteor.userId())){
            return (
                <div>

                   <nav className="navbar navbar-expand-md navbar-light">
                        <div className= "container-fluid navigation">
                            <a className= "navbar-brand" href="/">
                                <img className="img-fluid logo" src="logo/bird.png" alt="LogoHere"/>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav loggedOutNav">
                                    <li className="nav-item">
                                        <a className="nav-link"  href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"  href="/UploadFile">Upload A Picture</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"  href="/Login">Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"  href="/SignUp">Sign-Up</a>
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
                        <div className= "container-fluid navigation">
                            <a className= "navbar-brand" href="/">
                                <img className="img-fluid logo" src="logo/bird.png" alt="LogoHere"/>
                            </a>
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
                                            <a className="dropdown-item" href="/UploadBusiness">Add a Location</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/UploadPlace">Add an Attraction</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/UserPage">Profile</a>
                                    </li>                              
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" onClick={this.logoutUser}>Logout</a>
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


