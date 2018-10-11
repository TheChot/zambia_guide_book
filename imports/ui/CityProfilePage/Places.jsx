import React, {Component} from 'react'
import {BusinessDb, BusinessImagesDB} from '../../api/collections/collections.js';
import { withTracker } from 'meteor/react-meteor-data';


class Places extends Component{

    goToBusiness = (e,businessid) =>{
        Session.set("businessid",businessid);
        FlowRouter.go('/MainBusinessPage');
    }

    getPosts = () => {
        const businessdb = this.props.businessdb;
        const businessimagesdb = this.props.businessimagesdb;
        
        //console.log(resolutions)
        
        return businessdb.map((businessdb)=>{
            const files = BusinessImagesDB.findOne({'meta.BusinessName':businessdb.Business}).link();
            return(
                <div key = {businessdb._id}>
                    <img src={files} alt={businessimagesdb.name}/>
                    {/* {this.getImages(businessdb.Business)} */}
                    <h3>{businessdb.Business}</h3>
                    <h3>{businessdb.LocationID}</h3>
                    <h3>{businessdb.Provinces}</h3>
                    <button onClick={e => this.goToBusiness(e,businessdb._id)}>Check it Out</button>
                </div>
            )
        })
    }

    // getImages = (businessName) =>{
        
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
        if(this.props.isDataReady){
            return(
                <div>
                    <h1>Places</h1>
                    {this.getPosts()}
                    
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
