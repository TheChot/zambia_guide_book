import { Meteor } from "meteor/meteor";
import {BusinessDb} from '../collections/collections.js';
import {BusinessImagesDB} from '../collections/collections.js';

Meteor.publish('businessdb', ()=>{
    return BusinessDb.find();
})

Meteor.publish('businessimagesdb', ()=>{
    return BusinessImagesDB.find();
})