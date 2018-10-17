import React, {Component} from 'react'
import {ImagesDB} from '../../api/collections/collections.js';
import { withTracker } from 'meteor/react-meteor-data';

class CityPictures extends Component{

    getPictures = () =>{
        const imagesdb = this.props.imagesdb;

        return imagesdb.map((imagesdb)=>{

            const files = ImagesDB.findOne({_id:imagesdb._id}).link();

            return(
                <div key={imagesdb._id}>
                    <img src={files} alt="" className="img-responsive rounded thumbnail float-center"/><br/><br/><br/>
                </div>
            )
        })

    }


    render(){
        //if(this.props.isDataReady){
            return(
                <div className="container-fluid pageContent">
                   
                    <br/>
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
        imagesdb : ImagesDB.find({'meta.provinces':Session.get('City')}).fetch(),
        docsReadyYet,
        //imageFiles
    }
})(CityPictures);

