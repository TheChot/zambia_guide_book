import React, {Component} from 'react'

class Navbar extends Component{

    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-light">
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/MainCityPage">City</a>
                        </li>
                        <li className="nav-item">
                            <a href="/MainBusinessPage">Business</a>
                        </li>
                        <li className="nav-item">
                            <a href="/Login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a href="/SignUp">Sign-Up</a>
                        </li>
                    </ul>
                </div>

                </nav>

            </div>
        )
    }

}

export default Navbar;