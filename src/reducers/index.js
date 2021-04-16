
import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_SMURF, SET_ERROR } from "../actions"

// Add the following state values into the initialState:
export const initialState = {
    // - an array of smurfs
    smurfs: [],
    // - a boolean indicating if the app is loading
    isLoading: false,
    // - a string indicating a possible error message
    errorMessage: ""
}

// Add in the arguments needed to complete a standard reducer function.
const reducer = (state = initialState, action) => {
    switch(action.type) {
        // Add in a reducer case to accomidate the start of a smurf fetch.
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true,
                errorMessage: ""
            };
        // Add in a reducer case to accomidate the successful smurf api fetch.
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                errorMessage: ""
            }
        // Add in a reducer cases to accomidate the failed smurf api fetch.
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }
        // Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
        case ADD_SMURF:
            return {
                ...state,
                smurfs: [ ...state.smurfs, action.payload ],
            }
        // Add in a reducer case that adds in a value to the error message.
        case SET_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
