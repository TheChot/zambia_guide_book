import {Mongo} from 'meteor/mongo';
import { FilesCollection } from 'meteor/ostrio:files';

const BusinessDb = new Mongo.Collection('businessdb');

const BusinessImagesDB = new FilesCollection({collectionName:'businessimagesdb'});

const SitesDB = new Mongo.Collection('sitesdb');

export {BusinessDb};
export {BusinessImagesDB};
export {SitesDB};