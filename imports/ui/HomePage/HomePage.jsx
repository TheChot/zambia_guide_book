import React, {Component} from 'react'
import Map from './Map.jsx';
import Navbar from './Navbar.jsx';
import Trending from './Trending.jsx';
import WhatToDo from './WhatToDo.jsx';
import FavouritePictures from './FavouritePictures.jsx';


class HomePage extends Component{

    constructor(){
        super();

        this.state = {
            TrendingComp:true,
            WhatToDoComp: false,
            FavouritePicturesComp:false
        }
    }
    
    setTrending = () =>{
        this.setState({
            TrendingComp:true,
            WhatToDoComp: false,
            FavouritePicturesComp:false
        });
    }

    setWhatToDo = () =>{
        this.setState({
            TrendingComp:false,
            WhatToDoComp: true,
            FavouritePicturesComp:false
        })
    }

    setFavPics = () =>{
        this.setState({
            TrendingComp:false,
            WhatToDoComp: false,
            FavouritePicturesComp: true
        })
    }

    setComponent = () =>{

        if (this.state.TrendingComp){
            return(<Trending/>);
        } else if (this.state.WhatToDoComp){
            return(<WhatToDo/>);
        } else if (this.state.FavouritePicturesComp){
            return(<FavouritePictures/>)
        }

    }

    render(){
        return(
            <div>
                <Navbar/>
                <h1>Home Page</h1>
                <Map/>

                <button onClick ={this.setTrending}>Trending</button>
                <button onClick ={this.setWhatToDo}>What To Do</button>
                <button onClick ={this.setFavPics}>Favourite Pictures</button>
                {this.setComponent()}
                
            </div>
        )
    }

}

export default HomePage;