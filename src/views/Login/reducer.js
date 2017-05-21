import { LOGIN } from '../../consts/action';

export default function loginReducer(state = { userInfo: null }, action) {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, { userInfo: action.data });
        default:
            return state;
    }
};
