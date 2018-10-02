import React, {Component} from 'react';
import {BusinessDb, BusinessImagesDB} from '../../api/collections/collections.js';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

class UploadBusiness extends Component{

    constructor(){
        super();
        this.state = {
            Image:'',
            BusinessName:'',
            PhoneNumberOne:'',
            PhoneNumberTwo:'',
            Email:'',
            Location:'',
            Service:'',
            Province:'',
            imagePreviewURL:'',
            imagefile:''
        }  
    }

    handleInput = (e) =>{
        const name = e.target.name;

        this.setState({
            [name]:e.target.value
        })
    }

    handleSubmit= (e) =>{

        e.preventDefault();

        const {target} = e;
        
        if(target.Image.files && target.Image.files[0]){
            
            const imageUploader = target.Image.files[0];

            let reader = new FileReader();
            
            reader.onloadend = () => {

                this.setState({
                    imagefile:imageUploader,
                    imagePreviewURL: reader.result
    
                })
                
            }

            reader.readAsDataURL(imageUploader);

            console.log(imageUploader);

            



            if (imageUploader){
                let uploadInstance = BusinessImagesDB.insert({
                    file: imageUploader,
                    meta: {
                      //locator: self.props.fileLocator,
                      userId: Meteor.userId() // Optional, used to check on server for file tampering
                    },
                    streams: 'dynamic',
                    chunkSize: 'dynamic',
                    allowWebWorkers: true // If you see issues with uploads, change this to false
                  }, false)

                  uploadInstance.start();
            }
        }
        const Business = this.state.BusinessName;
        const PhoneOne = this.state.PhoneNumberOne;
        const PhoneTwo = this.state.PhoneNumberTwo;
        const EmailID = this.state.Email;
        const LocationID = this.state.Location;
        const Services = this.state.Service;
        const Provinces = this.state.Province;

        const NewBusiness = {
            Business, PhoneOne, PhoneTwo, EmailID,
            LocationID, Services, Provinces
        }

        Meteor.call('newBusiness', NewBusiness);

    }

    render(){

        if(this.props.imageFiles && this.props.docsReadyYet){
            
            let {imagePreviewUrl} = this.state;
            let $imagePreview = null;



            if(imagePreviewUrl){
                
                $imagePreview = (<img src={imagePreviewUrl}/>)
            } else {
                $imagePreview = (<h1>Waiting On an Image</h1>)
            }


            return(
                <div>
                    <h1>Upload</h1>
                    <form action="" onSubmit = {this.handleSubmit}>
                        <label htmlFor="">Upload an image</label>
                        <input type="file" name="Image" onChange={this.handleInput}/><br/><br/>
                        <label htmlFor="">Business Name</label>
                        <input name="BusinessName" type="text" onChange={this.handleInput}/><br/><br/>
                        <label htmlFor="">Phone Number 1</label>
                        <input name="PhoneNumberOne" type="text" onChange={this.handleInput}/><br/><br/>
                        <label htmlFor="">Phone Number 2</label>
                        <input name="PhoneNumberTwo" type="text" onChange={this.handleInput}/><br/><br/>
                        <label htmlFor="">Email</label>
                        <input name="Email" type="text" onChange={this.handleInput}/><br/><br/>
                        <label htmlFor="">Province</label>
                        <select name="Province" id="" onChange={this.handleInput}>
                            <option value="LUSAKA">Lusaka</option>
                            <option value="CENTRAL">Central</option>
                            <option value="COPPERBELT">Copperbelt</option>
                            <option value="EASTERN">Eastern</option>
                            <option value="NORTHERN">Northern</option>
                            <option value="SOUTHERN">Southern</option>
                            <option value="MUCHINGA">Muchinga</option>
                            <option value="NORTHWESTERN">North Western</option>
                            <option value="LUAPULA">Luapula</option>
                            <option value="WESTERN">Western</option>
                        </select>
                        <br/><br/>
                        <label htmlFor="">Location</label>
                        <input name="Location" type="text" onChange={this.handleInput}/><br/><br/>
                        <label htmlFor="">Service</label>
                        <input name="Service" type="text" onChange={this.handleInput}/><br/><br/>
                        
                        <button type="submit">Enter Data</button>
                    </form>
                    {$imagePreview}
                    
                </div>
            )
        }
        else{
            return(
                <h1>Loading</h1>
            )
        }
    }

}

export default withTracker(()=>{
    Meteor.subscribe('businessdb');
    Meteor.subscribe('businessimagesdb');
    const filesHandle = Meteor.subscribe('files.all');
    const docsReadyYet = filesHandle.ready();
    const imageFiles = BusinessImagesDB.find({}).fetch();
    
    return{
        businessdb : BusinessDb.find({}).fetch(),
        docsReadyYet,
        imageFiles
    }
})(UploadBusiness);