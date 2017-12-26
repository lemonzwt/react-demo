import ActionsType from '../../actions/ActionTypes'
const initialState={
    status:null,
    userInfo:{}
};
export default function Users(state = initialState, action) {
    switch(action.type){
        case ActionsType.USER_ADD_SUCCESS:
        case ActionsType.USER_ADD_IN:
        case ActionsType.USER_ADD_TEXT:
        case ActionsType.USER_ADD_CLEAR:
            return {
                ...state,
                status:action.type,
                userInfo:action.userInfo
            };
            break;
        default:
            return state;
            break;
    }
}