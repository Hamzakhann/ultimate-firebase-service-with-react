import { stat } from "fs";

const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: 'login success'
      }
      case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return state
      case 'SIGNUP_SUCCESS':
      console.log('signup Success')
      return{
        ...state,
        authError: null
      }
      case 'SIGNUP_ERROR':
      console.log('signU failed')
      return {
        ...state,
        authError :action.err.message
      }
    default:
      return state
  }
};

export default authReducer;