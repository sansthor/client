import { combineReducers } from 'redux';
import registration from './registration';
import getallservices from './getallservices';
import getmember from './getmember';
import getservicebyid from './getservicebyid';
import putbasicuser from './putbasicuser';
export default combineReducers({
    registration,
    getallservices,
    getmember,
    getservicebyid,
    putbasicuser,
});
