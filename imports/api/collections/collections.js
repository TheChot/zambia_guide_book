import {Mongo} from 'meteor/mongo';
import { FilesCollection } from 'meteor/ostrio:files';

const BusinessDb = new Mongo.Collection('businessdb');

const BusinessImagesDB = new FilesCollection({collectionName:'businessimagesdb', storagePath:'Uploads/BusinessImagesDB'});

const SitesDB = new Mongo.Collection('sitesdb');

const ImagesDB = new FilesCollection({collectionName:'imagesdb', storagePath:'Uploads/ImagesDB'});

export {BusinessDb};
export {BusinessImagesDB};
export {SitesDB};
export {ImagesDB};