import React, {Component} from 'react'
import Map from './Map.jsx';
import Navbar from './Navbar.jsx';
import Trending from './Trending.jsx';
import WhatToDo from './WhatToDo.jsx';
import FavouritePictures from './FavouritePictures.jsx';


class HomePage extends Component{

    // constructor(){
    //     super();

    //     this.state = {
    //         TrendingComp:true,
    //         WhatToDoComp: false,
    //         FavouritePicturesComp:false
    //     }
    // }
    
    // setTrending = () =>{
    //     this.setState({
    //         TrendingComp:true,
    //         WhatToDoComp: false,
    //         FavouritePicturesComp:false
    //     });
    // }

    // setWhatToDo = () =>{
    //     this.setState({
    //         TrendingComp:false,
    //         WhatToDoComp: true,
    //         FavouritePicturesComp:false
    //     })
    // }

    // setFavPics = () =>{
    //     this.setState({
    //         TrendingComp:false,
    //         WhatToDoComp: false,
    //         FavouritePicturesComp: true
    //     })
    // }

    // setComponent = () =>{https://github.com/TheChot/zambia_guide_bohttps://github.com/TheChot/zambia_guide_book.githttps://github.com/TheChot/zambia_guide_book.gitok.git

    //     if (this.state.TrendingComp){
    //         return(<Trending/>);
    //     } else if (this.state.WhatToDoComp){
    //         return(<WhatToDo/>);
    //     } else if (this.state.FavouritePicturesComp){
    //         return(<FavouritePictures/>)
    //     }

    // }

    render(){
        return(
            <div>
                <Navbar/>  
                <Map/>
                <div className = "container-fluid padding mainButtons">
                    {/* <div className="row text-center padding">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <button className="button1" onClick ={this.setTrending} >Trending</button>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <button className="button2" onClick ={this.setWhatToDo}>What To Do</button>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <button className="button3" onClick ={this.setFavPics}>Favourite Pictures</button>
                        </div>
                        
                        
                        
                    </div> */}
                </div>
                
                {/* {this.setComponent()} */}
                
            </div>
        )
    }

}

export default HomePage;