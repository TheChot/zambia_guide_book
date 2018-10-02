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

FlowRouter.route('/',{
    name:'Home',
    action:()=>{
        mount(HomePage,{})
    }
});


FlowRouter.route('/MainCityPage',{
    name:'MainCityPage',
    action:()=>{
        mount(MainCityPage,{})
    }
});

FlowRouter.route('/MainBusinessPage',{
    name:'MainBusinessPage',
    action:()=>{
        mount(MainBusinessPage,{})
    }
});

FlowRouter.route('/Login',{
    name:'Login',
    action:()=>{
        mount(Login,{})
    }
});

FlowRouter.route('/SignUp',{
    name:'SignUp',
    action:()=>{
        mount(SignUp,{})
    }
});

FlowRouter.route('/UploadFile',{
    name:'UploadFile',
    action:()=>{
        mount(UploadFile,{})
    }
});

FlowRouter.route('/ReportFile',{
    name:'ReportFile',
    action:()=>{
        mount(ReportFile,{})
    }
});

FlowRouter.route('/UserPage',{
    name:'UserPage',
    action:()=>{
        mount(UserPage,{})
    }
});

FlowRouter.notFound = {
    action(){
        mount(NotFound, {})
    }
}