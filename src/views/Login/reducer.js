import {RESPONSE_ERROR, USER_LOGINED} from '../../consts/action';

export default function homeReducer(state = { userInfo: null, errorInfo: {data: null, counter: 0} }, action) {
    switch (action.type) {
        case USER_LOGINED:
            return Object.assign({}, state, { userInfo: action.data });
        case RESPONSE_ERROR:
            return Object.assign({}, state, { errorInfo: {data: action.data, counter: state.errorInfo.counter++} });
        default:
            return state;
    }
};