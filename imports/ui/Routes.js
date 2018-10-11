import react from 'react'
import {mount} from 'react-mounter';
import HomePage from './HomePage/HomePage.jsx';
import MainCityPage from './CityProfilePage/MainCityPage.jsx';
import MainBusinessPage from './BusinessProfilePage/MainBusinessPage.jsx';
import Login from './AccountsPages/LogIn.jsx';
import SignUp from './AccountsPages/SignUp.jsx';
import UploadFile from './UploadPage/UploadFile.jsx';
import ReportFile from './UploadPage/ReportFile.jsx';
import NotFound from './NotFound.jsx';
import UserPage from './AccountsPages/UserPage.jsx';
import UploadBusiness from './UploadPage/UploadBusiness.jsx';
import UploadPage from './UploadPage/UploadPlace.jsx';
import UploadPlace from './UploadPage/UploadPlace.jsx';
import SightPage from './SightProfilePage/SightPage.jsx';



let open;
open = FlowRouter.group({});
loggedIn = FlowRouter.group({
    triggersEnter:[function(){
        if(!(Meteor.loggingIn() || Meteor.userId())){
            return FlowRouter.go('/Login')
        }
    }]
})

open.route('/',{
    name:'Home',
    action:()=>{
        mount(HomePage,{})
    }
});


open.route('/MainCityPage',{
    name:'MainCityPage',
    action:()=>{
        mount(MainCityPage,{})
    }
});
open.route('/MainBusinessPage',{
    name:'MainBusinessPage',
    action:()=>{
        mount(MainBusinessPage,{})
    }
});

open.route('/Login',{
    name:'Login',
    action:()=>{
        mount(Login,{})
    }
});

open.route('/SignUp',{
    name:'SignUp',
    action:()=>{
        mount(SignUp,{})
    }
});

open.route('/UploadFile',{
    name:'UploadFile',
    action:()=>{
        mount(UploadFile,{})
    }
});

open.route('/ReportFile',{
    name:'ReportFile',
    action:()=>{
        mount(ReportFile,{})
    }
});

open.route('/SightPage',{
    name:'sightpage',
    action:()=>{
        mount(SightPage,{})
    }
});

loggedIn.route('/UserPage',{
    name:'UserPage',
    action:()=>{
        mount(UserPage,{})
    }
});

loggedIn.route('/UploadBusiness',{
    name:'UploadBusiness',
    action:()=>{
        mount(UploadBusiness,{})
    }
});

loggedIn.route('/UploadPlace',{
    name:'UploadPlace',
    action:()=>{
        mount(UploadPlace,{})
    }
});

FlowRouter.notFound = {
    action(){
        mount(NotFound, {})
    }
}