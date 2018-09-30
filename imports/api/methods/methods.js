import { Meteor } from "meteor/meteor";
import {BusinessDb} from '../collections/collections.js';

Meteor.methods({

    'newBusiness': (businessdb)=>{        
        
            BusinessDb.insert(businessdb);
        
        }
    }
);
