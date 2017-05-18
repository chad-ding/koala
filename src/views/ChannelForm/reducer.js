/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-18 16:26:43
 */
import {ADD_CHANNEL} from '../../consts/action';

export default function channelFormReducer(state = {}, action){
    switch(action.type){
        case ADD_CHANNEL:
            return state;
        default:
            return state;
    }
}