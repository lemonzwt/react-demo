import ActionTypes from '../ActionTypes'

export default class UserCommand {
    static addUser(userInfo){
        return (dispatch)=>{
            dispatch({
                type: ActionTypes.USER_ADD_IN,
                userInfo: userInfo
            });
            setTimeout(()=>{
                dispatch({
                    type: ActionTypes.USER_ADD_SUCCESS,
                    userInfo: userInfo
                });
            },2000);
        }
    }
}