import {Mongo} from 'meteor/mongo';

const BusinessDb = new Mongo.Collection('businessdb');

export {BusinessDb};