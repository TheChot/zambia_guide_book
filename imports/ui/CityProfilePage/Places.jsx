import React, {Component} from 'react'
import {BusinessDb, BusinessImagesDB} from '../../api/collections/collections.js';
import { withTracker } from 'meteor/react-meteor-data';


class Places extends Component{

    getPosts = () => {
        const businessdb = this.props.businessdb;

        //console.log(resolutions)
        
        return businessdb.map((businessdb)=>{
            return(
                <div key = {businessdb._id}>
                    <h3>{businessdb.Business}</h3>
                    <h3>{businessdb.LocationID}</h3>
                    <h3>{businessdb.Provinces}</h3>
                    
                </div>
            )
        })
    }

    getImages = () =>{
        
        const businessimagesdb = this.props.businessimagesdb;
        

        //const link = BusinessImagesDB.find({}).link();
        return businessimagesdb.map((businessimagesdb)=>{
            const files = BusinessImagesDB.findOne({_id:"hFDo2b6DAnqvhnNhK"}).link();

            return(
                <div key ={businessimagesdb._id}>
                    <img src={files} alt={businessimagesdb.name}/>
                    <h1>{businessimagesdb.name}</h1>
                </div>
            )
        })

    }


    render(){
        if(this.props.isDataReady){
            return(
                <div>
                    <h1>Places</h1>
                    {this.getPosts()}
                    {this.getImages()}
                </div>
            )
        } else{
            return(
                <div>
                    <h1>Please Wait</h1>
                </div>
            )
        }
    }

}

export default withTracker(()=>{
    Meteor.subscribe('businessdb');
    Meteor.subscribe('files.all');
    Meteor.subscribe('businessimagesdb');
    const province = Session.get('City');
    let isDataReady = Meteor.subscribe('files.all');
    return{
        businessdb : BusinessDb.find({Provinces:province}).fetch(),
        businessimagesdb : BusinessImagesDB.find({}).fetch(),     
        
        isDataReady: isDataReady.ready(),
    }
})(Places);
