import React, {Component} from 'react';
import {BusinessDb, BusinessImagesDB, ImagesDB} from '../../api/collections/collections.js';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Navbar from '../HomePage/Navbar.jsx';

class UploadFile extends Component{

    constructor(){
        super();
        this.state = {          
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

              
        const LocationID = this.state.Location;
        
        const Provinces = this.state.Province;
        //const User = Meteor.user()._id;
        
        if(target.Image.files && target.Image.files[0]){
            
            const imageUploader = target.Image.files[0];

            // let reader = new FileReader();
            
            // reader.onloadend = () => {

            //     this.setState({
            //         imagefile:imageUploader,
            //         imagePreviewURL: reader.result
    
            //     })
                
            // }

            // reader.readAsDataURL(imageUploader);

            // console.log(imageUploader);

            



            if (imageUploader){
                let uploadInstance = ImagesDB.insert({
                    file: imageUploader,
                    meta: {
                      //locator: self.props.fileLocator,
                      userId: Meteor.userId(), // Optional, used to check on server for file tampering
                      provinces: Provinces,
                      Location: LocationID

                    },
                    streams: 'dynamic',
                    chunkSize: 'dynamic',
                    allowWebWorkers: true // If you see issues with uploads, change this to false
                  }, false)

                  uploadInstance.start();
            }
        }
        
        target.Image.value = '';
        target.Province.value='';
        target.Location.value='';
       
        alert("Image Uploaded");
     

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
                    <Navbar/>
                    <h1>Add a Picture</h1>
                    <div>
                        <form action="" onSubmit = {this.handleSubmit} className="text-center">
                            <div>                                
                                <label htmlFor="">Add an image</label>
                                <input 
                                    type="file" 
                                    name="Image" 
                                    onChange={this.handleInput}/><br/><br/>                                
                            </div>
                            <select name="Province" id="" onChange={this.handleInput} className="browser-default custom-select mb-4" required>
                                <option value="">Select A Province</option>
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
                            </select><br/><br/>                                
                           
                            <div className="md-form">                                
                                <input 
                                    name="Location" 
                                    type="text" 
                                    onChange={this.handleInput} 
                                    id="formLocation" 
                                    className="form-control"
                                    placeholder="LOCATION"/><br/><br/>
                                
                            </div>
                            
                            <button 
                                className="btn btn-success btn-block" 
                                type="submit">
                                    Enter Data 
                            </button>
                        </form>
                    </div>
                    
                    
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
    
    Meteor.subscribe('imagesdb');
    const filesHandle = Meteor.subscribe('files.all');
    const docsReadyYet = filesHandle.ready();
    const imageFiles = BusinessImagesDB.find({}).fetch();
    
    return{
        imagesdb : ImagesDB.find({}).fetch(),
        docsReadyYet,
        imageFiles
    }
})(UploadFile);