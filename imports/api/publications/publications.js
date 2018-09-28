import { Meteor } from "meteor/meteor";
import {BusinessDb} from '../collections/collections.js';

Meteor.publish('businessdb', ()=>{
    return BusinessDb.find();
})