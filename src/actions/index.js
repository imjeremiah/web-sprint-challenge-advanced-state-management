import axios from 'axios';

// async action creators
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";

// Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START });

    axios.get("http://localhost:3333/smurfs")
        .then(res => {
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_SMURFS_FAILURE, payload: err })
        });
};


// Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
export const addSmurf = (smurf) => {
    return { type: ADD_SMURF, payload: smurf }
}

// Add a standard action that allows us to set the value of the error message slice of state.
export const setError = (error) => {
    return { type: SET_ERROR, payload: error }
}