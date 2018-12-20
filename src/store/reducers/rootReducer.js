import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import {firestoreReducer} from 'redux-firestore'
import { firestore } from 'firebase';


const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer
});

export default rootReducer
