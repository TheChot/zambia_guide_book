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
                    <div className="row padding placesCard shadow p-3 mb-5 bg-white rounded">
                        <div className="col-md-12 col-lg-6">
                            <h3>{sitesdb.Site}</h3>
                            <h3>{sitesdb.LocationID}</h3>
                            <h3>{sitesdb.Provinces}</h3>
                        </div>
                        <div className="col-lg-6 ">
                            <img src={files} alt={sitesdb.Site} className="imgCard img-responsive rounded thumbnail float-right"/>
                            
                        </div>
                        <div className="float-left">
                            <button className="btn btn-success" onClick={e => this.goToBusiness(e,sitesdb._id)}>Check it Out</button>
                        </div>
                    </div>                    
                    {/* {this.getImages(businessdb.Business)} */}

                    
                </div>
            )
        })
    }

    render(){
        return(
            <div  className="container-fluid pageContent">
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
        sitesdb : SitesDB.find({Provinces:province},{sort:{insertedAt:-1}}).fetch(),
        businessimagesdb : BusinessImagesDB.find({}).fetch(),     
        
        isDataReady: isDataReady.ready(),
    }
})(HotRightNow);
