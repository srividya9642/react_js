import Axios from 'axios'
//action types
let USER_REQ='USER_REQ'
let USER_SUCCESS='USER_SUCCESS'
let USER_FAILURE='USER_FAILUR'

let user_req_action = ()=>{
    return {type:USER_REQ}
}
let user_success_action=(user)=>{
    return {type:USER_SUCCESS,payload:"user"}
}
let user_failure_action=(user)=>{
    return {type:USER_FAILURE,payload:"failed"}
}
let user_action=()=>{
    return async (dispatch)=>{
        dispatch(user_req_action())
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            console.log(res,data)
            dispatch(user_success_action(res.data))
       })
       .catch((err)=>{
        dispatch(user_failure_action(res.data))
       })



    }
 }

 export {USER_REQ,USER_SUCCESS,USER_FAILURE,user_action}