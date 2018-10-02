import { Meteor } from "meteor/meteor";
import {BusinessDb} from '../collections/collections.js';
import {SitesDB} from '../collections/collections.js';


Meteor.methods({

    'newBusiness': (businessdb)=>{        
        
            BusinessDb.insert(businessdb);
        
        }
    }
);

Meteor.methods({

    'newSite': (sitesdb)=>{        
        
            SitesDB.insert(sitesdb);
        
        }
    }
);


