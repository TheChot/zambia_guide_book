import React, {Component} from 'react';
import {ImagesDB, BusinessImagesDB} from '../../api/collections/collections.js';
import { withTracker } from 'meteor/react-meteor-data';

class FavouritePictures extends Component{

    getPictures = () =>{
        const imagesdb = this.props.imagesdb;

        return imagesdb.map((imagesdb)=>{

            const files = ImagesDB.findOne({_id:imagesdb._id}).link();

            return(
                <div key={imagesdb._id}>
                    <img src={files} alt=""/>
                </div>
            )
        })

    }



//      getImages = (businessName) =>{
        
    //     const businessimagesdb = this.props.businessimagesdb;
    //     //const MetaData = businessimagesdb.meta.BusinessName;
        

    //     //const link = BusinessImagesDB.find({}).link(); _id:'fFzvDd6e3DgFcbwaS'
    //     return businessimagesdb.map((businessimagesdb)=>{
    //         const files = BusinessImagesDB.findOne({_id:'9B7TNGPxZ86zDZigj'}).link();

    //         return(
    //             <div key ={businessimagesdb._id}>
    //                 <img src={files} alt={businessimagesdb.name}/>
                    
    //             </div>
    //         )
    //     })

    // }
    render(){
        //if(this.props.isDataReady){
            return(
                <div>
                    <h1>Favourite Pictures</h1>
                    {this.getPictures()}
                </div>
            )
      
       // }
        
    }

}

export default withTracker(()=>{
    
    Meteor.subscribe('imagesdb');
    const filesHandle = Meteor.subscribe('imagesdb');
    const docsReadyYet = filesHandle.ready();
    //const imageFiles = ImagesDB.find({}).fetch();
    
    return{
        imagesdb : ImagesDB.find({}).fetch(),
        docsReadyYet,
        //imageFiles
    }
})(FavouritePictures);
