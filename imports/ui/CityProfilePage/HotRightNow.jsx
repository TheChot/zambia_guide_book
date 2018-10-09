import React, {Component} from 'react';
import {SitesDB, BusinessImagesDB} from '../../api/collections/collections.js';
import { withTracker } from 'meteor/react-meteor-data';


class HotRightNow extends Component{

    goToBusiness = (e,siteid) =>{
        Session.set("siteid",siteid);
        FlowRouter.go('/SightPage');
    }


    getPosts = () => {
        const sitesdb = this.props.sitesdb;
        const businessimagesdb = this.props.businessimagesdb;
        
        //console.log(resolutions)
        
        return sitesdb.map((sitesdb)=>{
            const files = BusinessImagesDB.findOne({'meta.BusinessName':sitesdb.Site}).link();
            return(
                <div key = {sitesdb._id}>
                    <img src={files} alt={sitesdb.Site}/>
                    {/* {this.getImages(businessdb.Business)} */}
                    <h3>{sitesdb.Site}</h3>
                    <h3>{sitesdb.LocationID}</h3>
                    <h3>{sitesdb.Provinces}</h3>
                    <button onClick={e => this.goToBusiness(e,sitesdb._id)}>Check it Out</button>
                </div>
            )
        })
    }

    render(){
        return(
            <div>
                <h1>Attractions</h1>
                {this.getPosts()}
            </div>
        )
    }

}
export default withTracker(()=>{
    Meteor.subscribe('sitesdb');
    Meteor.subscribe('files.all');
    Meteor.subscribe('businessimagesdb');
    const province = Session.get('City');
    let isDataReady = Meteor.subscribe('files.all');
    return{
        sitesdb : SitesDB.find({Provinces:province}).fetch(),
        businessimagesdb : BusinessImagesDB.find({}).fetch(),     
        
        isDataReady: isDataReady.ready(),
    }
})(HotRightNow);
