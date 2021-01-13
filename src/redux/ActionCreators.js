import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites'; // temp, to simulate server request
export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: { 
        campsiteId, 
        rating, 
        author, 
        text 
    } // ES6 shorthand prop names
});

// function to simulate server request
// Thunk allows us to use this function w/in function syntax.
export const fetchCampsites = () => dispatch => {

    dispatch(campsitesLoading());

    setTimeout(() => {
        dispatch(addCampsites(CAMPSITES));
    }, 2000);
};

// No Thunk in these action creators, so there is only one function, and each will go straight to the Reducer.
export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
    //no payload for this one
});

export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});