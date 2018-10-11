import { Meteor } from "meteor/meteor";
import {BusinessDb} from '../collections/collections.js';
import {BusinessImagesDB} from '../collections/collections.js';
import {SitesDB} from '../collections/collections.js';
import {ImagesDB} from '../collections/collections.js';

Meteor.publish('businessdb', ()=>{
    return BusinessDb.find();
})

Meteor.publish('businessimagesdb', ()=>{
    return BusinessImagesDB.find();
})

Meteor.publish('files.all', ()=>{

    return BusinessImagesDB.find().cursor;
  
  });

Meteor.publish('sitesdb', ()=>{
    return SitesDB.find();
});

Meteor.publish('imagesdb', ()=>{
    return ImagesDB.find();
})

Meteor.publish('files.images', ()=>{

    return ImagesDB.find().cursor;
  
  });