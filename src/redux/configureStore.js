import { createStore, combineReducers } from 'redux';
// import { Reducer, initialState } from './reducer'; // no longer using these
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';

// createStore() will only accept a single reducer as an argument. We have imported combineReducers to fix this.
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        })
    );
    
    return store;
}